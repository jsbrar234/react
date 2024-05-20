import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'

export default function FullStackForm() {
    const [useregister, setuseregister] = useState({ fname: "", lname: "", gender: "", city: "", state: "", email: "" })

    const getInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setuseregister({ ...useregister, [name]: value });
    }

    const [record, setrecord] = useState([])
    const [err, seterr] = useState({})

    const check_err = (e) => {
        e.preventDefault();
        const errors = {}

        const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (useregister.fname.length < 2) {
            errors.fname = "First Name Must Have Minimum 2 Characters"
        }
        if (useregister.fname == "") {
            errors.fname = "Please Enter Your Name"
        }
        if (useregister.fname.length > 25) {
            errors.fname = "First Name Can Have Maximun 24 Characters"
        }

        if (useregister.lname == "") {
            errors.lname = "Please Enter Your Lastname"
        }

        if (useregister.gender == "") {
            errors.gender = "Please Enter Your Gender"
        }

        if (useregister.city.length < 2) {
            errors.city = "City Must Have Minimum 2 Characters"
        }
        if (useregister.city == "") {
            errors.city = "Please Enter Your City"
        }

        if (useregister.state.length < 2) {
            errors.state = "State Must Have Minimum 2 Characters"
        }
        if (useregister.state == "") {
            errors.state = "Please Enter Your State"
        }

        if (useregister.email == "") {
            errors.email = "Please Enter Your Email"
        }
        else if (!email_pattern.test(useregister.email)) {
            errors.email = "Email is not Correct"
        }

        seterr(errors)
        if (Object.keys(errors).length === 0) {

            const body = {
                fname: useregister?.fname,
                lname: useregister?.lname,
                gender: useregister?.gender,
                city: useregister?.city,
                state: useregister?.state,
                email: useregister?.email,
            };
            if (edit) {
                axios.put(`http://localhost:3000/update/${editData}`, body).then((response) => {
                    console.log("RESP : ", response)
                    setedit(false)
                    setuseregister({ fname: "", lname: "", gender: "", city: "", state: "", email: "" })
                    userList();
                })

            }
            else {
                axios.post("http://localhost:3000/", body).then((response) => {
                    const new_record = { ...useregister }
                    setrecord([...record, new_record])
                    setuseregister({ fname: "", lname: "", gender: "", city: "", state: "", email: "" });
                    alert("DATA INSERTED SUCCESSFULLY")
                    userList();
                })
            }
        }


    }

    // FOR GETTING DATA FROM SERVER

    const [list, setList] = useState([])
    useEffect(() => {
        userList()
    }, [])

    const userList = () => {
        axios.get("http://localhost:3000/userList").then((res) => {
            console.log("CLICKEDDDDDDDDD")
            setList(res.data.data)
        })
    }







    const handelremove = (data, i) => {

        axios.delete(`http://localhost:3000/delete/${data._id}`).then((response) => {
            alert("DATA DELETED")
            userList();
        }).catch((err) => {
            alert(err)
        })
    }

    const navigate = useNavigate()
    const handleview = (data, j, arr) => {
        navigate("/show-data", { state: { data: data } });
    }

    const [edit, setedit] = useState(false)
    const [editData, seteditData] = useState("")

    const handleupdate = (data, i, arr) => {
        setuseregister({ fname: data.fname, lname: data.lname, gender: data.gender, city: data.city, state: data.state, email: data.email })
        setedit(true)
        seteditData(data._id)

        console.log("THE ID IS : ", typeof (data._id))
    }

    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3"><Scroll /></div>

                <div class="col-lg-9">
                    <form onSubmit={check_err}>
                        {/* <input type="text" name='fname' value={useregister.fname} onChange={getInput} /> */}
                        {/* <button type='submit'>SUBMIT</button> */}
                        <div class="form-main">
                            <h1 className='sign-up-heading'>SIGN UP FORM</h1>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="name-input">
                                        <input type="text" name='fname' value={useregister.fname} onChange={getInput} placeholder="Your First Name" />
                                        <span>{err.fname}</span>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="name-input">
                                        <input type="text" name='lname' value={useregister.lname} onChange={getInput} placeholder="Your Last Name" />
                                        <span>{err.lname}</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="email-input">
                                        <input type="text" name='gender' value={useregister.gender} onChange={getInput} placeholder="Gender" />
                                        <span>{err.gender}</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="email-input">
                                        <input type="text" name='city' value={useregister.city} onChange={getInput} placeholder="City" />
                                        <span>{err.city}</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="email-input">
                                        <input type="text" name='state' value={useregister.state} onChange={getInput} placeholder="State" />
                                        <span>{err.state}</span>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="subject-input">
                                        <input type="email" name='email' value={useregister.email} onChange={getInput} placeholder="Email Address" />
                                        <span>{err.email}</span>
                                    </div>
                                </div>


                                <div class="col-lg-12">
                                    <div class="send-msg-btn">
                                        <button type='submit'>{edit ? "UPDATE" : "SIGN UP"}</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>



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
                                    <th>ACTON</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    list.map((curElm, i, arr) => (
                                        <tr>
                                            <td>{curElm.fname + " " +curElm.lname}</td>
                                            <td>{curElm.gender}</td>
                                            <td>{curElm.city}</td>
                                            <td>{curElm.state}</td>
                                            <td>{curElm.email}</td>
                                            <td>
                                                <i onClick={() => handelremove(curElm, i, arr)} class="bi bi-trash crud"></i>
                                                <i onClick={() => handleview(curElm, i, arr)} class="bi bi-eye crud"></i>
                                                <i onClick={() => handleupdate(curElm, i, arr)} class="bi bi-pencil crud"></i></td>
                                        </tr>
                                    ))


                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
