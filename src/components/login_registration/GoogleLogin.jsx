import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <button
      //   onClick={handleGoogleLogin}
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
