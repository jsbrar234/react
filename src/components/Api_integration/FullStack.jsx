

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'

export default function Fullstack() {

    const url = "https://jsonplaceholder.typicode.com/users"
    


    

     const [add, setAdd] = useState({
        name: '',
        age: " "
    })



    const handleChange = (e) => {
        const value = e.target.value;
        setAdd({
            ...add,
            [e.target.name]: value
        });
    };
     const [ newd, setNewd ]= useState("")
     


    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            age: add?.age,
            name: add?.name
        };
        axios.post("http://localhost:3000", body).then((response) => {
            console.log("response" , response);
            alert("data added ")
            setNewd(response?.data)
        }).catch((err) => {
            console.log("ERROR : ", err)
        });
    };

    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3">
                    <Scroll />
                </div>
                <div class="col-lg-9">
                    <div>
                        <h1>Login Account</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">
                                Name
                                <input
                                    type="text"
                                    name="name"
                                    // value={add.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="password">
                                Age
                                <input
                                    type="number"
                                    name="age"
                                    // value={add.age}
                                    onChange={handleChange}
                                />
                            </label>
                            
                            <button type="submit">Add</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
