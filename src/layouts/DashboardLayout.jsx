import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { logOut } = useAuth();
  const handleLogout = async () => {
    await logOut();
  };
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
            {/* Sidebar content here */}
            <div>
              <li>
                <Link to="manage-all-books">Manage All Books</Link>
              </li>
              <li>
                <Link to="manage-all-categories">Manage All Categories</Link>
              </li>
              <li>
                <Link to="add-book">Add Books</Link>
              </li>
            </div>
            <div className="flex justify-evenly gap-4">
              <Link to="/" className="btn bg-secondary text-white">
                Home
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-error text-white"
              >
                Log Out
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
