import { Link, useLocation, useNavigate } from "react-router-dom";
import GithubLogin from "../components/login_registration/GithubLogin";
import GoogleLogin from "../components/login_registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";

const Register = () => {
  const { register, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password === confirmPassword) {
      await register(email, password).then((result) => {
        if (result?.user?.email) {
          const userInfo = {
            email: result?.user?.email,
            name: result?.user?.displayName,
          };
          axios
            .post("https://book-hive-server.onrender.com/user", userInfo)
            .then(function (response) {
              if (response === 400) {
                toast.error("Email already registered.");
              } else if (response === 201) {
                toast.success("Registration Complete.");
              }
            });
        }
      });
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
    <div className="min-h-screen">
      <h1 className="text-2xl md:text-4xl lg:text-4xl text-center uppercase text-semibold mt-8">
        Register
      </h1>
      <form
        onSubmit={handleRegister}
        className="w-full md:max-w-sm lg:max-w-sm p-4 mx-auto mt-8"
      >
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
        <div className="grid grid-cols-2 gap-3 mb-4 p-4">
          <GoogleLogin />
          <GithubLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
