import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;
