import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'
import { Outlet } from 'react-router-dom'
import ContactInfo from '../ContactInfo/ContactInfo'

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            <ContactInfo/>
            <Footer />
        </>
    )
}
