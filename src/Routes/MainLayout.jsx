import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer"
import NavbarCom from '../components/NavbarCom'

const MainLayout = () => {
    return (
        <div style={{backgroundColor:"#384336d6"}}>
            <NavbarCom />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default MainLayout
