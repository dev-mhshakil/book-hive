import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
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
              <NavLink
                exact
                to="/"
                activeClassName="active bg-primary"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                activeClassName="active bg-primary"
                className="nav-link"
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reading-list"
                activeClassName="active bg-primary"
                className="nav-link"
              >
                My Reading List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active bg-primary"
                className="nav-link"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                activeClassName="active bg-primary"
                className="nav-link"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                activeClassName="active bg-primary"
                className="nav-link"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                activeClassName="active bg-primary"
                className="nav-link"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl gap-0 text-white">
          Book
          <span className="text-primary">Hive</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active bg-primary"
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              activeClassName="active bg-primary"
              className="nav-link"
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reading-list"
              activeClassName="active bg-primary"
              className="nav-link"
            >
              My Reading List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active bg-primary"
              className="nav-link"
            >
              About Us
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink to="/login" activeClassName="active">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  activeClassName="active "
                  //   className={({ isActive }) =>
                  //     isActive ? "bg-primary text-white" : " text-white"
                  //   }
                >
                  Register
                </NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <NavLink>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to={() => logOut()}>Logout</NavLink>
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
