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
import NavAdmin from "./components/NavbarAdmin/NavAdmin";
import AdminMusicScreen from "./pages/AdminMusicScreen";
import AddMusicForm from "./components/AddUpdateMusicForm/AddMusicForm";
import UpdateMusicForm from "./components/AddUpdateMusicForm/UpdateMusicForm";


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
        element: <NavAdmin />,
        children: [
          {
            path: '/admin',
            element: <AdminScreen />
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
  {
    path: '/admin-music',
    element: <AdminMusicScreen />
  },
  {
    path: '/add-music',
    element: <AddMusicForm />
  },
  {
    path: '/update-music/:id',
    element: <UpdateMusicForm />
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
