import { BsGithub } from "react-icons/bs";

const GithubLogin = () => {
  return (
    <div>
      <button
        //   onClick={handleGithubLogin}
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
