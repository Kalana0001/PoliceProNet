import { faBars, faDashboard, faGear, faHeadSideVirus, faHeart, faMessage, faPeopleRoof, faSearch, faWallet, } from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../../Config/SupaBaseClient';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminNavabar from '../../components/AdminNavabar/AdminNavabar';
import NavBar from '../../components/NavBar/NavBar';


const ManageComplains2=()=>{
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [users,setUsers]=useState([])

  const [user, setUser]=useState({
    username:'',fname:''
  })

  const [user2, setUser2]=useState({
    id:'' ,complain_status:'',arrivedate:''
  })

  console.log(user2)

  useEffect(() => {
    fetchLiceners()
  }, [])

  async function fetchLiceners(){
    const {data} = await supabase
    .from('AdultSexual')
    .select('*')
    setUsers(data)
  }

  function handleChange(event){
      setUser(prevFormData =>{
        return{
          ...prevFormData,
          [event.target.name]:event.target.value
        }
      })
  }
  

  function handleChange2(event){
    setUser2(prevFormData =>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
}  

    
  async function createLiceners(){

    await supabase
    .from('AdultSexual')
    .insert({username: user.username, fname: user.fname})
  }

  async function deleteLicenser(userId){

    const {data, error} = await supabase
    .from('AdultSexual')
    .delete()
    .eq('id', userId)

    fetchLiceners()

    if(error){
      console.log(error)
    }
    if(data){
      console.log(data)
    }
  }

function displayLicenser(userId){
    users.map((user)=>{

      if(user.id==userId){
        setUser2({id:user.id,complain_status:user.complain_status,arrivedate:user.arrivedate})
      }
    })

  }

 async function updateLicenser(userId){
    const {data,error} = await supabase
    .from('AdultSexual')
    .update({id:user2.id,complain_status:user2.complain_status,arrivedate:user2.arrivedate})
    .eq('id', userId)

    fetchLiceners()

    if(error){
      console.log(error)
    }
    if(data){
      console.log(data)
    }
  }

    return(
    <div>
    <NavBar/>
    <div className="Dashboard"> 
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
      <div class="logo-details">
        <i class="bx bxl-c-plus-plus"></i>
        <span class="logo_name">Police Officers</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/policedashboard" >
            <i class="bx bx-grid-alt"><FontAwesomeIcon icon={faDashboard}/></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="/scanqr">
          <i class="bx bx-user"><FontAwesomeIcon icon={faPeopleRoof}/></i>
            <span class="links_name">Scan QR</span>
          </a>
        </li>

        <li>
          <a href="/managecomplains1" >
            <i class="bx bx-user"><FontAwesomeIcon icon={faWallet}/></i>
            <span class="links_name">Manage Complains 1</span>
          </a>
        </li>

        <li>
          <a href="/managecomplains2" class="active">
          <i class="bx bx-user"><FontAwesomeIcon icon={faPeopleRoof}/></i>
            <span class="links_name">Manage Complains 2</span>
          </a>
        </li>

        <li>
          <a href="/managemomplainers" >
          <i class="bx bx-user"><FontAwesomeIcon icon={faPeopleRoof}/></i>
            <span class="links_name">Manage Complainers</span>
          </a>
        </li>

        <li>
          <a href="/manageadmins" >
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
          <span class="dashboard">Manage Sexual Complains</span>
        </div>
        <div class="search-box">
          <input type="text" placeholder="Search..." />
          <i class="bx bx-search"><FontAwesomeIcon icon={faSearch}/></i>
        </div>
        <div class="profile-details">
          <img src="images/profile.jpg" alt="" />
          <span class="admin_name">Admin Shahi</span>
          <i class="bx bx-chevron-down"></i>
        </div>
      </nav>

      <div class="home-content">
        <div class="overview-boxes">

        </div>

        <div class="sales-boxes" >
          
          <div class="recent-sales box" id='licenserboard'>



              <form onSubmit={()=>updateLicenser(user2.id)} className='liceform2'>
                <input
                  type='text'
                  name='complain_status'
                  onChange={handleChange2}
                  defaultValue={user2.complain_status}
                />

                <input
                  type='date'
                  name='arrivedate'
                  onChange={handleChange2}
                  defaultValue={user2.arrivedate}
                />
                <button type='submit'>Save Changes</button>
              </form>
            <div class="sales-details">


              <table className='licentable'>
                <thead>
                  <tr>
                    <th className='licenpoth'>ID</th>
                    <th className='licenpoth'>Full Name</th>
                    <th className='licenpoth'>Gender</th>
                    <th className='licenpoth'>Age</th>
                    <th className='licenpoth'>Date Of Birth</th>
                    <th className='licenpoth'>NIC</th>
                    <th className='licenpoth'>Contact No</th>
                    <th className='licenpoth'>Address</th>
                    <th className='licenpoth'>Additional Infromations</th>
                    <th className='licenpoth'>Complain Type</th>
                    <th className='licenpoth'>Complain Status</th>
                    <th className='licenpoth'>The Date Should You Arrive</th>
                    <th className='licenpoth'>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user)=>
                  
                  <tr key={user.id}>
                  <td className='licenpotd'>{user.id}</td>
                  <td className='licenpotd'>{user.full_name}</td>
                  <td className='licenpotd'>{user.gender}</td>
                  <td className='licenpotd'>{user.age}</td>
                  <td className='licenpotd'>{user.dob}</td>
                  <td className='licenpotd'>{user.nic}</td>
                  <td className='licenpotd'>{user.contact_no}</td>
                  <td className='licenpotd'>{user.address}</td>
                  <td className='licenpotd'>{user.aditionalinfo}</td>
                  <td className='licenpotd'>{user.type}</td>
                  <td className='licenpotd'>{user.complain_status}</td>
                  <td className='licenpotd'>{user.arrivedate}</td>
                  <td className='licenpotd'>
                    <button onClick={()=>{deleteLicenser(user.id)}} className='licebtn1'>Delete</button>
                    <button onClick={()=>{displayLicenser(user.id)}} className='licebtn2'>Edit</button>
                  </td>
                  </tr>

                  )}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    </div>
    )
}
export default ManageComplains2;