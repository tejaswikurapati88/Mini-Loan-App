import './index.css' 

const AdminHome=()=>{
    return (
        <div className='head top-nav'>
                <h1 className='log-head-logo logo'>Tech Loan</h1>
                <div className='sub-bar-con'>
                    <p className='pay'>Home</p>
                    <p className='pay'>Payments</p>
                    <button type='button' className='signinbtn'>Logout</button>
                </div>
            </div>
    )
}

export default AdminHome