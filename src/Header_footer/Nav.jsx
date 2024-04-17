import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import Loading from "../Component/Loading";
import './Nav.css'

const Nav = () => {
  const { user, logOutUser, loader } = useContext(MyContext);

  return (
    <div className="navbar bg-base-100 mt-5">
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
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink className='btn-rn' to="/">Home</NavLink>
            {user && (
              <NavLink to="/profile" className="btn-rn">
                Update Profile
              </NavLink>
            )}
            <NavLink to="/favourites" className="btn-rn">
              Favourites
              </NavLink>
          </ul>
        </div>
        <Link to='/' className="btn-rn text-xl">R-Estate</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">
          <NavLink to="/" className=" btn-rn">
            Home
          </NavLink>
          {user && (
            <NavLink to="/profile" className="btn-rn ">
              Update Profile
            </NavLink>
          )}
          <NavLink to="/favourites" className="btn-rn">
              Favourites
              </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-6">
        {user ? (
          <>
            {loader ? (
              <Loading />
            ) : (
              <>
                <div className="avatar md:tooltip" data-tip={user?.displayName}>
                  <div className="w-10 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                    <img className="w-10 h-10" src={user.photoURL} />
                  </div>
                </div>
                <button onClick={logOutUser} className="btn-rn">
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
