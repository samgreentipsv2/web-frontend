import React from 'react'
import { AuthProvider, RequireAuth } from 'react-auth-kit';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import WhyTrustUs from './pages/WhyTrustUs';
import admin from './pages/Admin';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import FreePredictions from './pages/FreePredictions';
import VIP from './pages/VIP';
import scrollToTop from './components/scrollToTop';
import {Pricing, planLoader} from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Register from './pages/Register';
import Login from './pages/Login';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Navbar from './components/Navbar';
import Unauthorized from './pages/Unauthorized';
// import Home from './pages/Home';
const LazyHome = React.lazy(() => import('./pages/Home'));
import FAQs from './pages/FAQs';
// import FootballNews from './components/FootballNews';
const LazyFoot = React.lazy(() => import('./components/FootballNews'));
import Admin from './pages/Admin';
import AdminNavbar from './components/AdminNavbar';
import AdminLogin from './components/AdminLogin';
import { freeloader } from './pages/FreeInplay';
import About from './pages/About';
import Checkout from './pages/Checkout';
import GamesByCat from './pages/GamesByCat';
import Lottie from 'lottie-react';
import spinner from './assets/spinner.json'
import AdminUser from './pages/AdminUser';
import AdminGames from './pages/AdminGames';
import TermsOfUse from './pages/TermsOfUse';

const Router = createBrowserRouter(
  createRoutesFromElements(
    
    
    <Route errorElement={<ErrorPage/>} >

     <Route path='/' element={<Navbar/>} errorElement={<ErrorPage/>}>

       <Route index element={<React.Suspense fallback= {<Lottie  animationData={spinner}/>}><LazyHome/> </React.Suspense>} loader={freeloader}/>
       <Route path='whytrustus' element={<WhyTrustUs/>}/>
       <Route path='termsofuse' element={<TermsOfUse/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='games' element={<GamesByCat/>}/>
       <Route path='free-predictions' element={<FreePredictions/>}/>
       <Route path='pricing' element={<Pricing />} loader={planLoader}/>
       <Route path='vip' element={<RequireAuth loginPath={'/login'}><VIP/></RequireAuth>}/>
       <Route path='privacy' element={<PrivacyPolicy/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='checkout' element={<RequireAuth loginPath={'/login'}><Checkout/></RequireAuth>}/>
       <Route path='football-news' element={<React.Suspense fallback= {<Lottie  animationData={spinner}/>}><LazyFoot/> </React.Suspense>}/>
       <Route path='FAQs' element={<FAQs/>}/>
     </Route>
     <Route>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="sg-admin/login" element={<AdminLogin/>}/>
        <Route path="reset-password" element={<ResetPassword/>}/>
        <Route  path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />

     </Route>
     <Route path='sg-admin/admin' element={<AdminNavbar/>}>
       <Route path="sg-admin/admin" element={<Admin/>}/> 
       <Route path="sg-admin/games" element={<AdminGames/>}/> 
       <Route path="sg-admin/userstats" element={<AdminUser/>}/> 
     </Route>
     </Route>
))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <AuthProvider authType = {'localstorage'}
                  authName={'_auth'}
                  // cookieDomain={window.location.hostname}
                  // cookieSecure={true}
                  >
       <RouterProvider router={Router} />
     

       </AuthProvider>
  </React.StrictMode>,
)
