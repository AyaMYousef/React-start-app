import React from 'react'

export default function ContactInfo() {
    return (
        <>
            <div className="footer pt-4 pb-4 mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mt-5">
                            <div className="location">
                                <h4 className="h3 fw-bolder mb-4 text-white">Location</h4>
                                <p className="text-white">2215 John Daniel Drive <br />Clark, MO 65243</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5">
                            <div className="links">
                                <h4 className="h3 fw-bolder mb-5 text-white">Around the web</h4>
                                <ul className="d-flex justify-content-center list-unstyled">
                                    <li className="mx-2 d-flex justify-content-center align-items-center">
                                        <a href="#">
                                            <i className="fa-brands  fa-facebook-f"></i>
                                        </a></li>
                                    <li className="mx-2 d-flex justify-content-center align-items-center">
                                        <a href="#"><i className="fa-brands  fa-twitter"></i></a>
                                    </li><li class="mx-2 d-flex justify-content-center align-items-center">
                                        <a href="#"><i className="fa-brands  fa-linkedin-in">
                                        </i></a></li>
                                    <li className="mx-2 d-flex justify-content-center align-items-center">
                                        <a href="#"><i className="fa-brands fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-5">
                            <h4 class="h3 fw-bolder mb-4 text-white">About freelancer</h4>
                            <p class="fw-bolder text-white">
                                Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
