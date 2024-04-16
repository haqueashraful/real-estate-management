import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
import { FaEye, FaGithub, FaGoogle, FaXTwitter } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { setUser, logInUser, signInWithGoogle, setLoading } =
    useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const googleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const onSubmit = (data) => {
    logInUser(data.email, data.password)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        toast.error(error.message);
      });
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Username
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+$/i,
              })}
              type="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="password"
              className=" text-gray-600 flex justify-between items-center"
            >
              <span>Password</span>
              <span
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FaEye></FaEye>
              </span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])/,
                  message:
                    "Password must contain at least one uppercase and one lowercase letter",
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <div className="flex justify-end text-xs text-gray-600">
              <Link to="#">Forgot Password?</Link>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={googleSignIn}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            {/* Add Google SVG Icon */}
            <FaGoogle className=" size-8" />
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            {/* Add Twitter SVG Icon */}
            <FaXTwitter className=" size-8" />
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            {/* Add GitHub SVG Icon */}
            <FaGithub className=" size-8" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="underline text-gray-800">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
