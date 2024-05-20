import moment from 'moment'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'

export default function Form_adv() {


    const [useregister, setuseregister] = useState({ fname: "", lname: "", gender: "", dob: "", city: "", state: "", email: "", imgfile: "", checkbox: "" })

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", useregister)
    const getInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setuseregister({ ...useregister, [name]: value });
        console.log("RECORDS ", name, value)
        getCheckbox(e)
    }

    const [termCheck, setTermCheck] = useState(false)
    const getCheckbox = (e) => {
        if(e.target.checked){
            setTermCheck("on")
        }
        else{
            setTermCheck("off")
        }
        console.log("TERM CHECK ", e.target.checked)
    }

    const [record, setrecord] = useState([])
    const [err, seterr] = useState({})
    const submitData = (e) => {
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
            errors.gender = "Please Select Your Gender"
        }
        if (useregister.dob == "") {
            errors.dob = "Please Enter Your Date of Birth"
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

        if (useregister.imgfile == "") {
            errors.imgfile = "Please Upload Your Image"
        }

        if (useregister.checkbox == "") {
            errors.checkbox = "You Will Have To Accept Our Terms and Conditions in Order To Proceed"
        }

        if (useregister.email == "") {
            errors.email = "Please Enter Your Email"
        }
        else if (!email_pattern.test(useregister.email)) {
            errors.email = "Email is not Correct"
        }

        seterr(errors)
        if (Object.keys(errors).length === 0) {
            if (edit) {
                const tempRecord = record
                Object.assign(tempRecord[editData], useregister)
                setrecord([...tempRecord])
                setedit(false)
                setuseregister({ fname: "", lname: "", gender: "", dob: "", city: "", state: "", email: "", imgfile: "", checkbox: "off" }
                )
                setTermCheck(false)
                
            }
            else {
                const new_record = { ...useregister }
                setrecord([...record, new_record])
                console.log("NEW RECORD ", new_record)
                setuseregister({ fname: "", lname: "", gender: "", dob: "", city: "", state: "", email: "", imgfile: "", checkbox: "off" })
                setTermCheck(false)

            }
        }


    }

 
        const today = moment();
        const disFutureDate = (current) => {
            return current.isBefore(today);
        }
        
    

    const handelremove = (data, i, arr) => {
        const filterData = record.filter((item, index) => index !== i)
        setrecord(filterData);
    }

    const navigate = useNavigate()
    const handleview = (data, j, arr) => {
        navigate("/show-data", { state: { data: data } });
    }

    const [edit, setedit] = useState(false)
    const [editData, seteditData] = useState("")

    const handleupdate = (data, i, arr) => {
        setuseregister({ fname: data.fname, lname: data.lname, gender: data.gender, dob: data.dob, city: data.city, state: data.state, email: data.email })
        setedit(true)
        seteditData(i)
    }



    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3">
                    <Scroll />
                </div>
                <div class="col-lg-9">
                    <div class="container-form">
                        <h2 class="text-center mb-4">Registration Form</h2>
                        <form onSubmit={submitData}>
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input type="text" name='fname' onChange={getInput} value={useregister.fname} class="form-control" placeholder="Enter your first name" />
                                <span>{err.fname}</span>
                            </div>

                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" name='lname' onChange={getInput} value={useregister.lname} class="form-control" id="lastName" placeholder="Enter your last name" />
                                <span>{err.lname}</span>
                            </div>

                            <div class="form-group">
                                <label>Gender</label>
                                <div class="form-check">
                                    <input class="form-check-input" onChange={getInput} type="radio" name="gender" id="male" value="male"
                                        checked={useregister?.gender === "male"} />
                                    <label class="form-check-label" for="male">
                                        Male
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" onChange={getInput} type="radio" name="gender" id="female" value="female"
                                        checked={useregister?.gender === "female"} />
                                    <label class="form-check-label" for="female">
                                        Female
                                    </label>
                                </div>
                                <span>{err.gender}</span>
                            </div>

                            <div class="form-group">
                                <label for="dob">Date of Birth</label>
                                <input type="date" name='dob' onChange={getInput} value={useregister.dob} class="form-control" id="dob" />
                                <span>{err.dob}</span>
                            </div>

                            <DatePicker timeFormat={false} isValidDate={disFutureDate} />

                            <div class="form-group">
                                <label for="city">City</label>
                                <input type="text" class="form-control" onChange={getInput} name='city' value={useregister.city} id="city" placeholder="Enter your city" />
                                <span>{err.city}</span>
                            </div>

                            <div class="form-group">
                                <label for="state">State</label>
                                <select class="form-control" onChange={getInput} name="state" id="state" value={useregister.state} >
                                    <option value="" selected disabled>Select your state</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Haryana">Haryana</option>
                                </select>
                                <span>{err.state}</span>
                            </div>

                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" onChange={getInput} value={useregister.email} name='email' id="email" placeholder="Enter your email" />
                                <span>{err.email}</span>
                            </div>

                            <div class="form-group">
                                <label for="image">Upload Image</label>
                                <input type="file" class="form-control" onChange={getInput} value={useregister.imgfile} name='imgfile' id="imgfile" />
                                <span>{err.imgfile}</span>
                            </div>

                            <div class="form-group form-check">
                                <input type="checkbox" name='checkbox' class="form-check-input" id="terms" checked={termCheck} onChange={getInput}
                                />
                                
                                <label class="form-check-label" for="terms">I agree to the terms and conditions</label>
                                <br/>
                                <span>{err.checkbox}</span>
                            </div>


                            <button type="submit" class="btn btn-primary btn-block">{edit ? "UPDATE" : "SUBMIT"}</button>
                        </form>
                    </div>

                    <div className='sign-up-table-main'>
                        <h1 className='sign-up-heading'>DATA TABLE</h1>


                        <table className='table table-dark table-striped-columns sign-up-table'>
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Gender</th>
                                    <th>D.O.B.</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Email</th>
                                    <th>Image Path</th>
                                    <th>Checkbox</th>
                                    <th>ACTON</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    record.map((curElm, i, arr) => (
                                        <tr>
                                            <td>{curElm.fname + curElm.lname}</td>
                                            <td>{curElm.gender}</td>
                                            <td>{curElm.dob}</td>
                                            <td>{curElm.city}</td>
                                            <td>{curElm.state}</td>
                                            <td>{curElm.email}</td>
                                            <td>{curElm.imgfile}</td>
                                            <td>{curElm.checkbox}</td>
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
