import React from 'react'
import { Link } from 'react-router-dom'
import Blogs from '../Blogs/Blogs'

export default function Scroll() {
    return (
        <>


            <div class="scroll">
                <ul>
                    <li><Link class="link-css" to="/">HOME</Link></li>
                    <li><Link class="link-css" to="/blogs">BLOGS</Link></li>
                    <li><Link class="link-css" to="/emp">EMPLOYEE</Link></li>
                    <li><Link class="link-css" to="/counter">COUNTER</Link></li>
                    <li><Link class="link-css" to="/use-context">USE CONTEXT</Link></li>
                    <li><Link class="link-css" to="/use-reducer">USE REDUCER</Link></li>
                    <li><Link class="link-css" to="/use-reducer-by-me">USE REDUCER BY ME</Link></li>
                    <li><Link class="link-css" to="/calculator">BASIC CALCULATOR</Link></li>
                    <li><Link class="link-css" to="/input">INPUT</Link></li>
                    <li><Link class="link-css" to="/simple-input">SIMPLE INPUT</Link></li>
                    <li><Link class="link-css" to="/signup-adv">INPUT ADVANCE</Link></li>
                    <li><Link class="link-css" to="/adv-counter">COUNTER ADVANCE</Link></li>
                    <li><Link class="link-css" to="/get-list">GET LIST API</Link></li>
                    <li><Link class="link-css" to="/post-app">POST API</Link></li>
                    <li><Link class="link-css" to="/my-api">MY GET API</Link></li>
                    <li><Link class="link-css" to="/my-post-api">MY POST API WITH FORMIK</Link></li>
                    <li><Link class="link-css" to="/post-put">POST PUT API</Link></li>
                    <li><Link class="link-css" to="/form-adv">FORM ADVANCE</Link></li>
                    <li><Link class="link-css" to="/formik-api">FORMIK API</Link></li>
                    <li><Link class="link-css" to="/fullstack">FULL STACK</Link></li>
                    <li><Link class="link-css" to="/fullstack-form">FULL STACK FORM</Link></li>
                    <li><Link class="link-css" to="/signup-fullstack">SIGN UP FULL STACK</Link></li>
                </ul>
            </div>


        </>
    )
}
