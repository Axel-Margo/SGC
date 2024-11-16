import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeNavbar from './components/HomeNavbar';
import BackgroundImage from './ui/BackgroundImage'
import HeroText from './ui/HeroText';
import Navbar from './components/Navbar';
import ArticleDescription from './components/ArticleDescription';

import Articles from './ui/Articles';


const router = createBrowserRouter( 
    [
        {
          path: '/',
          element:
          <>
          <BackgroundImage />
          <div className='lg:mx-16 xl:mx-28'>
            
            <HomeNavbar  />
            <HeroText/>
          </div>
          </>
},

  {
    path: '/shop',
    element:
    <>
      <Navbar  />
      <Articles />
    </>
},
{
  path: '/product',
  element:
  <>
    <Navbar  />
    <ArticleDescription />
  </>
},])

export default function App() {
 
  return (
    <RouterProvider router={router} />
  )
}


