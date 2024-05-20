import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <header>
        <div class="header-main">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-2">
                        <div class="logo">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt=""/>
                            <h4>React</h4>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="nav-heading">
                                    <ul>
                                        <li>Docs</li>
                                        <li>Tutorial</li>
                                        <li>Blog</li>
                                        <li>Community</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="search-box">
                            <i class="bi bi-search"></i>
                            <input type="text" name="" placeholder="Search" id=""/>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="links">
                        <ul>
                            <li>v18.2.0</li>
                            <li><i class="bi bi-translate"></i> Login</li>
                           
                            <li><Link class="nav-bar-links" to="/formik">Sign Up</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
