import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SharedLayout, Register, Dashboard } from "./pages";
import { ArtistList, CreateArtist, CreateMusic, CreateUser, MusicList, UserList } from "./components";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
      {
        path: "/music",
        element: <MusicList />,
      },
      {
        path: "/music/create",
        element: <CreateMusic />,
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
