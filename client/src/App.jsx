import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SharedLayout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      // Routes 
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
