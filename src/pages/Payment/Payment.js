import { faBars, faDashboard, faGear, faHeadSideVirus, faHeart, faMessage, faSearch, faWallet, } from '@fortawesome/free-solid-svg-icons';
import './Payment.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LicenserNavbar from '../../components/LicenserNavbar/LicenserNavbar';
import payway from '../../Images/pway.png'

const Payment=()=>{
  const [sidebarActive, setSidebarActive] = useState(false);
  

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
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
          <a href="/licenserdashboard" >
            <i class="bx bx-grid-alt"><FontAwesomeIcon icon={faDashboard}/></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="/payment" class="active">
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


        <div class="sales-boxes">
          <div class="recent-sales box">
            <div class="title">Recent Sales</div>

            <div class="paypay-container">

          <form action="">

        <div class="paypay-row">

            <div class="paypay-col">

                <h3 class="paypay-title">billing address</h3>

                <div class="paypay-inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="john deo"/>
                </div>
                <div class="paypay-inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="example@example.com"/>
                </div>
                <div class="paypay-inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="room - street - locality"/>
                </div>
                <div class="paypay-inputBox">
                    <span>city :</span>
                    <input type="text" placeholder="Matara"/>
                </div>

                <div class="paypay-flex">
                    <div class="paypay-inputBox">
                        <span>state :</span>
                        <input type="text" placeholder="Sri Lanka"/>
                    </div>
                    <div class="paypay-inputBox">
                        <span>zip code :</span>
                        <input type="text" placeholder="123 456"/>
                    </div>
                </div>

            </div>

            <div class="paypay-col">

                <h3 class="paypay-title">payment</h3>

                <div class="paypay-inputBox">
                    <span>cards accepted :</span>
                    <img src={payway} alt=""/>
                </div>
                <div class="paypay-inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john deo"/>
                </div>
                <div class="paypay-inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div class="paypay-inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div class="paypay-flex">
                    <div class="paypay-inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                    <div class="paypay-inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>

        </div>

        <button   class="paypay-submit-btn">Pay</button>

          </form>
</div>
        


          </div>

        </div>
      </div>
    </section>
        </div>
        </div>
    )
}
export default Payment;