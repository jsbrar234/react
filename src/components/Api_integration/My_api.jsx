import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'

export default function My_api() {

    const url = "https://mocki.io/v1/206c2117-e66b-42e2-9a12-3ce0bf7e9cb5 "
    const [list, setList] = useState([])

console.log('list>>>>>>>>>>>>>', list)

    useEffect(() => {
        userList() 
    }, [])

    const userList = () => {
        axios.get(url).then((res) => {
            setList(res?.data)
        })
    }

    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3">
                    <Scroll />
                </div>
                <div class="col-lg-9">
                    <div className='view-table'>
                        <table className='table table-success table-striped-columns'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First </th>
                                    <th>Last </th>
                                    <th>Gender</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list?.map((data,index) => {
                                   console.log("datadddddddddd", data[0]?.[1]?.id)
                                    return (
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{data?.firstname}</td>
                                            <td>{data?.lastname}</td>
                                            <td>{data?.gender}</td>
                                            <td>{data?.city}</td>
                                            <td>{data?.state}</td>
                                            <td> {data?.email}</td>
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
