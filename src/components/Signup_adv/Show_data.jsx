import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../commonComponent/Navbar';
import Scroll from '../commonComponent/Scroll';

export default function Show_data() {
    const location = useLocation();
    console.log(location.state.data.fname)
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
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>{location.state.data.id}</td>
                                <td>{location.state.data.name}</td>
                                <td>{location.state.data.title}</td>
                                <td>{location.state.data.body}</td>
                                <td>{location.state.data.email}</td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>



    )
}
