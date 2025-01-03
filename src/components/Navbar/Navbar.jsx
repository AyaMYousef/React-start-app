import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    <a class="navbar-brand text-white fw-bolder" href="#">START REACT</a>

                    <div class="collapse navbar-collapse" id="navbarText">

                        <ul class="navbar-nav ms-auto  mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active fw-bolder my-4 p-3 rounded text-white" aria-current="page" href="#">PORTFOLIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bolder my-4 p-3 text-white" href="#">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bolder my-4 p-3 text-white" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
