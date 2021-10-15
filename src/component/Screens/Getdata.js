import React, { useState, useEffect } from 'react'
import { Route, Switch, Link } from "react-router-dom";
const Getdata = () => {
    const [data, setdata] = useState([])
    const [input, setinput] = useState()
    var [filterdata, setfilterdata] = useState([])
    // const Search = (e) => {
    //     setinput(e.target.value);
    //     let filterdata = []
    //     console.log("input data is ", input)
    //     filterdata = data?.filter((item, index) => {
    //         return item.firstName.search(input) !== -1
    //     })
    //     setdata(filterdata)
    // }
    const Search = (e) => {
        let updated = []
        if (e.target.value.length >= 3) {
            updated = data?.filter((item) => {
                return item.firstName.includes(e.target.value)
            })
            setfilterdata(updated)
        }
        else {
            setfilterdata(data)
        }
    }
    useEffect(() => {
        fetch('https://thronesapi.com/api/v2/Characters')
            .then(response => response.json())
            .then(json => {
                setdata(json)
                setfilterdata(json)
            })
    }, [])
    
    console.log(data)
    return (
        <div>
            <div style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <input onChange={Search} type="text"></input>
                <button>Search</button>
            </div>
            {/* <list>
                {
                    data?.map((item, index) => {

                        // console.log("itemsss", item)
                        return (
                            <div>

                                <h1> Id :{item.id}, FirstName :{item.firstName} ,LastName :{item.lastName} <Link to={`/recieved?id=${item.id}`}> Show details </Link></h1>
                            </div>
                        )
                    })
                }
            </list> */}
            <div>
                <table>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Lastname
                        </th>
                        <th>
                            Details
                        </th>
                    </tr>
                    {filterdata?.map((item, index) => {
                        console.log("itemss", item)
                        return (
                            <tr>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.firstName}
                                </td>
                                <td>
                                    {item.lastName}
                                </td>
                                <Link to={`/recieved?id=${item.id}`}> Show details </Link>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div >
    )
}
export default Getdata;