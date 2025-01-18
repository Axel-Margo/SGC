import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeNavbar from './components/HomeNavbar';
import BackgroundImage from './ui/BackgroundImage'
import HeroText from './ui/HeroText';
import Navbar from './components/Navbar';
import ArticleDescription from './components/Products/ArticleDescription';
import Articles from './ui/Products/Articles';
import ProductImage from './ui/ProductImage';
import PersonalInfos from './ui/PersonalInfos';
import LoginBackgroundImage from './ui/Login/LoginBackgroundImage';
import RegisterForm from './ui/Login/RegisterForm';
import LoginForm from './ui/Login/LoginForm';


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
},{
  path: '/login',
  element:
  <div className='m-0 p-0 h-screen flex flex-col'>
    <LoginBackgroundImage />
    <Navbar  />
    <LoginForm />

  </div >
},
{
  path: '/register',
  element:
  <div className='m-0 p-0 h-screen flex flex-col'>
    <LoginBackgroundImage />
    <Navbar  />
    <RegisterForm />
  </div >
},
{
  path: '/product',
  element:
  <>
    <Navbar  />
    <ArticleDescription />
  </>
},
{
  path: '/product/personal-infos',
  element:
  <>
    <Navbar  />
    <ProductImage />
    <PersonalInfos />
    
  </>
}])

export default function App() {
 
  return (
    <RouterProvider router={router} />
  )
}


