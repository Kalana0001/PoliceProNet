
import badge1 from '../../Images/badge1.jpg';
import logo1 from '../../Images/logo11.png';
import Slider from '../../components/atoms/Slider/Slider';
import Card1 from '../../components/atoms/Card1/Card1';
import Card2 from '../../components/atoms/Card2/Card2';
import packimg1 from '../../Images/packimg1.png';
import packimg2 from '../../Images/packimg2.png';
import packimg3 from '../../Images/packimg3.png';
import NavBar2 from '../../components/NavBar2/NavBar2';

const Landing=()=>{

    return(
<span>
    <NavBar2/> 
<div class="main">
        <div class="header1">
            <a href="/" class="logo"><h2><i>PoliceProNet</i></h2></a>
        </div>
        <div  class="top-container">
            <div class="info-box" >
                <p class="header"   >
                Empowering Communities Through Policing Excellence: <span className='homeheadhead'><i>'Welcome to PoliceProNet."</i></span>
                </p>
                <p class="info-text">
                Law enforcement's primary goal is to protect and serve our community through transparent communication. 
                Our website offers vital resources and information on policing and public safety for the public.
                </p>
                <div class="info-buttons">
                    <a href='/register'><button class="info-btn selected" data-aos="fade-left">Explore</button></a>
                    <a href='/register'><button class="info-btn nav-btn" data-aos="fade-right">Create</button></a>
                </div>
            </div>
            <div class="nft-box" >
                <img src={badge1} class="nft-pic"/>
                <div class="nft-content">
                    <div class="info">
                        <img src={logo1} class="info-img"/>
                        <div>
                            <p>
                                Police
                            </p>
                            <p>
                                Pro
                            </p>
                            <p>
                                Net
                            </p>
                        </div>
                    </div>
                    <div class="likes">
                        <div class="icon-box">
                            <i class='bx bx-heart'></i>
                                Welcome
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="get-started">
        <span className="boddyy">
            <div  className="circle" data-aos="fade-right"><img id="logo11" src={logo1}/></div>
        </span>
            <p class="header" data-aos="fade-left">Getting Started</p>
            <p class="info-text" data-aos="fade-right">Buy and Sell NFTs from the world's top artists</p>
            <p class="e-seeve-head">E-Services</p>
            <Card1/>
            <Card2/>
            <div class="items-box">
                <div class="item-container" >
                    <div class="item" >
                        <i class='bx bx-check-shield'><img className='packimg1' src={packimg2} /></i>
                    </div>
                    <p>All transactions are safe</p>
                </div>
                <div class="item-container">
                    <div class="item">
                        <i class='bx bx-wallet-alt'><img className='packimg1' src={packimg3} /></i>
                    </div>
                    <p>Make Your Complaints</p>
                </div>
                <div class="item-container">
                    <div class="item">
                        <i class='bx bx-money'><img className='packimg1' src={packimg1} /></i>
                    </div>
                    <p>Save Your Time</p>
                </div>
                <div class="item-container">
                        <div class="item">
                            <i class='bx bx-rocket'><img className='packimg1' src={packimg1} /></i>
                       </div>
                        <p>Very fast transactions</p>
                </div>
              </div>
 
            </div>
        </div>
        <Slider />
        </span>   
    )
}
export default Landing;