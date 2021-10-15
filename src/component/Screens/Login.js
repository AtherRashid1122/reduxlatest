import React, { useState } from 'react'
import { Logout, setdata } from '../Action/Loginlogoutaction';
import { useSelector, useDispatch } from 'react-redux'
import { Submitdata } from '../Action/Loginlogoutaction';
const Login = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.loginlogout)
    const isloggedin = useSelector(state => state.loginlogout.isloggedin)

    const logindata = useSelector(state => state.loginlogout.logindata)
    const user = { name: "Hello Ather " }
    const [name, setname] = useState()
    const [pass, setpass] = useState()
    // const [indexx, setindex] = useState()

    // console.log("state of reducer is ", state)
    console.log("state data is ", logindata)


    const Nameinput = (e) => {
        setname(e.target.value)

    }
    const hanldepass = (e) => {
        setpass(e.target.value)

    }
    return (
        <div>
            <div style={{ display: 'flex', }}>
                <div style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center', textAlign: 'center', width: '100%' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        Login/Logout
                    </h2>

                </div>
            </div>


            <div style={{ alignContent: "center", textAlign: 'center' }}>
                {isloggedin ? <>  <text>
                    This is  {state.user.name}
                </text>

                    <button onClick={() => dispatch(Logout())}>
                        Logout
                    </button>
                </>
                    :
                    <>
                        <button onClick={() => dispatch(setdata(user))}>
                            Login
                        </button>
                    </>
                }
            </div>

            <div style={{ alignContent: 'center', width: '100%', justifyContent: 'center', textAlign: 'center', marginTop: '40px' }}>
                <input type="text" onChange={Nameinput}></input>
                <input style={{ marginLeft: '20px ' }} type="text" onChange={hanldepass}></input>
                <button style={{ marginLeft: '20px ' }} onClick={() => dispatch(Submitdata({ name, pass }))} >Submit</button>
            </div>

            <div style={{ alignContent: 'center', width: '100%', justifyContent: 'center', textAlign: 'center', marginTop: '40px' }}>
                {
                    logindata?.map((item, index) => {
                        console.log("itemsss", item)
                        // setindex(index)
                        return (
                            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignContent: 'center', }} >

                                <h2>  {item.name}</h2>
                                <h2 style={{ marginLeft: '40px' }}>  {item.pass}</h2>
                            </div>
                        )
                    })
                }

            </div>


        </div >


    )
}
export default Login;
