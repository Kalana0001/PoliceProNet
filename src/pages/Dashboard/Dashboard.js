import { faBars, faDashboard, faGear, faHeadSideVirus, faHeart, faMessage, faSearch, faWallet, } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../../components/NavBar/NavBar';
import {supabase} from '../../Config/SupaBaseClient';

const Dashboard=()=>{
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [userData, setUserData] = useState(null);
  const [userProfile, setUserProfile] = useState(null);


  useEffect(() => {
    async function getUserData() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUserData(user);

        console.log(user)
        let { data: profiles, error } = await supabase
  .from('profiles')
  .select("*")
  .eq('id', user.id)

  console.log(profiles)
  setUserProfile(...profiles)
  console.log(userProfile)

      
      } catch (error) {
        console.error('Error getting user data:', error);
      }
    }

    getUserData();
  }, []);

    return(
    <div>
      <NavBar/>
    <div className="Dashboard"> 
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
      <div class="logo-details">
        <i class="bx bxl-c-plus-plus"></i>
        <span class="logo_name">PoliceProNet</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/dashboard" class="active">
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

        <li>
          <a href="/message">
            <i class="bx bx-message"><FontAwesomeIcon icon={faMessage}/></i>
            <span class="links_name">Messages</span>
          </a>
        </li>

        <li>
          <a href="/profilesettings">
            <i class="bx bx-heart"><FontAwesomeIcon icon={faHeadSideVirus}/></i>
            <span class="links_name">Profile Settings</span>
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
          <span class="admin_name">Prem Shahi</span>
          <i class="bx bx-chevron-down"></i>
        </div>
      </nav>

      <div class="home-content">
        <div class="overview-boxes">
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Total Order</div>
              <div class="number">40,876</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <span class="text">Up from yesterday</span>
              </div>
            </div>
            <i class="bx bx-cart-alt cart"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Total Sales</div>
              <div class="number">38,876</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <span class="text">Up from yesterday</span>
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
                <span class="text">Up from yesterday</span>
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
                <span class="text">Down From Today</span>
              </div>
            </div>
            <i class="bx bxs-cart-download cart four"></i>
          </div>
        </div>


        <div>
        {userData ? (
        <div class="sales-boxes">
          <div class="recent-sales box">
          <div class="profheader">
            <h2 className='profah31'><p>Profile</p></h2>
            <div >
            <img class="profheader1" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png"/>
            <h3 className='profh3'>{userProfile?.full_name}</h3>
            </div>
            </div>
           
            <div className='profadata'>
             <div><p className='profap1'><strong>Full Name:</strong></p><p className='profap'>{userProfile?.full_name}</p></div>
             <div><p className='profap1'><strong>Email:</strong></p><p className='profap'>{userData.email}</p></div>
             <div><p className='profap1'><strong>Gender:</strong></p><p className='profap'>Kalana</p></div>
             <div><p className='profap1'><strong>Age:</strong></p><p className='profap'>Kalana</p></div>
             <div><p className='profap1'><strong>DOB:</strong></p><p className='profap'>Kalana</p></div>
             <div><p className='profap1'><strong>NIC No:</strong></p><p className='profap'>Kalana</p></div>
             <div><p className='profap1'><strong>Phone No:</strong></p><p className='profap'>Kalana</p></div>
             <div><p className='profap1'><strong>Address:</strong></p><p className='profap'>Kalana</p></div>
             <div><p className='profap1'><strong>Province:</strong></p><p className='profap'>Kalana</p></div>
             <div><p className='profap1'><strong>Statae:</strong></p><p className='profap'>Kalana</p></div>

            </div>
          </div>
          <div class="top-sales box">


            </div>
        </div>
                ) : (
                    <div className="spinner ">
                    <span>Loading...</span>
                    <div className="half-spinner"></div>
                    </div>
                      )}

        </div>


      </div>
    </section>
    
        </div>
        
        </div>
    )
}
export default Dashboard;