import React from 'react'

export default function Contact() {
    return (
        <>
        <h2 class="gy-3 text-center  fw-bolder">CONTACT </h2>
            <div className="container">
                <h2 className="fw-bolder text-white text-center">contact me</h2>
                <div className="Contact_divider__RVSE3">
                    <i className="fa-solid fa-star fa-xlg"></i>
                </div><div className="row">
                    <div className="col-lg-8 mx-auto mt-5">
                        <div><div className="form-group ">
                            <input type="text" placeholder="Name" class="p-3 mb-3  fw-bolder border-none width-100 form-control" />
                        </div>
                        <div className="form-group ">
                                <input type="email" placeholder="Email Address" class="p-3 mb-3  fw-bolder border-none width-100 form-control" />
                            </div>
                            <div className="form-group ">
                                <input type="tel" placeholder="Phone Number" class="p-3 mb-3 fw-bolder  border-none width-100 form-control" />
                            </div>
                            <div className="form-group ">
                                <textarea className="form-control  fw-bolder" placeholder="Message" spellcheck="false">
                                </textarea>
                                </div>
                                <input type="submit" className="btn btn-primary  p-3 fw-bolder mt-3 btn-submit border-0" value="submit" />
                           
                        </div>
                    </div></div></div>
        </>
    )
}
