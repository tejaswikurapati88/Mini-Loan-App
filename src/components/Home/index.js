import './index.css'
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Home =()=>{
    return (
        <div className='bg-home-container'>
            <div className='head top-nav'>
                <h1 className='log-head-logo logo'>Tech Loan</h1>
                <div className='sub-bar-con'>
                    <p className='pay'>Home</p>
                    <p className='pay'>Payments</p>
                    <button type='button' className='signinbtn'>Logout</button>
                </div>
            </div>
            <div className='home-cont'>
                <div className='container'>
                    <h1 className='main-heading'>India's <span className='one'>#1</span> Personal Credit
                        <br/> App</h1>
                    <p className='para-home'>Get upto <PiCurrencyInrBold className='para-home rup'/>
                        5 lakhs and pay on the week bases</p>
                    <div className='imgs-cont'>
                        <div className='cont-desc'>
                            <FaClockRotateLeft className='icons'/>
                            <p className='desc-p'>Weekly Repay</p>
                        </div>
                        <div className='cont-desc'>
                            <AiFillThunderbolt className='icons'/>
                            <p className='desc-p'>Transform to<br/> bank in<br/> seconds</p>
                        </div>
                        <div className='cont-desc'>
                            <BsCashCoin className='icons'/>
                            <p className='desc-p'>Cash with<br/> collateral</p>
                        </div>
                    </div>
                    <Link to='/payment'>
                        <button className='get-money-btn' type='button'>Get Money</button>
                    </Link>
                </div>
                <img src='https://www.moneytap.com/mt-home/images/hero-image.webp' alt='moneyimg' className='moneyimg' />
            </div>
        </div>
    )
}

export default Home