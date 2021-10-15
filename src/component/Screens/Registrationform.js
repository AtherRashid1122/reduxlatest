import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/registration.css'
import { Deleteaction, Registration, Updateddata } from '../Action/Registration'

const Registrationform = () => {
    const [toggle, settoggle] = useState(false)
    const [name, setname] = useState()
    const [store, setstore] = useState()

    const [rnum, setrollnumber] = useState()
    const [email, setemail] = useState()
    const [pass, setpass] = useState()
    const user = useSelector(state => state.Regitrationreducer.user)
    // console.log("user data is ", user)
    const dispatch = useDispatch()

    const handlename = (e) => {

        setname(e.target.value);
    }

    const handlerollnumber = (e) => {
        setrollnumber(e.target.value)
    }

    const handleemail = (e) => {
        setemail(e.target.value)

    }

    const handlepass = (e) => {
        setpass(e.target.value)
    }

    const Submit = () => {
        setname('')
        setemail('')
        setpass('')
        setrollnumber('')

        dispatch(Registration({ name: name, rollnum: rnum, email: email, password: pass }))

    }

    const deleteid = (id) => {

        console.log("id is ", id)
        dispatch(Deleteaction(id))
    }

    const Update = () => {
        const updated = user?.map((item, index) => {
            if (store === index) {
                return { name: name, rollnum: rnum, email: email, password: pass }
            }
            return item
        })
        dispatch(Updateddata(updated))
        settoggle(false)
        setemail('')
        setname('')
        setpass('')
        setrollnumber('')
    }

    const Editid = (item, id) => {
        setstore(id)
        console.log("item update", item.name)
        setname(item.name)
        setpass(item.password)
        setrollnumber(item.rollnum)
        setemail(item.email)
        settoggle(true)
    }
    return (
        <div>
            <div className="Registration_form">
                <h1>
                    Registrationform
                </h1>

            </div>
            <div style={{ padding: '30px' }}>
                <label style={{marginLeft: '20px' }}>
                    Name
                </label>
                <input value={name} onChange={handlename} style={{ marginLeft: '20px' }} type="text" placeholder="Enter Name">

                </input>
                <label style={{ marginLeft: '20px' }}>
                    Rollnumber
                </label>
                <input value={rnum} onChange={handlerollnumber} style={{ marginLeft: '20px' }} type="text" placeholder="Enter Rollnumber">

                </input>

                <label style={{marginLeft: '20px' }}>
                    Email
                </label>
                <input value={email} onChange={handleemail} style={{ marginLeft: '20px' }} type="text" placeholder="Enter Email">

                </input>

                <label style={{marginLeft: '20px' }}>
                    Password
                </label>
                <input value={pass} onChange={handlepass} style={{ marginLeft: '20px' }} type="text" placeholder="Enter Password">

                </input>

                <button onClick={toggle ? Update : Submit} style={{ marginLeft: '20px' }}>{toggle ? 'update' : 'submit'}</button>
            </div>

            <table className="table">
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Rollno
                    </th>

                    <th>
                        Email
                    </th>
                    <th>
                        Password
                    </th>
                    <th>
                        Dlt/Edit
                    </th>
                </tr>
                {

                    user?.map((item, index) => {
                        console.log("map user data us ", item)
                        return (
                            <tr key={index}>
                                <td >
                                    {item.name}
                                </td>

                                <td>
                                    {item.rollnum}
                                </td>

                                <td>
                                    {item.email}
                                </td>

                                <td >
                                    {item.password}
                                </td>
                                <td>
                                    <i onClick={() => deleteid(index)} style={{ margin: '30px' }} class="glyphicon glyphicon-remove"></i>
                                </td>
                                <td>
                                    <i onClick={() => Editid(item, index)} style={{ margin: '10px' }} class="glyphicon glyphicon-edit"></i>
                                </td>

                            </tr>
                        )
                    })
                }







            </table>
        </div >
    )
}

export default Registrationform
