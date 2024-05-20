import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'

export default function Post_put() {
    const [useregister, setuseregister] = useState({ name: "", id: "", title: "", body: "" })

    const [newd, setNewd] = useState("")

    const [id, setid] = useState("");

    const getInput = (e) => {
        const kname = e.target.name
        const value = e.target.value
        setuseregister({ ...useregister, [kname]: value });
    }

    const [record, setrecord] = useState([])
    const [err, seterr] = useState({})

    const handleupdate = (data) => {
        setuseregister({ name: data.name, id: data.id, title: data.title, body: data.body })
        // setrecord(arr)
        setid(data?.id)
    }


    const check_err = (e) => {
        e.preventDefault();
        const errors = {}

        if (useregister.name.length < 2) {
            errors.name = "name Must Have Minimum 2 Characters"
        }
        if (useregister.name == "") {
            errors.name = "Please Enter Your name"
        }
        if (useregister.name.length > 25) {
            errors.name = "name Can Have Maximun 24 Characters"
        }

        if (useregister.id == "") {
            errors.id = "Please Enter Your id"
        }

        if (useregister.title == "") {
            errors.title = "Please Enter Your title"
        }
        if (useregister.body == "") {
            errors.body = "Please Enter Your Text in Body"
        }
        seterr(errors)
        if (Object.keys(errors).length === 0) {
            const body = {
                name: useregister?.name,
                id: useregister?.id,
                title: useregister?.title,
                body: useregister?.body
            };
            if (id) {

                axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
                    //        setPostedData([...postedData, res?.data]);
                    //        setAdd({ title: "", body: "", author: "", number: "" });
                    // const new_record = { ...useregister }
                    // setrecord([...record, new_record])

                    alert("data updated ")
                    setNewd(response?.data)
                    console.log("RESPONSE : ", response.data)
                    const tempRecord = record

                    Object.assign(tempRecord[id - 1], useregister)
                    setrecord([...tempRecord])

                    setuseregister({ name: "", id: "", title: "", body: "" })
                    setid(0);
                })

            }
            else {
                axios.post("https://jsonplaceholder.typicode.com/posts", body).then((response) => {
                    // console.log("response", response);
                    alert("data added ")
                    setNewd(response?.data)
                    const new_record = { ...useregister }
                    setrecord([...record, new_record])
                    setuseregister({ name: "", id: "", title: "", body: "" })
                });

            }


        }
    }

    // const submitInput = (e) => {
    //     e.preventDefault();
    //     const new_record = { ...useregister }
    //     setrecord([...record, new_record])
    //     setuseregister({ name: "", lname: "", id: "", title: "", state: "", email: "" })
    // }




    const handelremove = (data, i) => {

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${i}`).then((response) => {
            alert("DATA DELETED")
            const filterData = record.filter((item, index) => index !== i)
            setrecord(filterData);
        })


        // record.splice(i, 1)
        // setrecord(arr);
        // setuseregister({ name: "", id: "", title: "", body: "" })
    }



    const navigate = useNavigate()
    const handleview = (data) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${data?.id}`).then((response) => {
            // navigate("/show-data", { state: { data: data } });
            console.log("UIEHFIIEF", response.data)
            alert("DATA FETCHED")
        })

    }


    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3"><Scroll /></div>

                <div class="col-lg-9">
                    <form onSubmit={check_err}>
                        {/* <input type="text" name='name' value={useregister.name} onChange={getInput} /> */}
                        {/* <button type='submit'>SUBMIT</button> */}
                        <div class="form-main">
                            <h1 className='sign-up-heading'>SIGN UP FORM</h1>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="email-input">
                                        <input type="text" name=' ' value={useregister.id} onChange={getInput} placeholder="id" />
                                        <span>{err.id}</span>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="name-input">
                                        <input type="text" name='name' value={useregister.name} onChange={getInput} placeholder="Enter Your Name" />
                                        <span>{err.name}</span>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="email-input">
                                        <input type="text" name='title' value={useregister.title} onChange={getInput} placeholder="title" />
                                        <span>{err.title}</span>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="email-input">
                                        <input type="text" name='body' value={useregister.body} onChange={getInput} placeholder="body" />
                                        <span>{err.body}</span>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="email-input">

                                        <select>
                                            <option >PHP</option>
                                        </select>
                                    </div>
                                </div>



                                <div class="col-lg-12">
                                    <div class="send-msg-btn">
                                        {id ? (<button type='submit'>updated</button>) : (<button type='submit'>SUBMIT</button>)}

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
                                    <th>name</th>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    record.map((curElm, i) => (
                                        <tr>
                                            <td>{curElm.name}</td>
                                            <td>{curElm.id}</td>
                                            <td>{curElm.title}</td>
                                            <td>
                                                <i onClick={() => handelremove(curElm, i)} class="bi bi-trash crud"></i>
                                                <i onClick={() => handleview(curElm)} class="bi bi-eye crud"></i>
                                                <i onClick={() => handleupdate(curElm)} class="bi bi-pencil crud"></i></td>
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
