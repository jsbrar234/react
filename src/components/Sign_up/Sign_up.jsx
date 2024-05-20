import React, { useState } from 'react'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'

export default function Sign_up() {

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [gender, setgender] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const [email, setemail] = useState("")


    const [u_fname, set_u_fname] = useState("")
    const [u_lname, set_u_lname] = useState("")
    const [u_gender, set_u_gender] = useState("")
    const [u_city, set_u_city] = useState("")
    const [u_state, set_u_state] = useState("")
    const [u_email, set_u_email] = useState("")



    return (
        <>
            <>
                <Navbar />
                <div class="row">
                    <div class="col-lg-3">
                        <Scroll />
                    </div>
                    <div class="col-lg-9">

                        <div class="form-main">
                            <h1 className='sign-up-heading'>SIGN UP FORM</h1>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="name-input">
                                        <input type="text" onChange={(e) => setfname(e.target.value)} placeholder="Your First Name" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="name-input">
                                        <input type="text" onChange={(e) => setlname(e.target.value)} placeholder="Your Last Name" />
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="email-input">
                                        <input type="text" onChange={(e) => setgender(e.target.value)} placeholder="Gender" />
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="email-input">
                                        <input type="text" onChange={(e) => setcity(e.target.value)} placeholder="City" />
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="email-input">
                                        <input type="text" onChange={(e) => setstate(e.target.value)} placeholder="State" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="subject-input">
                                        <input type="email" onChange={(e) => setemail(e.target.value.toLocaleLowerCase())} placeholder="Email Address" />
                                    </div>
                                </div>


                                <div class="col-lg-12">
                                    <div class="send-msg-btn">
                                        <button onClick={() => {
                                            set_u_fname(fname),
                                                set_u_lname(lname)
                                            set_u_gender(gender)
                                            set_u_city(city)
                                            set_u_state(state)
                                            set_u_email(email)
                                        }}>SHOW</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>

                            <div className='sign-up-table-main'>
                                <h1 className='sign-up-heading'>DATA TABLE</h1>
                                <table className='table table-dark table-striped-columns sign-up-table'>
                                    <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Gender</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{u_fname + " " + u_lname}</td>
                                            <td>{u_gender}</td>
                                            <td>{u_city}</td>
                                            <td>{u_state}</td>
                                            <td>{u_email}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </div>
            </>
        </>
    )
}
