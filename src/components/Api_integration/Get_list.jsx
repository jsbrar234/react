import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'

export default function Get_list() {

    const url = "https://jsonplaceholder.typicode.com/users"
    const [list, setList] = useState([])

    console.log('list', list)

    useEffect(() => {
        userList()
    }, [])

    const userList = () => {
        axios.get(url).then((res) => {
            setList(res?.data)
        })
    }


    const [search, setsearch] = useState("")

    const searchBox = (event) => {
        setsearch(event.target.value)
    }

    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3">
                    <Scroll />
                </div>
                <div class="col-lg-9">

                    <input type="text" id='search-box' onChange={searchBox} placeholder="SEARCH HERE" />
                    <div className='view-table'>
                        <table className='table table-success table-striped-columns'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>name </th>
                                    <th>usename </th>
                                    <th>email</th>
                                    <th>phone</th>
                                    <th>Website</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.filter((val) => {
                                        if(search===""){
                                            return val
                                        }
                                        else if (val.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                                        return val;
                                    }
                                    }).map((data, index) => {
                                    console.log("datatattttt", data)
                                    return (
                                        <tr>
                                            <td>{data?.id}</td>
                                            <td>{data?.name}</td>
                                            <td>{data?.username}</td>
                                            <td>{data?.email}</td>
                                            <td>{data?.phone}</td>
                                            <td>{data?.website}</td>
                                            <td> {data?.address?.street}{" "}{data?.address?.zipcode}{""}{data?.address?.city}</td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}
