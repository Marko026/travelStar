import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"
import TravelContext from '../Context/TravelContext';
const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate()
    const { travelOffers, setTravelOffers } = useContext(TravelContext)

    useEffect(() => {

        if (window.location.pathname === "/") {
            document.querySelector(".navbar").classList.add("fixed-top")
            document.querySelector(".navbar").classList.remove("bg-dark")
        } else {
            document.querySelector(".navbar").classList.remove("fixed-top")
            document.querySelector(".navbar").classList.add("bg-dark")

        }
    }, [location])

    const loadAllTravelOffers = () => {
        setTravelOffers([...travelOffers])
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand text-white fw-bold fst-italic" to="/"><img src="../img/logo.png" alt="" width="50" /> TravelStar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="/" to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link text-white" onClick={() => loadAllTravelOffers()} to="traveloffers">TravelOffers</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link text-white" to="dashboard">Dashboard</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar