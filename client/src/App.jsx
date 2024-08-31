import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SharedLayout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      // Routes 
    ],
  },
  // Other routes
  {
    path: "/login",
    element: <Login />,
  },
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
