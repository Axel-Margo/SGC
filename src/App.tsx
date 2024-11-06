import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundImage from './ui/BackgroundImage'

const router = createBrowserRouter( 
    [
        {
            path: '/',
          element:
          <>
            <BackgroundImage />
            <Navbar  />
          </>
}])

export default function App() {
 
  return (
    <RouterProvider router={router} />
  )
}


