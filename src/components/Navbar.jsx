import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="navbar bg-secondary sticky z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" className="">
                Books
              </Link>
            </li>
            <li>
              <Link to="/categories" className="">
                Categories
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                My Reading List
              </Link>
            </li>

            {!user && (
              <>
                <li>
                  <Link to="/login" className="">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="">
                    Register
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl gap-0 text-white">
          Book
          <span className="text-primary">Hive</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link exact to="/" className="visited:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="visited:text-white">
              Books
            </Link>
          </li>
          <li>
            <Link to="/categories" className="visited:text-white">
              Categories
            </Link>
          </li>
          <li>
            <Link to="#" className="visited:text-white">
              My Reading List
            </Link>
          </li>

          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link
                  to="/register"

                  //   className={({ isActive }) =>
                  //     isActive ? "bg-primary text-white" : " text-white"
                  //   }
                >
                  Register
                </Link>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="flex gap-3 navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL || "/placeholder.jpg"}
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
