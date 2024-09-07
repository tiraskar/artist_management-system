import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SharedLayout, Register, Dashboard, Users } from "./pages";
import { CreateUserForm, UserList } from "./components";

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
        element: <Users />,
        children: [
          {
            index: true,
            element: <UserList />
          },
          {
            path: "create",
            element: <CreateUserForm />
          }
        ]
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
