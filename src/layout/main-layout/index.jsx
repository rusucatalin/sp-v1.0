import React from 'react'
import Header from "../../components/header/index.jsx";


const MainLayout = ({ children }) => {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <Header />
            <main className="mt-4">
                {children}
            </main>
        </div>
    )
}

export default MainLayout
