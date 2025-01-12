import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">


            
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item">

                                <Link className="nav-link  fw-bolder my-4 p-3 text-white " to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  fw-bolder my-4 p-3 rounded text-white" aria-current="page" to="/portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bolder my-4 p-3 text-white" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  fw-bolder my-4 p-3 text-white" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
