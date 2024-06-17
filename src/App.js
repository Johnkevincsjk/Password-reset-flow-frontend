import './App.css';
import Login from './components/Login/Login';
import { Route, Routes } from "react-router-dom"
import Signin from './components/Signin/Signin';
import Reset from './components/Passwordreset/Reset';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Npassword from './components/New_password/Npassword';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className='main_div'>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/Signin' Component={Signin} />
        <Route path='/Resetpassword' Component={Reset} />
        <Route path="/NewPassword/:ramdamstring" element={<Npassword />} />
        <Route path='/LandingPage' Component={LandingPage} />


      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
