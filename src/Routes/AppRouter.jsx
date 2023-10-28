import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import AOSAnimation from "../Animation"

const AppRouter = () => {
    return (
        <>
        <AOSAnimation />
        <Router>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/about" element={<Hero />} />
            </Routes>
            <Footer />
        </Router>
        </>
    )
}

export default AppRouter
