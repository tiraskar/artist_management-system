import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SharedLayout, Register, Dashboard, Users } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: '/',
        element: <Dashboard />
      },
      {
        path: "/users",
        element: <Users />
      }
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
