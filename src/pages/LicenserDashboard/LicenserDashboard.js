import { faBars, faDashboard, faGear, faHeadSideVirus, faHeart, faMessage, faSearch, faWallet, } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import {supabase} from '../../Config/SupaBaseClient';
import LicenserNavbar from '../../components/LicenserNavbar/LicenserNavbar';
import './LicenserDashboard.css';
import QRCode from 'qrcode.react';



const LicenserDashboard=()=>{

    const [sidebarActive, setSidebarActive] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
      fetchUsers()
    }, [])
  
        function fetchUsers(){
      // Retrieve from local storage
        const storedUser = localStorage.getItem('loggedInUser');

// If there is a stored user, parse it back to an object
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;

        console.log('Stored User:', parsedUser);
      setUser(parsedUser)
        }

    const toggleSidebar = () => {
      setSidebarActive(!sidebarActive);
    };

    const [text, setText] = useState('');

    const handleTextChange = (e) => {
      setText(e.target.value);
    };
  
    const handleDownloadClick = () => {
      // Validate input before generating QR code
      if (!user.id) {
        alert('Please enter text for the QR code.');
        return;
      }
  
      const canvas = document.getElementById('qrcode-canvas');
  
      // Trigger download directly on the canvas
      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = URL.createObjectURL(blob);
        link.click();
      });
    };


    return(
    <div>
      <LicenserNavbar/>
    <div className="Dashboard"> 
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
      <div class="logo-details">
        <i class="bx bxl-c-plus-plus"></i>
        <span class="logo_name">Licenser</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/licenserdashboard" class="active">
            <i class="bx bx-grid-alt"><FontAwesomeIcon icon={faDashboard}/></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="/payment" >
            <i class="bx bx-user"><FontAwesomeIcon icon={faWallet}/></i>
            <span class="links_name">Payments</span>
          </a>
        </li>


        <li class="log_out">
          <a href="#">
            <i class="bx bx-log-out"><FontAwesomeIcon icon={faBars}/></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
        
      </ul>
    </div>
    <section class="home-section">
      <nav>
      <div className="sidebar-button" onClick={toggleSidebar}>
      <i className={`bx ${sidebarActive ? 'bx-menu-alt-right' : 'bx-menu'} sidebarBtn`}><FontAwesomeIcon icon={faBars}/></i>
          <span class="dashboard">Dashboard</span>
        </div>
        <div class="search-box">
          <input type="text" placeholder="Search..." />
          <i class="bx bx-search"><FontAwesomeIcon icon={faSearch}/></i>
        </div>
        <div class="profile-details">
          <img src="images/profile.jpg" alt="" />
          <span class="admin_name">Prem Shahi</span>
          <i class="bx bx-chevron-down"></i>
        </div>
      </nav>

      <div class="home-content">


        <div>

        <div class="sales-boxes">
          <div class="recent-sales box">
          <div class="profheader">
            <h2 className='profah31'><p>Profile</p></h2>
            <div >
            <img class="profheader1" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png"/>
            <h3 className='profh3'>{user?.username}</h3>
            </div>
            </div>
           
            <div className='profadata'>
            <div><p className='profap1'><strong>First Name:</strong></p><p className='profap'>{user?.f_name}</p></div>
            <div><p className='profap1'><strong>Last Name:</strong></p><p className='profap'>{user?.l_name}</p></div>
             <div><p className='profap1'><strong>Full Name:</strong></p><p className='profap'>{user?.full_name}</p></div>
             <div><p className='profap1'><strong>NIC:</strong></p><p className='profap'>{user?.nic}</p></div>
             <div><p className='profap1'><strong>Address:</strong></p><p className='profap'>{user?.address}</p></div>
             <div><p className='profap1'><strong>Email:</strong></p><p className='profap'>{user?.email}</p></div>
             <div><p className='profap1'><strong>Contact No:</strong></p><p className='profap'>{user?.contact_no}</p></div>
             
            </div>
          </div>

          <div class="top-sales box">
          <div class="recent-sales box">
          <div class="profheader">
            <h2 className='profah31'><p>License Data</p></h2>
            <div >
            <img class="profheader1" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png"/>
            <h3 className='profh3'></h3>
            </div>
            </div>
           
            <div className='profadata'>
            <div><p className='profap1'><strong>License No:</strong></p><p className='profap'>{user?.l_no}</p></div>
            <div><p className='profap1'><strong>Date Of Issue:</strong></p><p className='profap'>{user?.date_of_issue}</p></div>
             <div><p className='profap1'><strong>Date Of Expire:</strong></p><p className='profap'>{user?.date_of_expire}</p></div>
             <div><p className='profap1'><strong>DOB:</strong></p><p className='profap'>{user?.dob}</p></div>
             <div><p className='profap1'><strong>Blood Group:</strong></p><p className='profap'>{user?.blood_groop}</p></div>
            </div>
          </div>

          <div class="licenseholdstatus">

          <div className='profadata'>
            <div><p className='profap1'><strong>Status:</strong></p><p className='profap'><strong>{user?.l_status}</strong></p></div>
            </div>
          </div>

          <div class="">

        <div className='profadata'>
        <div className='qrgen'>
      <label className='qrlbl' htmlFor="text">Enter text for the QR code:</label>
      <input className='qrinput'
        type="text"
        id="text"
        value={user.id}
        onChange={handleTextChange}
      
      />

      <button className='qrbtn' onClick={handleDownloadClick}>Download QR Code</button>

      {text && (
        <QRCode
          id="qrcode-canvas"
          value={user.id}
        />
      )}
    </div>
        </div>
        </div>

          </div>

        </div>



        </div>


      </div>
    </section>
    
        </div>
        
        </div>
    )
}
export default LicenserDashboard;