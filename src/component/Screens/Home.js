// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'


// import { Increament, Decreament } from '../Action/action'


// const Home = () => {
//     const counter1 = useSelector((state) => state.Loginreducer.counter)
//     // const state = useSelector(state => state.lo)
//     const dispatch = useDispatch()
//     const [counter, setcounter] = useState('')
//     // console.log(counter1)
//     const handledecrement = () => {

//         if (counter1 > 0)
//             dispatch((Decreament()))

//     }


//     // console.log("counter neww", counter)

//     return (

//         <div style={{ justifyContent: 'center', alignContent: "center", textAlign: 'center' }}>
//             <h1>
//                 CounterApp
//             </h1>


//             <div style={{ marginTop: '60px', background: "red", border: '2px solid black' }}>
//                 <button style={{ margin: '20px' }} onClick={() => dispatch(Increament())}>
//                     +
//                 </button>
//                 <text style={{ margin: '20px' }}>
//                     {counter1}
//                 </text>
//                 <button style={{ margin: '20px' }} onClick={handledecrement} >
//                     -
//                 </button>

//             </div>



//         </div>
//     )
// }

// export default Home


import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { Increament, Decreament,Delete } from '../Action/action'


const Home = () => {

    const dispatch = useDispatch()


    const counterdata = useSelector(state => state.Loginreducer.counterdata)
    console.log("counter neww", counterdata)
    const handledelete = (id) => {

        console.log("id is ", id)
        dispatch(Delete(id))
    }

    return (

        <div style={{ justifyContent: 'center', alignContent: "center", textAlign: 'center' }}>


            <div >
                <h1 style={{ justifyContent: 'center', textAlign: 'center', }}>
                    Shopping cart
                </h1>


                {counterdata ? counterdata.map((item, index) => {
                    return (
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', flexWrap: 'wrap', display: 'flex' }}>
                            <div key={index} style={{ height: '300px', width: '33%', border: '2px solid black', margin: '20px' }}>

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

                                <h1 onClick={()=>handledelete(index)}>
                                    Delete
                                </h1>

                            </div>

                        </div>
                    )

                }) : null}

            </div>


        </div>
    )
}

export default Home


