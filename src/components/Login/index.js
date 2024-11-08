import './index.css'
import {useState} from 'react'

const Login=()=>{
    const [isUser, setUser]= useState(true)
    const [isSignin, setSignin]= useState(false)
    const [retypePass, setRetypePass]= useState('')
    const [typePass, setTypePass]= useState('')
    const [typeUsername, setTypeUsername]= useState('')
    const [signinError, setSigninError]= useState(false)
    const [errormsg, setErrmsg]= useState('')
    const [adminName, setAdminName]= useState('')
    const [adminPass, setAdminPass]= useState('')

    const onAdminName= (eve)=>{
        setAdminName(eve.target.value)
    }
    const onAdminPAss= (eve)=>{
        setAdminPass(eve.target.value)
    }
    const onUser= ()=>{
        setUser(true)
    }
    const onAdmin=()=>{
        setUser(false)
    }
    const onSigninon=()=>{
        setSignin(false)
    }
    const onLoginon=()=>{
        setSignin(true)
    }
    const onTypeUsername=(eve)=>{
        setTypeUsername(eve.target.value)
    }
    const onTypePass=(eve)=>{
        setTypePass(eve.target.value)
    }
    const onRetypePass=(eve)=>{
        setRetypePass(eve.target.value)
    }
    const onSigninSubmition=(event)=>{
        event.preventDefault()
        if (typePass=== retypePass){}
        else {
            setSigninError(true)
            setErrmsg("**Confirm password didn't matched")
        }
    }
    const onAdminSubmit= async (event)=>{
        event.preventDefault()
        const adminDetails={
            adminusername: adminName,
            adminpassword: adminPass
        }
        const url='http://localhost:3000/api/adminlogin'
        const options = {
            method: 'POST',
            body: JSON.stringify(adminDetails),
        }
        console.log(JSON.stringify(adminDetails))
        const response= await fetch(url, options)
        console.log(response)
    }
    
    
    return (
        <div className='login-bg-container'>
            <div className='head'>
                <h1 className='log-head-logo'>Tech Loan</h1>
                {
                isSignin? <button type='button' onClick={onSigninon} className='signinbtn'>Signin</button>
                    :     <button type='button' onClick={onLoginon} className='signinbtn'>Login</button>
                }
                
            </div>
            {isSignin? 
                    <form className='login-form' onSubmit={onSigninSubmition}>
                        <h1 className='login-heading'>User SignIn</h1>
                        <div className='username-cont'>
                            <label className='label' htmlFor='usernameinp'>Username</label>
                            <input type='text' id='usernameinp' onChange={onTypeUsername} value={typeUsername} className='log-inp' placeholder='Enter username'></input>
                        </div>
                        <div className='username-cont'>
                            <label className='label' htmlFor='userpassinp'>Password</label>
                            <input type='password' id='userpassinp' onChange={onTypePass} value={typePass} className='log-inp' placeholder='Enter password'></input>
                        </div>
                        <div className='username-cont'>
                            <label className='label' htmlFor='userpassinp'>Re-type Password</label>
                            <input type='password' id='userpassinp' onChange={onRetypePass} value={retypePass} className='log-inp' placeholder='Enter password'></input>
                        </div>
                        <button type='submit' className='btn-lo'>Signin</button>
                        {signinError && <p className='error'>{errormsg}</p>}
                    </form> : 
                    <div className='cont-lo'>
                        <p className='log-para'>Select who you are*</p>
                        <div className='login-op-cont'>
                            <button type='button' onClick={onUser} className='logi-btn'>User Login</button>
                            <button type='button' onClick={onAdmin} className='logi-btn'>Admin Login</button>
                        </div>
                        {isUser? <form className='login-form'>
                                <h1 className='login-heading'>User</h1>
                                <div className='username-cont'>
                                    <label className='label' htmlFor='usernameinp'>Username</label>
                                    <input type='text' id='usernameinp' className='log-inp' placeholder='Enter username'></input>
                                </div>
                                <div className='username-cont'>
                                    <label className='label' htmlFor='userpassinp'>Password</label>
                                    <input type='password' id='userpassinp' className='log-inp' placeholder='Enter password'></input>
                                </div>
                                <button type='submit' className='btn-lo'>Login</button>
                            </form> :
                            <form className='login-form' onSubmit={onAdminSubmit}>
                                <h1 className='login-heading'>Admin</h1>
                                <div className='username-cont'>
                                    <label className='label' htmlFor='usernameinp'>Admin Username</label>
                                    <input type='text' id='usernameinp' onChange={onAdminName} value={adminName}
                                    className='log-inp' placeholder='Enter username'></input>
                                </div>
                                <div className='username-cont'>
                                    <label className='label' htmlFor='userpassinp'>Password</label>
                                    <input type='password' id='userpassinp' onChange={onAdminPAss} value={adminPass} className='log-inp' placeholder='Enter password'></input>
                                </div>
                                <button type='submit' className='btn-lo'>Login</button>
                            </form>
                        }
                    </div>
            }
            
        </div>
    )
}

export default Login