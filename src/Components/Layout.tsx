import React from "react"
import Navbar from "./Navbar.tsx"
import { Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout