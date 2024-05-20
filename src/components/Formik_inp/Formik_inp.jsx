import { useFormik } from 'formik'
import React, { useState } from 'react'
import { signupschema } from '../../schemas'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'



export default function Formik_inp() {
    const initialValues = {
        fname: "",
        lname: "",
        gender: "",
        city: "",
        state: "",
        email: ""
    }
    const [record, setrecord] = useState([])
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signupschema,
        onSubmit: (values, action) => {
            const new_record = { ...values }
            setrecord([...record, new_record])
            action.resetForm();
        }
    })

    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3"><Scroll /></div>

                <div class="col-lg-9">
                    <form onSubmit={handleSubmit}>
                        {/* <input type="text" name='fname' value={useregister.fname} onChange={getInput} /> */}
                        {/* <button type='submit'>SUBMIT</button> */}
                        <div class="form-main">
                            <h1 className='sign-up-heading'>SIGN UP FORM</h1>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="name-input">
                                        <input type="text"
                                            name='fname'
                                            id='fname'
                                            value={values.fname}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Your First Name" />
                                        {errors.fname && touched.fname ? (
                                            <span>{errors.fname}</span>
                                        ) : null}
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="name-input">
                                        <input type="text" name='lname' id='lname' value={values.lname} onBlur={handleBlur} onChange={handleChange} placeholder="Your Last Name" />
                                        {errors.lname && touched.lname ? (
                                            <span>{errors.lname}</span>
                                        ) : null}
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="email-input">
                                        <input type="text" name='gender' id='gender' value={values.gender} onBlur={handleBlur} onChange={handleChange} placeholder="Gender" />
                                        {errors.gender && touched.gender ? (
                                            <span>{errors.gender}</span>
                                        ) : null}
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="email-input">
                                        <input type="text" name='city' id='city' value={values.city} onBlur={handleBlur} onChange={handleChange} placeholder="City" />
                                        {errors.city && touched.city ? (
                                            <span>{errors.city}</span>
                                        ) : null}
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="email-input">
                                        <input type="text" name='state' id='state' value={values.state} onBlur={handleBlur} onChange={handleChange} placeholder="State" />
                                        {errors.state && touched.state ? (
                                            <span>{errors.state}</span>
                                        ) : null}
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="subject-input">
                                        <input type="email" name='email' id='email' value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder="Email Address" />
                                        {errors.email && touched.email ? (
                                            <span>{errors.email}</span>
                                        ) : null}
                                    </div>
                                </div>



                                <div class="col-lg-12">
                                    <div class="send-msg-btn">
                                        <button type='submit'>SUBMIT</button>
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
                                    <th>S. No.</th>
                                    <th>Full Name</th>
                                    <th>Gender</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    record.map((curElm, i) => (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{curElm.fname + curElm.lname}</td>
                                            <td>{curElm.gender}</td>
                                            <td>{curElm.city}</td>
                                            <td>{curElm.state}</td>
                                            <td>{curElm.email}</td>
                                            <td><i class="bi bi-trash crud"></i></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </>
    )
}
