import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      if (result?.user?.email) {
        const userInfo = {
          email: result?.user?.email,
          name: result?.user?.displayName,
        };
        axios
          .post("http://localhost:5000/user", userInfo)
          .then(function (response) {
            if (response === 400) {
              toast.error("Email already registered.");
            } else if (response === 201) {
              toast.success("Registration Complete.");
            }
          });
      }
    });
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="btn hover:btn-primary hover:text-white bg-white w-full"
    >
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
