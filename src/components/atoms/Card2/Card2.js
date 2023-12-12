import './Card2.css';
import jpg14 from "../../../Images/poliimg6.png"
import jpg15 from "../../../Images/poliimg5.png"
import jpg16 from "../../../Images/poliimg7.png"


const Card2=()=>{

    return(
    <span className='aboutall'>
    <div class="hacrd1wrapper">
        <div class="hcard1services">
            
        <a className='hcard1a' href="/news">
            <span class="hcard1single-img hcard1img-one" data-aos="fade-right">
                <span class="hcard1img-text">
                    <img className='cardimgg' src={jpg14}/>
                    <h4>News</h4>
                    <p>You can find out about the news here.</p>
                    <a href='/news'> <button>Go</button> </a>
                </span>
            </span>
        </a>
        <a className='hcard1a' href="/policestations">
            <span class="hcard1single-img hcard1img-two" data-aos="fade-up">
                <span class="hcard1img-text" >
                    <img className='cardimgg' src={jpg15}/>
                    <h4>Police Stations</h4>
                    <p>You can get details about police Stations here.</p>
                    <a href='/policestations'> <button>Go</button> </a>
                </span>
            </span>
        </a>
        <a className='hcard1a' href="/complaints">
            <span class="hcard1single-img hcard1img-three" data-aos="fade-left">
                <span class="hcard1img-text">
                  <img className='cardimgg' src={jpg16}/>
                    <h4>Online Complaints</h4>
                    <p>You can submit your complaints here.</p>
                    <a href='/complaints'> <button>Go</button> </a>
                </span>
            </span>
        </a>

    </div>
    </div>
</span>
    )
}
export default Card2;