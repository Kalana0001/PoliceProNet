import { faBars, faDashboard, faGear, faHeadSideVirus, faHeart, faMessage, faSearch, faWallet, } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../../components/NavBar/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import {supabase} from '../../Config/SupaBaseClient';

const PoliceDashBoard=()=>{
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

  

    return(
    <div>
      <NavBar/>
    <div className="Dashboard"> 
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
      <div class="logo-details">
        <i class="bx bxl-c-plus-plus"></i>
        <span class="logo_name">Police Officer</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/policedashboard" class="active">
            <i class="bx bx-grid-alt"><FontAwesomeIcon icon={faDashboard}/></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="/scanqr" >
            <i class="bx bx-user"><FontAwesomeIcon icon={faWallet}/></i>
            <span class="links_name">Scan QR</span>
          </a>
        </li>

        <li>
          <a href="/managecomplains1">
            <i class="bx bx-message"><FontAwesomeIcon icon={faMessage}/></i>
            <span class="links_name">Manage Complains 1</span>
          </a>
        </li>

        <li>
          <a href="/managecomplains2">
            <i class="bx bx-heart"><FontAwesomeIcon icon={faHeadSideVirus}/></i>
            <span class="links_name">Manage Complains 2</span>
          </a>
        </li>

        <li>
          <a href="/setting">
            <i class="bx bx-cog"><FontAwesomeIcon icon={faGear}/></i>
            <span class="links_name">Setting</span>
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
          
          <i class="bx bx-chevron-down"></i>
        </div>
      </nav>

      <div class="home-content">
        <div class="overview-boxes">
          <div class="box">
            <div class="right-side">
              <div class="box-topic"></div>
              <div class="number">Scan QR</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <a href='/scanqr'><span class="text">Click To Visit</span></a>
              </div>
            </div>
            <i class="bx bx-cart-alt cart"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic"></div>
              <div class="number">Payment</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <a><span class="text">Click To Visit</span></a>
              </div>
            </div>
            <i class="bx bxs-cart-add cart two"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Total Profit</div>
              <div class="number">$12,876</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <a><span class="text">Click To Visit</span></a>
              </div>
            </div>
            <i class="bx bx-cart cart three"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Total Return</div>
              <div class="number">11,086</div>
              <div class="indicator">
                <i class="bx bx-down-arrow-alt down"></i>
                <a><span class="text">Click To Visit</span></a>
              </div>
            </div>
            <i class="bx bxs-cart-download cart four"></i>
          </div>
        </div>


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
            <div><p className='profap1'><strong>Email:</strong></p><p className='profap'>{user?.email}</p></div>
             <div><p className='profap1'><strong>Full Name:</strong></p><p className='profap'>{user?.name}</p></div>
             <div><p className='profap1'><strong>Designation:</strong></p><p className='profap'>{user?.designation}</p></div>
             <div><p className='profap1'><strong>Batch No:</strong></p><p className='profap'>{user?.batch_no}</p></div>
             <div><p className='profap1'><strong>Department:</strong></p><p className='profap'>{user?.department}</p></div>
             <div><p className='profap1'><strong>Age:</strong></p><p className='profap'>{user?.age}</p></div>
             <div><p className='profap1'><strong>Contact No:</strong></p><p className='profap'>{user?.contact_no}</p></div>
             <div><p className='profap1'><strong>Address:</strong></p><p className='profap'>{user?.address}</p></div>
             <div><p className='profap1'><strong>Station:</strong></p><p className='profap'>{user?.station}</p></div>


            </div>
          </div>
          <div class="top-sales box">


            </div>
        </div>


        </div>


      </div>
    </section>
    
        </div>
        
        </div>
    )
}
export default PoliceDashBoard;




