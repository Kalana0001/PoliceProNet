import { faBars, faDashboard, faGear, faHeadSideVirus, faHeart, faMessage, faPeopleRoof, faSearch, faWallet, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminNavabar from '../../components/AdminNavabar/AdminNavabar';
import { supabase } from '../../Config/SupaBaseClient';
import React, { useEffect, useState } from 'react';

const ManageOfficers=()=>{
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [users,setUsers]=useState([])

  const [user, setUser]=useState({
    username:'',name:''
  })

  const [user2, setUser2]=useState({
    id:'' ,username:'',name:''
  })

  console.log(user2)

  useEffect(() => {
    fetchLiceners()
  }, [])

  async function fetchLiceners(){
    const {data} = await supabase
    .from('policeOfficers')
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
    .from('policeOfficers')
    .insert({username: user.username, name: user.name})
  }

  async function deleteLicenser(userId){

    const {data, error} = await supabase
    .from('policeOfficers')
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
        setUser2({id:user.id,username:user.username,name:user.name})
      }
    })

  }

 async function updateLicenser(userId){
    const {data,error} = await supabase
    .from('policeOfficers')
    .update({id:user2.id,username:user2.username,name:user2.name})
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
        <span class="logo_name">Admin</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/admindashboard" >
            <i class="bx bx-grid-alt"><FontAwesomeIcon icon={faDashboard}/></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="/managelicenser" >
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
          <a href="/manageofficers" class="active">
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
          <span class="dashboard">Manage Officers</span>
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
          <form onSubmit={createLiceners} className='liceform1'>
                <input
                  type='text'
                  placeholder='Username'
                  name='username'
                  onChange={handleChange}
                />

                <input
                  type='text'
                  placeholder='First Name'
                  name='name'
                  onChange={handleChange}
                />
                
                <button type='submit'>Create</button>
              </form>


              <form onSubmit={()=>updateLicenser(user2.id)} className='liceform2'>
                <input
                  type='text'
                  name='username'
                  onChange={handleChange2}
                  defaultValue={user2.username}
                />

                <input
                  type='text'
                  name='name'
                  onChange={handleChange2}
                  defaultValue={user2.name}
                />
                <button type='submit'>Save Changes</button>
              </form>
            <div class="sales-details">


              <table className='licentable'>
                <thead>
                  <tr>
                    <th className='licenpoth'>ID</th>
                    <th className='licenpoth'>Username</th>
                    <th className='licenpoth'>Name</th>
                    <th className='licenpoth'>Designation</th>
                    <th className='licenpoth'>Batch No</th>
                    <th className='licenpoth'>Department</th>
                    <th className='licenpoth'>Address</th>
                    <th className='licenpoth'>Contact No</th>
                    <th className='licenpoth'>Station</th>
                    <th className='licenpoth'>Age</th>
                    <th className='licenpoth'>Email</th>
                    <th className='licenpoth'>Password</th>
                    <th className='licenpoth'>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user)=>
                  
                  <tr key={user.id}>
                  <td className='licenpotd'>{user.id}</td>
                  <td className='licenpotd'>{user.username}</td>
                  <td className='licenpotd'>{user.name}</td>
                  <td className='licenpotd'>{user.designation}</td>
                  <td className='licenpotd'>{user.batch_no}</td>
                  <td className='licenpotd'>{user.department}</td>
                  <td className='licenpotd'>{user.address}</td>
                  <td className='licenpotd'>{user.contact_no}</td>
                  <td className='licenpotd'>{user.station}</td>
                  <td className='licenpotd'>{user.age}</td>
                  <td className='licenpotd'>{user.email}</td>
                  <td className='licenpotd'>{user.password}</td>
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
export default ManageOfficers;