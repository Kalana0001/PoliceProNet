import './Home.css';
import badge1 from '../../Images/badge1.jpg';

const Home=()=>{

    return(
        
<div class="main">
        <div class="header1">
            <a href="#" class="logo"><h2><i>PoliceProNet</i></h2></a>
        </div>
        <div class="top-container">
            <div class="info-box">
                <p class="header">
                    Discover, collect, and charity in extraordinary NFT marketplace
                </p>
                <p class="info-text">
                    Explore the best collections from hand-picked digital artists out there and find your gem here in
                    AsmrProg
                </p>
                <div class="info-buttons">
                    <button class="info-btn selected">Explore</button>
                    <button class="info-btn nav-btn">Create</button>
                </div>
            </div>
            <div class="nft-box">
                <img src={badge1} class="nft-pic"/>
                <div class="nft-content">
                    <div class="info">
                        <img src="logo.png" class="info-img"/>
                        <div>
                            <p>
                                Reza
                            </p>
                            <p>
                                0.27 Eth
                            </p>
                        </div>
                    </div>
                    <div class="likes">
                        <div class="icon-box">
                            <i class='bx bx-heart'></i>
                            258
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="get-started">
            <p class="header">Getting Started</p>
            <p class="info-text">Buy and Sell NFTs from the world's top artists</p>
            <div class="items-box">
                <div class="item-container">
                    <div class="item">
                        <i class='bx bx-check-shield'></i>
                    </div>
                    <p>All transactions are safe</p>
                </div>
                <div class="item-container">
                    <div class="item">
                        <i class='bx bx-wallet-alt'></i>
                    </div>
                    <p>Connect your wallet</p>
                </div>
                <div class="item-container">
                    <div class="item">
                        <i class='bx bx-money'></i>
                    </div>
                    <p>Always free of any charges</p>
                </div>
                <div class="item-container">
                        <div class="item">
                            <i class='bx bx-rocket'></i>
                       </div>
                        <p>Very fast transactions</p>
                </div>
              </div>
            </div>
        </div>

    )
}
export default Home;