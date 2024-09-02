import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SharedLayout, Register } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      // Routes 
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },

  // Other routes
  {
    path: "*",
    element: <div>Page Not Found</div>,
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
