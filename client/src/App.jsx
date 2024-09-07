import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SharedLayout, Register, Dashboard } from "./pages";
import { ArtistList, CreateArtist, CreateUser, UserList } from "./components";

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
        element: <UserList />,
      },
      {
        path: "/users/create",
        element: <CreateUser />
      },
      {
        path: "/artist",
        element: <ArtistList />,
      },
      {
        path: "/artist/create",
        element: <CreateArtist />,
      },
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
