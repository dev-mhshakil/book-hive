import { BsGithub } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const GithubLogin = () => {
  const { githubLogin } = useAuth();
  const handleGithubLogin = () => {
    githubLogin().then((result) => {
      if (result?.user?.email) {
        const userInfo = {
          email: result?.user?.email,
          name: result?.user?.displayName,
          photoURL: result?.user?.photoURL,
        };
        axios
          .post("https://book-hive-server.onrender.com/user", userInfo)
          .then(function (response) {
            localStorage.setItem("token", response?.data?.token);
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
    <div>
      <button
        onClick={handleGithubLogin}
        className="btn hover:btn-primary hover:text-white bg-white w-full"
      >
        <div className="flex items-center gap-2">
          <BsGithub size={24} />
          <p>Github</p>
        </div>
      </button>
    </div>
  );
};

export default GithubLogin;
