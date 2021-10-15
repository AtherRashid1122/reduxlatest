import React, { useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { useHistory } from "react-router";

const Loginauth = () => {
    // let Signupdata = []
    const Signupdata = useSelector(state => state.Signupreducer.Signup)
    console.log("Logon item name is ", Signupdata)
    const history = useHistory()
    const dispatch = useDispatch()
    const [Lname, setLname] = useState()
    const [Lemail, setLemail] = useState()

    const [Lpassword, setLpassword] = useState()


    const handleinput = (e) => {

        setLname(e.target.value)
    }

    const handleemail = (e) => {

        setLemail(e.target.value)
    }
    const handlepass = (e) => {

        setLpassword(e.target.value)
    }

    const Submitlogin = () => {

        Signupdata?.map((item, index) => {
            console.log("item data is ", item.name)

            if (Lname == item.name && Lemail == item.email && Lpassword == item.password) {

                history.push('/registration')
            }
            else {
                alert("Record Not found")
            }

        })

    }


    return (
        <div className="Signup" >
            <h1>
                Login Form
            </h1>

            <div style={{ height: '600px', width: '600px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: '450px', marginTop: '40px' }}>

                <div style={{ display: 'flex', margin: '50px', justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <label >
                        Name
                    </label>
                    <input value={Lname} onChange={handleinput} style={{ marginLeft: '20px', width: '400px', height: '40px', background: '#f1f1f1' }} type="text" placeholder="Enter Name ">
                    </input>
                </div>


                <div style={{ display: 'flex', margin: '50px', justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <label >
                        Email
                    </label>
                    <input value={Lemail} onChange={handleemail} style={{ marginLeft: '20px', width: '400px', height: '40px', background: '#f1f1f1' }} type="email" placeholder="Enter Email">
                    </input>
                </div>

                <div style={{ display: 'flex', margin: '50px', justifyContent: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <label >
                        Pass
                    </label>
                    <input value={Lpassword} onChange={handlepass} style={{ marginLeft: '20px', width: '400px', height: '40px', background: '#f1f1f1' }} type="password" placeholder="Enter Password ">
                    </input>
                </div>

                <div style={{ width: '100%' }}>
                    <button style={{ width: '50%', height: '60px', }}>
                        Cancel
                    </button>
                    <button onClick={Submitlogin} style={{ width: '50%', height: '60px', background: 'green', color: 'white' }}>
                        Login
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Loginauth
