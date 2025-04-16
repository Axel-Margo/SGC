import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeNavbar from './components/HomeNavbar';
import BackgroundImage from './ui/Backgrounds/BackgroundImage'
import HeroText from './ui/HeroText';
import Navbar from './components/Navbar';
import Articles from './ui/Products/Articles';
import PersonalInfos from './ui/Products/PersonalInfos';
import LoginBackgroundImage from './ui/Login/LoginBackgroundImage';
import RegisterForm from './ui/Login/RegisterForm';
import LoginForm from './ui/Login/LoginForm';
import ArticleDescription from './components/Products/ArticleDescription';
import CartPage from './ui/CartPage';


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
      <div className='mx-40'>
      <Articles />
      </div>
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
  path: '/products/:id',
  element:
  <>
    <Navbar  />
    <ArticleDescription />
  </>
},
{
  path: '/personal-infos',
  element:
  <>
    <Navbar  />
    <PersonalInfos />
    
  </>
},
{path: '/cart-page',
  element:
  <>
    <CartPage />
    
  </>}])

export default function App() {
 
  return (
    <RouterProvider router={router} />
  )
}


