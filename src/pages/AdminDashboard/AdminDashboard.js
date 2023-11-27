import { faBars, faDashboard, faGear, faHeadSideVirus, faHeart, faMessage, faPeopleRoof, faSearch, faWallet, } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import {supabase} from '../../Config/SupaBaseClient';
import AdminNavabar from '../../components/AdminNavabar/AdminNavabar';

const AdminDashboard=()=>{
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [licenserData, setLicenserData] = useState([]);

  useEffect(() => {
    const fetchLicenserData = async () => {
      try {
        // Fetch data from the "licenser" table
        const { data, error } = await supabase
        .from('admin')
        .select();

        if (error) {
          console.error('Error fetching licenser data:', error.message);
        } else {
          setLicenserData(data || []);
        }
      } catch (error) {
        console.error('Error fetching licenser data:', error.message);
      }
    };

    fetchLicenserData();
  }, []); 

    return(
    <div>
      <AdminNavabar/>
    <div className="Dashboard"> 
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
      <div class="logo-details">
        <i class="bx bxl-c-plus-plus"></i>
        <span class="logo_name">Admin</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/admindashboard" class="active">
            <i class="bx bx-grid-alt"><FontAwesomeIcon icon={faDashboard}/></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="/managelicenser">
            <i class="bx bx-user"><FontAwesomeIcon icon={faPeopleRoof}/></i>
            <span class="links_name">Manage Licensers</span>
          </a>
        </li>

        <li>
          <a href="/handlelicense" >
            <i class="bx bx-user"><FontAwesomeIcon icon={faWallet}/></i>
            <span class="links_name">Handle License</span>
          </a>
        </li>

        <li>
          <a href="/manageofficers">
          <i class="bx bx-user"><FontAwesomeIcon icon={faPeopleRoof}/></i>
            <span class="links_name">Manage Officers</span>
          </a>
        </li>

        <li>
          <a href="/managemomplainers">
          <i class="bx bx-user"><FontAwesomeIcon icon={faPeopleRoof}/></i>
            <span class="links_name">Manage Complainers</span>
          </a>
        </li>

        <li>
          <a href="/manageadmins">
          <i class="bx bx-user"><FontAwesomeIcon icon={faPeopleRoof}/></i>
            <span class="links_name">Manage Admins</span>
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
              <div class="box-topic">Manage</div>
              <div class="number">Licensers</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <a href='/managelicenser'><span class="text">Click To Visit</span></a>
              </div>
            </div>
            <i class="bx bx-cart-alt cart"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Manage</div>
              <div class="number">Officers</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <a href='/manageofficers'><span class="text">Click To Visit</span></a>
              </div>
            </div>
            <i class="bx bxs-cart-add cart two"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Manage</div>
              <div class="number">Complainers</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <a href='/managemomplainers'><span class="text">Click To Visit</span></a>
              </div>
            </div>
            <i class="bx bx-cart cart three"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Manage</div>
              <div class="number">Admins</div>
              <div class="indicator">
                <i class="bx bx-down-arrow-alt down"></i>
                <a href='/manageadmins'><span class="text">Click To Visit</span></a>
              </div>
            </div>
            <i class="bx bxs-cart-download cart four"></i>
          </div>
        </div>


        <div>
        {licenserData.map((admin) => (
        <div class="sales-boxes">
          <div class="recent-sales box">
          <div class="profheader">
            <h2 className='profah31'><p>Profile</p></h2>
            <div >
            <img class="profheader1" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png"/>
            <h3 className='profh3'>{admin.username}</h3>
            </div>
            </div>
           
            <div className='profadata'>
             <div><p className='profap1'><strong>Full Name:</strong></p><p className='profap'>{admin.name}</p></div>
             <div><p className='profap1'><strong>Email:</strong></p><p className='profap'>{admin.email}</p></div>
             <div><p className='profap1'><strong>Contact No:</strong></p><p className='profap'>{admin.contact_no}</p></div>
             <div><p className='profap1'><strong>Address:</strong></p><p className='profap'>{admin.address}</p></div>
             
            </div>
          </div>
          <div class="top-sales box">


            </div>
        </div>

))}
        </div>


      </div>
    </section>
    
        </div>
        
        </div>
    )
}
export default AdminDashboard;