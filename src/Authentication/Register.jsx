import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
       <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Create your account
        </h2>
        <form noValidate="" action="" className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
              Your Name
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Jhon doe"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="photo_url" className="block text-sm">
               Photo URL
              </label>
              <input
                type="text"
                name="photo_url"
                placeholder="Photo_url"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
          >
            Sign Up
          </button>
        </form>
      
        <p className="text-sm text-center text-gray-600">
          Have an account?
          <Link
          to='/login'
            href="#"
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            Sign Up here
          </Link>
        </p>
        {/* <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-600" />
          <p className="px-3 text-gray-600">OR</p>
          <hr className="w-full text-gray-600" />
        </div> */}
      </div>
    </>
  );
};

export default Register;
