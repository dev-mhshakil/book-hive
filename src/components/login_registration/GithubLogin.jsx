import { BsGithub } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";

const GithubLogin = () => {
  const { githubLogin } = useAuth();
  const handleGithubLogin = () => {
    githubLogin().then((result) => console.log(result));
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
