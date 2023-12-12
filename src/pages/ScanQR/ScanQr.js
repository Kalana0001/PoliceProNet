import { faBars, faDashboard, faGear, faHeadSideVirus, faHeart, faMessage, faSearch, faWallet, } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../../components/NavBar/NavBar';
import {supabase} from '../../Config/SupaBaseClient';
import {QrReader} from 'react-qr-reader';
import jsQR from 'jsqr';
import './ScanQr.css'

const ScanQr=()=>{
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [qrData, setQrData] = useState('');
  const [uploadedImageData, setUploadedImageData] = useState(null);
  const [isScannerActive, setIsScannerActive] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageData = reader.result;
        setUploadedImageData(imageData);

        // Decode QR code from the uploaded image
        const decodedData = await decodeQRCodeFromImage(imageData);
        if (decodedData) {
          setQrData(decodedData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadClick = () => {
    const imageData = qrData || uploadedImageData;

    if (imageData) {
      // Create an "a" element to simulate a download link
      const link = document.createElement('a');
      link.download = 'scanned-qrcode.png';

      // Create a canvas with the QR code data as an image
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const img = new Image();
      img.src = imageData;

      // Draw the image on the canvas
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        // Convert the canvas content to a data URL and set it as the href
        link.href = canvas.toDataURL('image/png');

        // Trigger a click event on the "a" element to start the download
        link.click();
      };
    }
  };

  const decodeQRCodeFromImage = async (imageData) => {
    const img = new Image();
    img.src = imageData;

    return new Promise((resolve) => {
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          resolve(code.data);
        } else {
          resolve(null);
        }
      };
    });
  };

  const handleScanButtonClick = () => {
    setIsScannerActive(true);
  };

  const handleStopScanClick = () => {
    setIsScannerActive(false);
  };

  const renderDataInFormat = (data) => {
    try {
      const parsedData = JSON.parse(data);
      return <pre>{JSON.stringify(parsedData, null, 2)}</pre>;
    } catch (error) {
      return <p>{data}</p>;
    }
  };

  const [users,setUsers]=useState([])

  const [user, setUser]=useState({
    username:'',f_name:'',l_name:'',full_name:'',email:'',password:'',contact_no:'',nic:'',address:'',dob:''
  })

  const [user2, setUser2]=useState({
    id:'' ,l_status:''
  })

  console.log(user2)

  useEffect(() => {
    fetchLiceners()
  }, [])

  async function fetchLiceners(){
    const {data} = await supabase
    .from('licenser')
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
    .from('licenser')
    .insert({username: user.username, f_name: user.f_name,
        l_name: user.l_name,
        full_name: user.full_name,
        email: user.email,
        password: user.password,
        contact_no: user.contact_no,
        nic: user.nic,
        address: user.address,
        dob: user.dob

    })
  }

  async function deleteLicenser(userId){

    const {data, error} = await supabase
    .from('licenser')
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
        setUser2({id:user.id,l_status:user.l_status})
      }
    })

  }

 async function updateLicenser(userId){
    const {data,error} = await supabase
    .from('licenser')
    .update({id:user2.id,l_status:user2.l_status})
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
        <span class="logo_name">PoliceProNet</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/policedashboard" >
            <i class="bx bx-grid-alt"><FontAwesomeIcon icon={faDashboard}/></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="/scanqr"  class="active">
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

        <div class="">

        <div className="qr-reader-card">
      {isScannerActive ? (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      ) : null}

      <div>
        <h3>Scanned QR Data:</h3>
        {renderDataInFormat(qrData)}
      </div>

      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {uploadedImageData && <img src={uploadedImageData} alt="Uploaded QR Code" className="uploaded-image" />}

      {qrData && (
        <>
          <button onClick={handleDownloadClick}>Download Scanned QR Code</button>
          <img src={`data:image/png;base64,${qrData}`} alt="Scanned QR Code" className="scanned-image" />
        </>
      )}

      {!isScannerActive && (
        <button onClick={handleScanButtonClick}>Start Scan</button>
      )}

      {isScannerActive && (
        <button onClick={handleStopScanClick}>Stop Scan</button>
      )}
    </div>

          <div class="top-sales box">
          <div class="recent-sales box" id='licenserboard'>

              <form onSubmit={()=>updateLicenser(user2.id)} className='liceform2'>
                <input
                  type='text'
                  name='l_status'
                  onChange={handleChange2}
                  defaultValue={user2.l_status}
                />

                <button type='submit'>Save Changes</button>
              </form>
            <div class="sales-details">


              <table className='licentable'>
                <thead>
                  <tr>
                    <th className='licenpoth'>ID</th>
                    <th className='licenpoth'>Username</th>
                    <th className='licenpoth'>First Name</th>
                    <th className='licenpoth'>Last Name</th>
                    <th className='licenpoth'>Full Name</th>
                    <th className='licenpoth'>Contact No</th>
                    <th className='licenpoth'>NIC</th>
                    <th className='licenpoth'>DOB</th>
                    <th className='licenpoth'>Address</th>
                    <th className='licenpoth'>Email</th>
                    <th className='licenpoth'>Staus</th>
                    <th className='licenpoth'>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user)=>
                  
                  <tr key={user.id}>
                  <td className='licenpotd'>{user.id}</td>
                  <td className='licenpotd'>{user.username}</td>
                  <td className='licenpotd'>{user.f_name}</td>
                  <td className='licenpotd'>{user.l_name}</td>
                  <td className='licenpotd'>{user.full_name}</td>
                  <td className='licenpotd'>{user.contact_no}</td>
                  <td className='licenpotd'>{user.nic}</td>
                  <td className='licenpotd'>{user.dob}</td>
                  <td className='licenpotd'>{user.address}</td>
                  <td className='licenpotd'>{user.email}</td>
                  <td className='licenpotd'>{user.l_status}</td>
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

        </div>


      </div>
    </section>
    
        </div>
        
        </div>
    )
}
export default ScanQr;