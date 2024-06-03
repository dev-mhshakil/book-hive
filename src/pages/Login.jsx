// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import GithubLogin from "../components/login_registration/GithubLogin";
import GoogleLogin from "../components/login_registration/GoogleLogin";

const Login = () => {
  return (
    <div className="h-screen">
      <form className="max-w-sm mx-auto mt-40">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@gamil.com"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="text-sm">
            Don&apos;t have an account ?{" "}
            <Link
              to="/register"
              className="text-highlight font-bold hover:underline"
            >
              Register
            </Link>
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
          >
            Login
          </button>
        </div>
      </form>
      <div className="max-w-sm mx-auto mt-5">
        <div>
          <h2 className="text-xs pb-3 font-semibold text-center">
            Login with social account
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <GoogleLogin />
          <GithubLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
