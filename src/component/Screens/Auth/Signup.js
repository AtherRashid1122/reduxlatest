import React, { useState } from 'react'
import './signup.css'
import { Signupaction } from '../../Action/Signupaction'
import { useHistory } from "react-router";
import { useDispatch, useSelector, } from 'react-redux'
import Loginauth from './Loginauth';
const Signup = () => {

    const history = useHistory()

    const Signupdata = useSelector(state => state.Signupreducer.Signup)
    console.log("sign up data is ", Signupdata)

    console.log("sign up data is ", Signupdata)
    const dispatch = useDispatch()
    const [name, setname] = useState()
    const [email, setemail] = useState()

    const [password, setpassword] = useState()


    const handleinput = (e) => {

        setname(e.target.value)
    }

    const handleemail = (e) => {

        setemail(e.target.value)
    }
    const handlepass = (e) => {

        setpassword(e.target.value)
    }

    const handlesubmit = () => {

        setname('')
        setemail('')
        setpassword('')


        dispatch(Signupaction({ name: name, email: email, password: password }))
        history.push('/Loginauth')


    }






    return (
        <div className="Signup" >
            <h1>
                Signup Form
            </h1>

            <div style={{ height: '600px', width: '600px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: '450px', marginTop: '40px' }}>

                <div style={{ display: 'flex', margin: '50px', justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <label >
                        Name
                    </label>
                    <input value={name} onChange={handleinput} style={{ marginLeft: '20px', width: '400px', height: '40px', background: '#f1f1f1' }} type="text" placeholder="Enter Name ">
                    </input>
                </div>


                <div style={{ display: 'flex', margin: '50px', justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <label >
                        Email
                    </label>
                    <input value={email} onChange={handleemail} style={{ marginLeft: '20px', width: '400px', height: '40px', background: '#f1f1f1' }} type="email" placeholder="Enter Email">
                    </input>
                </div>

                <div style={{ display: 'flex', margin: '50px', justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <label >
                        Pass
                    </label>
                    <input value={password} onChange={handlepass} style={{ marginLeft: '20px', width: '400px', height: '40px', background: '#f1f1f1' }} type="password" placeholder="Enter Password ">
                    </input>
                </div>

                <div style={{ width: '100%' }}>
                    <button style={{ width: '50%', height: '60px', }}>
                        Cancel
                    </button>
                    <button onClick={handlesubmit} style={{ width: '50%', height: '60px', background: 'green', color: 'white' }}>
                        Sign Up
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Signup
