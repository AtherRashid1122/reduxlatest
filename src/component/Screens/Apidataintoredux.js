import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Apidata, Delete, Updatedata } from '../Action/Apidataaction'
import { useHistory } from "react-router-dom";

const Apidataintoredux = () => {
    let history = useHistory();

    const [data, setdata] = useState([])
    const [display, setdisplay] = useState()
    const [store, setstore] = useState()
    const [input, setinput] = useState()
    const [toggle, settoggle] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(state => state.Apireducer.user) /////////
    // console.log("data is ", user)




    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(json => setdata(json))
        // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => setdata(json))
    }, [])

    const send = (e) => {

        setinput(e.target.value)

    }
    const pushdata = () => {
        // console.log("data push", data)
        // const after = data.unshift({ input: input })
        // console.log("after pushing", after)
        setinput('')
        dispatch(Apidata(data))
        // history.push('/Home')

    }

    const deleteid = (id) => {
        console.log("id is ", id)
        dispatch(Delete(id))
    }

    const Edituser = (item, id) => {
        setstore(id)
        console.log("id", id)
        setinput(item.title)
        settoggle(true)
    }
    const updatedata = () => {

        const updated = user?.map((item, index) => {

            // console.log("user", item)

            if (store === index) {
                return { title: input }
            }
            return item
        })


        dispatch(Updatedata(updated))
    }



    return (
        <div style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h1>
                Apidataintoredux
            </h1>
            <input value={input} type="text" onChange={send}>
            </input>
            <button onClick={toggle ? updatedata : pushdata} >
                {toggle ? 'Update' : 'push'}
            </button>
            {
                user?.map((item, index) => {
                    // console.log("itemmmm", item.company?.name)
                    // console.log("itemmmm", item)

                    return (
                        <div style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'red', display: 'flex', margin: '20px' }}>

                            {/* <h2>{item.input}</h2> */}
                            {/* <h2>{item.company?.name}</h2> */}
                            <h2>{item.title}</h2>
                            <i onClick={() => deleteid(index)} style={{ margin: '30px' }} class="glyphicon glyphicon-remove"></i>

                            <i onClick={() => Edituser(item, index)} style={{ margin: '30px' }} class="glyphicon glyphicon-edit"></i>

                        </div>
                    )

                })
            }
        </div>
    )
}
export default Apidataintoredux