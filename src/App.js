import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import User from './components/User';
import DamageGraffiti from './pages/DamageGraffiti/DamageGraffiti';
import SexOffenderForm from './pages/SexOffenderForm/SexOffenderForm';
import PoliceSignin from './pages/PoliceSignin/PoliceSignin';
import AdminSignin from './pages/AdminSignin/AdminSignin';
import PoliceDashBoard from './pages/PoliceDashBoard/PoliceDashBoard';
import PoliceFetch from './pages/PoliceFetch/PoliceFetch';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import LicenserSignin from './pages/LicenserSignin/LicenserSignin';
import LicenserDashboard from './pages/LicenserDashboard/LicenserDashboard';
import LicenserHome from './pages/LicenserHome/LicenserHome';
import ManageAdmins from './pages/ManageAdmins/ManageAdmins';
import ManageComplainers from './pages/ManageComplainers/ManageComplainers';
import ManageLIcenser from './pages/ManageLIcenser/ManageLIcenser';
import ManageOfficers from './pages/ManageOfficers/ManageOfficers';
import HandleLicense from './pages/HandleLicense/HandleLicense';
import ScanQr from './pages/ScanQR/ScanQr';
import CoplainStatus from './pages/CoplainStatus/CoplainStatus';






function App() {
  return (
    <div className="App">
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
              <Route path='/prr' element={<Setting/>}/>
              <Route path='/complaints' element={<Complaints/>}/>
              <Route path='/lostproperty' element={<LostProperty/>}/>
              <Route path='/minortrafic' element={<MinorTrafic/>}/>
              <Route path='/user' element={<User/>}/>
              <Route path='/damagegraffiti' element={<DamageGraffiti/>}/>
              <Route path='/sexoffender' element={<SexOffenderForm/>}/>
              <Route path='/policesignin' element={<PoliceSignin/>}/>
              <Route path='/adminsignin' element={<AdminSignin/>}/>
              <Route path='/policedashboard' element={<PoliceDashBoard/>}/>

              <Route path='/fetch' element={<PoliceFetch/>}/>

              <Route path='/admindashboard' element={<AdminDashboard/>}/>
              <Route path='/licensersignin' element={<LicenserSignin/>}/>
              <Route path='/licenserdashboard' element={<LicenserDashboard/>}/>
              <Route path='/licenserhome' element={<LicenserHome/>}/>

              <Route path='/manageadmins' element={<ManageAdmins/>}/>
              <Route path='/managemomplainers' element={<ManageComplainers/>}/>
              <Route path='/managelicenser' element={<ManageLIcenser/>}/>
              <Route path='/manageofficers' element={<ManageOfficers/>}/>
              <Route path='/handlelicense' element={<HandleLicense/>}/>
              <Route path='/scanqr' element={<ScanQr/>}/>
              <Route path='/complainstatus' element={<CoplainStatus/>}/>

            </Routes>
          </main>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
