import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { signupschema2 } from '../schemas2'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'
import axios from 'axios'



export default function My_post_api() {


    const [list, setList] = useState([])

    console.log('list', list)

    const initialValues = {
        name: "",
        salary: "",
        age: "",
    }
    const [record, setrecord] = useState([])
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signupschema2,
        onSubmit: 
            async (values,action) => {
                // try {
                //   const response = await axios.post(
                //     "https://jsonplaceholder.typicode.com/posts",
                //     values
                //   );
                //   console.log("Form submitted:", response.data);
                //   setSubmittedData([...submittedData, response.data]);

                //   resetForm();
                // } catch (error) {
                //   console.error("Error submitting form:", error);
                // }
                const body = {
                    name: values.name,
                    salary: values.salary,
                    age: values.age,
                };
                axios.post("https://dummy.restapiexample.com/api/v1/create", body)
                    .then((res) => {
                        console.log(res);
                        alert("dada added ")
                        // setPostedData([...postedData, res?.data]); 
                        // setAdd({ title: '', body: '', author: '', number: '' });
                        const new_record = { ...values }
                        setrecord([...record, new_record])
                        action.resetForm(); 
                    })
            }

        
    })

    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3"><Scroll /></div>

                <div class="col-lg-9">
                    <form onSubmit={handleSubmit}>
                        {/* <input type="text" name='name' value={useregister.name} onChange={getInput} /> */}
                        {/* <button type='submit'>SUBMIT</button> */}
                        <div class="form-main">
                            <h1 className='sign-up-heading'>SIGN UP FORM</h1>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="name-input">
                                        <input type="text"
                                            name='name'
                                            id='name'
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Your Name" />
                                        {errors.name && touched.name ? (
                                            <span>{errors.name}</span>
                                        ) : null}
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="name-input">
                                        <input type="number" name='salary' id='salary' value={values.salary} onBlur={handleBlur} onChange={handleChange} placeholder="Your Salary" />
                                        {errors.salary && touched.salary ? (
                                            <span>{errors.salary}</span>
                                        ) : null}
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="email-input">
                                        <input type="number" name='age' id='age' value={values.age} onBlur={handleBlur} onChange={handleChange} placeholder="Enter Your Age" />
                                        {errors.age && touched.age ? (
                                            <span>{errors.age}</span>
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
                                    <th>Name</th>
                                    <th>Salary</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    record.map((curElm, i) => (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{curElm.name}</td>
                                            <td>{curElm.salary}</td>
                                            <td>{curElm.age}</td>
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
