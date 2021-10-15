import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// import RatingComponent from 'react-rating-component';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    NavLink,
    useHistory
} from "react-router-dom";
import { Increament, Decreament } from '../../Action/action';
const Shoppingcart = () => {
    const counter1 = useSelector((state) => state.Loginreducer.counter)

    const dispatch = useDispatch()
    const history = useHistory()
    const [data, setdata] = useState([])
    const [cartdata, setcartdata] = useState('0')
    console.log("data is", data)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setdata(json))


            // fetch('https://fakestoreapi.com/products/category/electronics')
            // .then(res=>res.json())
            // .then(json=>console.log(json))

        //////////////login api /////////////////////////
        // fetch('https://fakestoreapi.com/users')
        // .then(res=>res.json())
        // .then(json=>console.log(json))



        //    fetch('https://fakestoreapi.com/auth/login',{
        //     method:'POST',
        //     body:JSON.stringify({
        //         username: "mor_2314",
        //         password: "83r5^_"
        //     })
        // })
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))


        //////////////login api /////////////////////////
    }, [])

    const handledecrement = () => {

        if (counter1 > 0)
            dispatch((Decreament()))

    }

    const handleclick = (item, index) => {

        // if (item.id > 0 || item.id < 5) {
        //     history.push('/registration')

        // }
        // else if (item.id > 5) {
        //     history.push('/getdata')

        // }

    }



    return (
        <div >
            <h1 style={{ justifyContent: 'center', textAlign: 'center', }}>
                Shopping cart
            </h1>
            <h4> Add to cart  {counter1}</h4>

            {data ? data.map((item, index) => {
                return (
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', flexWrap: 'wrap', display: 'flex' }}>
                        <div key={index} onClick={() => handleclick(item, index)} style={{ height: '300px', width: '33%', border: '2px solid black', margin: '20px' }}>

                            <h1>
                                {item.category}
                            </h1>
                            {/* <p>
                                {item.description}
                            </p> */}
                            <img src={item.image} style={{ height: '60px', width: '60px' }} />
                            <h5>
                                {item.price}
                            </h5>
                            <h5>
                                {item.title}
                            </h5>
                            <div style={{ justifyContent: 'space-between', display: 'flex', height: '80px', textAlign: 'center', alignItems: 'center', alignContent: 'center' }}>

                                <div onClick={() => dispatch(Increament(item))} style={{ border: '1px solid black', width: '50px' }}>
                                    <h1>
                                        +
                                    </h1>
                                </div>
                                <text >

                                    Add to cart
                                </text>

                                <div onClick={handledecrement} style={{ border: '2px solid black', width: '50px' }}>
                                    <h1>
                                        -
                                    </h1>
                                </div>

                            </div>
                        </div>

                    </div>
                )

            }) : null}

        </div>
    )
}
export default Shoppingcart