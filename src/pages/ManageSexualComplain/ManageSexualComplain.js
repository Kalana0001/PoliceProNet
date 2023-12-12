import { faBars, faDashboard, faGear, faHeadSideVirus, faHeart, faMessage, faPeopleRoof, faSearch, faWallet, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminNavabar from '../../components/AdminNavabar/AdminNavabar';
import { supabase } from '../../Config/SupaBaseClient';
import React, { useEffect, useState } from 'react';

const ManageSexualComplain=()=>{
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [users,setUsers]=useState([])

  const [user, setUser]=useState({
    username:'',name:''
  })

  const [user2, setUser2]=useState({
    id:'' ,status:''
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
    .insert({username: user.username, name: user.name})
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
        setUser2({id:user.id,status:user.status})
      }
    })

  }

 async function updateLicenser(userId){
    const {data,error} = await supabase
    .from('AdultSexual')
    .update({id:user2.id,status:user2.status})
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
    <AdminNavabar/>
    <div className="Dashboard"> 
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
      <div class="logo-details">
        <i class="bx bxl-c-plus-plus"></i>
        <span class="logo_name">Police Officer</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/policedashboard" >
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
          <a href="/managedamage">
            <i class="bx bx-message"><FontAwesomeIcon icon={faMessage}/></i>
            <span class="links_name">Damage Complains</span>
          </a>
        </li>

        <li>
          <a href="/manageSexualcomplain" class="active">
            <i class="bx bx-heart"><FontAwesomeIcon icon={faHeadSideVirus}/></i>
            <span class="links_name">Sexual Complains</span>
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
          <span class="dashboard">Manage Complains</span>
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
                  name='status'
                  onChange={handleChange2}
                  defaultValue={user2.status}
                />
                <button type='submit'>Save Changes</button>
              </form>


            <div>
            
            <div class="sales-details">


              <table className='licentable'>
                <thead>
                  <tr>
                    <th className='licenpoth'>ID</th>
                    <th className='licenpoth'>Full Name</th>
                    <th className='licenpoth'>Type</th>
                    <th className='licenpoth'>Gender</th>
                    <th className='licenpoth'>Age</th>
                    <th className='licenpoth'>DOB</th>
                    <th className='licenpoth'>NIC</th>
                    <th className='licenpoth'>Contact No</th>
                    <th className='licenpoth'>Address</th>
                    <th className='licenpoth'>Additional Info</th>
                    <th className='licenpoth'>Status</th>
                    <th className='licenpoth'>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user)=>
                  
                  <tr key={user.id}>
                  <td className='licenpotd'>{user.id}</td>
                  <td className='licenpotd'>{user.full_name}</td>
                  <td className='licenpotd'>{user.type}</td>
                  <td className='licenpotd'>{user.gender}</td>
                  <td className='licenpotd'>{user.age}</td>
                  <td className='licenpotd'>{user.dob}</td>
                  <td className='licenpotd'>{user.nic}</td>
                  <td className='licenpotd'>{user.contact_no}</td>
                  <td className='licenpotd'>{user.address}</td>
                  <td className='licenpotd'>{user.aditionalinfo}</td>
                  <td className='licenpotd'>{user.status}</td>
                  <td className='licenpotd'>
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
      </div>
    </section>
        </div>
    </div>
    )
}
export default ManageSexualComplain;