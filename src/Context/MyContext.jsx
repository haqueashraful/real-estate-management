import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../FireBase/Firebase.config";
import PropTypes from "prop-types";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [myData, setMyData] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setMyData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const profileUpdate = (name, photo_url) => {
    setLoad(true);
    updateProfile(auth.currentUser, {
      displayName: name || user?.displayName,
      photoURL: photo_url || user?.photoURL,
    })
      .then(() => {
        console.log("Profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating profile:", error.message);
      })
      .finally(() => {
        setLoad(false);
      });
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setLoading(false);
        return result;
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setLoading(false);
        return result;
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  };

  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider)
  }
  const signInWithTwitter = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider)
  }
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setLoader(false)
      console.log(currentUser, loading,  loader)
    });
    return () => {
      unsubscribe();
    };
  }, []); 

  const value = {
    setUser,
    logOutUser,
    logInUser,
    registerUser,
    profileUpdate,
    signInWithGoogle,
    signInWithGitHub,
    signInWithTwitter,
    setLoad,
    setLoader,
    loader,
    myData,
    user,
    load
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

MyContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export { MyContext, MyContextProvider };
