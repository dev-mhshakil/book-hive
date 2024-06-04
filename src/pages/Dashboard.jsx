import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://book-hive-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold pb-4">Profile Information</h1>
      </div>
      <div>
        <div className="p-6 rounded-md  hover:cursor-pointer">
          <img
            src={userInfo?.photoURL || "/placeholder.jpg"}
            alt=""
            className=" rounded-full h-40"
          />
          <div className="mt-6">
            <span className="block text-xs font-medium tracking-widest uppercase">
              Profile
            </span>
            <h2 className="font-semibold tracking-wide mt-4">
              Name: {userInfo?.name}
            </h2>
          </div>
          <p className="font-semibold">Email: {userInfo?.email}</p>
          {/* <p className="">Mobile: {userInfo?.mobile}</p> */}
          {/* <p className="">Age: {userInfo?.age}</p> */}
          <div className="mt-4">
            <Link
              to={`profile/edit/${userInfo?.email}`}
              className="btn bg-primary"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
