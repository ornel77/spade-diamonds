import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.scss'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import MusicScreen from "./pages/MusicScreen";
import VideoScreen from "./pages/VideoScreen";
import AdminScreen from "./pages/AdminScreen";
import AdminShowList from "./components/AdminShowList/AdminShowList";
import AddShowForm from "./components/AddUpdateShowForm/AddShowForm";
import UpdateShowForm from "./components/AddUpdateShowForm/UpdateShowForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/musics',
        element: <MusicScreen />
      }, 
      {
        path: '/videos',
        element: <VideoScreen />
      },
      {
        path: '/admin',
        element: <AdminScreen />,
        children: [
          {
            path: '/admin-show',
            element: <AdminShowList />
          },
        ]
      }
    ]
  },
  {
    path: '/add-show',
    element: <AddShowForm />
  },
  {
    path: '/update-show/:id',
    element: <UpdateShowForm />
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
