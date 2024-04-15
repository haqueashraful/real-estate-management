import { createContext, useEffect, useState } from "react";
import { 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile 
} from "firebase/auth";
import auth from '../FireBase/Firebase.config';


const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [myData, setMyData] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setMyData(data)
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (load) {
      updateProfile(auth.currentUser, {
        displayName: user?.displayName,
        photoURL: user?.photoURL
      })
        .then(() => {
          console.log("Profile updated successfully:", user?.displayName, user?.photoURL);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error updating profile:", error.message);
          setLoading(false);
        });
    }
  }, [load, user]);

  const profileUpdate = (name, photo_url) => {
    setUser({
      ...user,
      displayName: name || user?.displayName,
      photoURL: photo_url || user?.photoURL
    });
    setLoad(true);
  };
  

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };



  const logOutUser = () => {
    setLoading(true)
    return signOut(auth)
      .then(() => {
        setUser(null)
      }) 
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currerntUser => {
      setUser(currerntUser);
      setLoading(false);
        console.log(currerntUser, 'from context');
    })
    return () =>{
      unsubscribe();
    }
  },[])

  const value = {
    setUser,
    logOutUser,
    logInUser,
    registerUser,
    profileUpdate,
    signInWithGoogle,
    setLoad,
    setLoading,
    myData,
    loading,
    user
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
