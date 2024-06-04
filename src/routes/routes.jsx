import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Books from "../pages/Books";
import BookDetails from "../components/books/BookDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import ManageAllBooks from "../components/dashboard/ManageAllBooks";
import EditBook from "../components/dashboard/EditBook";
import AddBook from "../components/dashboard/AddBook";
import CategoryBooks from "../components/categories/CategoryBooks";
import AllCategories from "../components/categories/AllCategories";
import PrivateRoute from "./PrivateRoute";
import ManageAllCategory from "../components/dashboard/ManageAllCategory";
import MyReadingList from "../pages/MyReadingList";
import EditProfile from "../components/dashboard/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/details/:id",
        element: <BookDetails />,
      },
      {
        path: "/categories",
        element: <AllCategories />,
      },
      {
        path: "/category/:id",
        element: <CategoryBooks />,
      },
      {
        path: "/my-reading-list",
        element: <MyReadingList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-all-books",
        element: (
          <PrivateRoute>
            <ManageAllBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-all-categories",
        element: (
          <PrivateRoute>
            <ManageAllCategory />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: "add-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
