import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.scss'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import MusicScreen from "./pages/MusicScreen";
import VideoScreen from "./pages/VideoScreen";
import AdminScreen from "./pages/AdminScreen";


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
        element: <AdminScreen />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
