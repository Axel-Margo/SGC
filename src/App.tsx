import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundImage from './ui/BackgroundImage'
import HeroText from './components/HeroText';

const router = createBrowserRouter( 
    [
        {
            path: '/',
          element:
          <>
            <BackgroundImage />
            <Navbar  />
            <HeroText/>
          </>
}])

export default function App() {
 
  return (
    <RouterProvider router={router} />
  )
}


