import './index.css'
import {useState} from 'react'

const Login=()=>{
    const [isUser, setUser]= useState(true)

    const onUser=()=>{
        setUser(true)
    }
    const onAdmin=()=>{
        setUser(false)
    }
    return (
        <div className='login-bg-container'>
            <div className='head'>
                <h1 className='log-head-logo'>Tech Loan</h1>
                <button type='button' className='signinbtn'>Signin</button>
            </div>
            <div className='cont-lo'>
                <p className='log-para'>Select who you are*</p>
                <div className='login-op-cont'>
                    <button type='button' onClick={onUser} className='logi-btn'>User Login</button>
                    <button type='button' onClick={onAdmin} className='logi-btn'>Admin Login</button>
                </div>
                {isUser=== true ? 
                    <form className='login-form'>
                        <h1 className='login-heading'>User</h1>
                        <div className='username-cont'>
                            <label className='label' htmlFor='usernameinp'>Username</label>
                            <input type='text' id='usernameinp' className='log-inp' placeholder='Enter username'></input>
                        </div>
                        <div className='username-cont'>
                            <label className='label' htmlFor='userpassinp'>Password</label>
                            <input type='text' id='userpassinp' className='log-inp' placeholder='Enter password'></input>
                        </div>
                        <button type='submit' className='btn-lo'>Login</button>
                    </form> : 
                    <form className='login-form'>
                        <h1 className='login-heading'>Admin</h1>
                        <div className='username-cont'>
                            <label className='label' htmlFor='usernameinp'>Username</label>
                            <input type='text' id='usernameinp' className='log-inp' placeholder='Enter username'></input>
                        </div>
                        <div className='username-cont'>
                            <label className='label' htmlFor='userpassinp'>Password</label>
                            <input type='text' id='userpassinp' className='log-inp' placeholder='Enter password'></input>
                        </div>
                        <button type='submit' className='btn-lo'>Login</button>
                    </form>}
            </div>
        </div>
    )
}

export default Login