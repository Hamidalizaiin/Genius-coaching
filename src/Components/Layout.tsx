import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"


const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="container max-w-7xl mx-auto px-6 sm:px-12 xl:px-0 flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout