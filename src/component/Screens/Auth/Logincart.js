


import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Logincartaction } from '../../Action/action';
const Logincart = () => {

    const [name, setname] = useState()
    const [password, setpassword] = useState()

    const dispatch = useDispatch()
    const [logindata, setlogindata] = useState()
    const logincart = useSelector((state) => state.Loginreducer.login)

    console.log("login datacart is ", logincart)
    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(json => setlogindata(json))
    }, [])

    const handlename = (e) => {
        setname(e.target.value)
    }

    const handlepassword = (e) => {
        setpassword(e.target.value)
    }
    const Loginhandle = () => {

        setname('')
        setpassword('')
        dispatch(Logincartaction({ name: name, password: password }))

        

    }

    console.log("login data is ", logindata)
    return (
        <div >
            <h1>
                Login cart
            </h1>
            <div>
                <input onChange={handlename} type="text" placeholder="Enter Email"></input>
                <input onChange={handlepassword} type="text" placeholder="Enter Password"></input>
            </div>

            <button onClick={Loginhandle}>
                Login
            </button>
        </div>
    )
}

export default Logincart
