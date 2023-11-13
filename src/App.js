import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import About from './pages/About/About';
import RegisterForm from './pages/RegisterForm/RegisterForm';
import News from './pages/News/News';
import TelephoneIndex from './pages/TelephoneIndex/TelephoneIndex';
import PoliceOfficers from './pages/PoliceOfficers/PoliceOfficers';
import PoliceEmergency from './pages/PoliceEmergency/PoliceEmergency';
import PoliceStations from './pages/PoliceStations/PoliceStations';
import ProfileSettings from './pages/ProfileSettings/ProfileSettings';
import Payment from './pages/Payment/Payment';
import Message from './pages/Message/Message';
import Setting from './pages/Setting/Setting';
import Complaints from './pages/Complaints/Complaints';
import LostProperty from './pages/LostProperty/LostProperty';
import MinorTrafic from './pages/MinorTrafic/MinorTrafic';
import Landing from './pages/Landing/Landing';
import { AuthProvider } from './components/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
          <main>
            <Routes>
              <Route path='/' element={<Landing/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contactus' element={<ContactUs/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/registerform' element={<RegisterForm/>}/>
            
              <Route path='/teleindex' element={<TelephoneIndex/>}/>
              <Route path='/policeofficers' element={<PoliceOfficers/>}/>
              <Route path='/emergency' element={<PoliceEmergency/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/policestations' element={<PoliceStations/>}/>

              <Route path='/profilesettings' element={<ProfileSettings/>}/>
              <Route path='/payment' element={<Payment/>}/>
              <Route path='/message' element={<Message/>}/>
              <Route path='/setting' element={<Setting/>}/>
              <Route path='/complaints' element={<Complaints/>}/>
              <Route path='/lostproperty' element={<LostProperty/>}/>
              <Route path='/minortrafic' element={<MinorTrafic/>}/>
            </Routes>
          </main>
          <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
