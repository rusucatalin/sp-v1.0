import React from 'react'
import MainLayout from "../../layout/main-layout/index.jsx";
import Hero from "../../components/hero/index.jsx";
import Track from "../../components/section/track.jsx";
import CarBody from "../../components/section/carBody.jsx";



const Home = () => {
    return (
        <MainLayout>
            <Hero />
            <CarBody />
            <Track />
        </MainLayout>
    )
}

export default Home
