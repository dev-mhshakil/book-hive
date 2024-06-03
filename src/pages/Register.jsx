import { Link, useLocation, useNavigate } from "react-router-dom";
import GithubLogin from "../components/login_registration/GithubLogin";
import GoogleLogin from "../components/login_registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Register = () => {
  const { signIn, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password === confirmPassword) {
      signIn(email, password).then((result) => console.log(result));
    } else {
      return toast.error("Password didn't matched");
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  return (
    <div className="h-screen">
      <form onSubmit={handleRegister} className="max-w-sm mx-auto mt-40">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@gmail.com"
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
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Repeat password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="text-sm">
            Already have an account ?{" "}
            <Link
              to="/login"
              className="text-highlight font-bold hover:underline"
            >
              Login
            </Link>
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
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

export default Register;
