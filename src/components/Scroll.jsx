import React from 'react'
import { Link } from 'react-router-dom'
import Blogs from './Blogs'

export default function Scroll() {
    return (
        <>


            <div class="scroll">
                <ul>
                    <li><Link class="link-css" to="/hello">HELLO MESSAGE</Link></li>
                    <li><Link class="link-css" to="/blogs">BLOGS</Link></li>
                    <li><Link class="link-css" to="/emp">EMPLOYEE</Link></li>
                    <li><Link class="link-css" to="/counter">COUNTER</Link></li>
                    <li><Link class="link-css" to="/use-context">USE CONTEXT</Link></li>
                    <li><Link class="link-css" to="/use-reducer">USE REDUCER</Link></li>
                    <li><Link class="link-css" to="/use-reducer-by-me">USE REDUCER BY ME</Link></li>
                    <li><Link class="link-css" to="/calculator">BASIC CALCULATOR</Link></li>
                </ul>
            </div>


        </>
    )
}
