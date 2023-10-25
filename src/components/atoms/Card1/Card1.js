import './Card1.css';
import jpg11 from "../../../Images/poliimg1.png"
import jpg12 from "../../../Images/poliimg4.png"
import jpg13 from "../../../Images/poliimg8.png"

const Card1=()=>{

    return(
    <span className='aboutall'>
    <div class="hacrd1wrapper">
        <div class="hcard1services">
            
        <a className='hcard1a' href="/teleindex">
            <span class="hcard1single-img hcard1img-one" data-aos="fade-right">
                <span class="hcard1img-text">
                    <img className='cardimgg' src={jpg12}/>
                    <h4>Telephone Index</h4>
                    <p>You can get the telephone numbers here.</p>
                    <a href='/teleindex'> <button>Go</button> </a>
                </span>
            </span>
        </a>
        <a className='hcard1a' href="/policeofficers">
            <span class="hcard1single-img hcard1img-two" data-aos="fade-up">
                <span class="hcard1img-text" >
                    <img className='cardimgg' src={jpg11}/>
                    <h4>Police Officers</h4>
                    <p>You can get details about police officers here.</p>
                    <a href='/policeofficers'> <button>Go</button> </a>
                </span>
            </span>
        </a>
        <a className='hcard1a' href="/emergency">
            <span class="hcard1single-img hcard1img-three" data-aos="fade-left">
                <span class="hcard1img-text">
                <img className='cardimgg' src={jpg13}/>
                    <h4>Police Emergency</h4>
                    <p>Call quickly for emergency situations.</p>
                    <a href='/emergency'> <button>Go</button> </a>
                </span>
            </span>
        </a>

    </div>
    </div>
</span>
    )
}
export default Card1;