import React from 'react'

export default function About() {
    return (
        <>
            <div className="about p-5 mt-5 mb-5 container-fluid">

                <h2 className="text-white fw-bolder text-center gy-3 pb-2">ABOUT</h2>
                <div className="About_divider">
                    <i className="fa-solid fa-star fa-xlg"></i>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-4 ">
                        <p className="p-2 text-white fs-4">
                            Freelancer is a free bootstrap theme created by Route.
                            The download includes the complete source files
                            including HTML, CSS, and JavaScript as well as optional
                            SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <p className="p-2 text-white fs-4">
                            You can create your own custom avatar for the masthead, change the icon in the dividers,
                            and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
            </div>

        </>
    )
}
