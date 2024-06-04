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
        element: <Dashboard />,
      },
      {
        path: "manage-all-books",
        element: <ManageAllBooks />,
      },
      {
        path: "edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "add-book",
        element: <AddBook />,
      },
    ],
  },
]);

export default router;
