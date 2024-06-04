import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const EditProfile = () => {
  const userEmail = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/get/${userEmail?.id}`)
      .then(function (response) {
        setUser(response?.data);
      });
  }, [userEmail]);

  const handleProfile = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const mobile = form.mobileNumber.value;
    const age = form.age.value;
    const photoURL = form.photoURL.value;

    const userInfo = {
      name: name,
      photoURL: photoURL,
      mobile: mobile,
      age: age,
      email: user?.email,
    };

    axios
      .patch(`http://localhost:5000/user/${user?.email}`, userInfo)
      .then(function (response) {
        console.log(response);
        if (response?.status === 200) {
          toast.success("Profile has been updated.");
        } else {
          toast.error("Something went wrong. Try again!");
        }
      });
  };
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="text-2xl md:text-4xl lg:text-4xl text-center uppercase text-semibold mt-8">
          Edit Profile
        </h1>
        <form
          onSubmit={handleProfile}
          className="w-full md:max-w-sm lg:max-w-sm mx-auto mt-4 p-4"
        >
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              defaultValue={user?.email}
              disabled
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg disabled:bg-slate-200 w-full p-2.5"
              placeholder="name@gamil.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <input
              defaultValue={user?.name}
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Profile PhotoURL
            </label>
            <input
              defaultValue={user?.photoURL}
              type="text"
              id="photoURL"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mobile Number
            </label>
            <input
              defaultValue={user?.mobile}
              type="number"
              id="mobileNumber"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Age
            </label>
            <input
              defaultValue={user?.age}
              type="number"
              id="age"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
            >
              Update Profile
            </button>
          </div>
        </form>
        <div className="max-w-sm mx-auto mt-5"></div>
      </div>
    </div>
  );
};

export default EditProfile;
