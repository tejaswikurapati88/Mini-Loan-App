import './index.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Payment=()=>{
    const [selValue, setSelValue] = useState('')

    let navigate= useNavigate()

    const onselValue=(event)=>{
        setSelValue(event.target.value)
        
    }

    const onSubmition=(event)=>{
        event.preventDefault()
        navigate('/repayments')
    }

    return (
        <div className='bg-payment-container'>
            <form onSubmit={onSubmition} className='form-pay'>
                <p className='pay-para'>Check your Credit Limit</p>
                <p className='para-pay'>Answer these questions to know your limit</p>
                <label className='pay-label' htmlFor='name'>Full Name</label>
                <input className='inp-pay' id="name" type='text' placeholder="Full Name as per PAN" />
                <label className='pay-label' htmlFor="date">Date of Birth as per PAN</label>
                <input className='inp-pay' id='date' type='date' placeholder='dd/mm/yy' />

                <label className='pay-label' htmlFor="gender">Gender</label>
                <div className='pa-gen-cont'>
                    <button className='inp-pay-button' id='gender' type='button'>Male</button>
                    <button className='inp-pay-button' id='gender' type='button'>Female</button>
                </div>

                <label className='pay-label' htmlFor="pan">PAN</label>
                <input className='inp-pay' id='pan' type='number' placeholder='PAN' />
                <p className='desc-pay'>We need this to calculate your credit limit</p>

                <label className='pay-label' htmlFor="pin">Pincode</label>
                <input className='inp-pay' id='pin' type='text' placeholder='Current Residence Pincode' />

                <label className='pay-label' htmlFor="pin">Are you a full time Salaried employee?</label>
                <select value={selValue} onChange={onselValue}>
                    <option name='yes' >Yes</option>
                    <option name='no'>No</option>
                </select>
                <button className='sub-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Payment