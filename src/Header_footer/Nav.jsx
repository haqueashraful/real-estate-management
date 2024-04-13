import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import Loading from "../Component/Loading";

const Nav = () => {
  const { user, logOutUser, loading } = useContext(MyContext);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">Home</NavLink>
            {user && (
              <NavLink to="/profile" className="btn">
                Update Profile
              </NavLink>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">R-Estate</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/" className="btn">
            Home
          </NavLink>
          {user && (
            <NavLink to="/profile" className="btn">
              Update Profile
            </NavLink>
          )}
        </ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img className="w-10 h-10" src={user.photoURL} />
                  </div>
                </div>
                <h1>{user.displayName}</h1>
                <button onClick={logOutUser} className="btn">
                  SignOut
                </button>
              </>
            )}
          </>
        ) : (
          <NavLink to="/login" className="btn">
            Login
          </NavLink>
        )}{" "}
      </div>
    </div>
  );
};

export default Nav;
