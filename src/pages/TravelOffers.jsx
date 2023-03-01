import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import TravelContext from '../Context/TravelContext'
import { Link } from "react-router-dom"
import filter from '../utility/Filter'



const TravelOffers = ({ searchDest, setSearchDest, sortDest, setSortDest }) => {

    const { traveloffers, setTravelOffers } = useContext(TravelContext)
    const [filtredTravel, setFiltredTravel] = useState([])



    useEffect(() => {

        let temp = filter(searchDest, traveloffers, sortDest);
        setFiltredTravel([...temp])
    }, [])

    const searchFilter = (e) => {
        e.preventDefault()

        let temp = filter(searchDest, traveloffers, sortDest);
        setFiltredTravel([...temp])

    }


    return (
        <>
            <section className="bg-light py-5 text-dark d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold display-5">Gde zelite da putujete?</h1>
                <p>Pretrazite nasu veliku ponudu premium putovanja</p>
                <form onSubmit={(e) => searchFilter(e)} className="row gx-3 gy-2 align-items-center container">

                    <div className="col-sm-3">
                        <input value={searchDest} onChange={(e) => setSearchDest(e.target.value)} type="text" className="form-control form-control-lg" placeholder="Destinacija" />
                    </div>

                    <div className="col-sm-3">
                        <select className="form-select form-select-lg" >
                            <option defaultValue={"Mesec"} >Mesec...</option>
                            <option value="1">Oktobar</option>
                            <option value="2">Novembar</option>
                            <option value="3">Decembar</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <select value={sortDest} onChange={(e) => setSortDest(e.target.value)} className="form-select form-select-lg" >
                            <option defaultValue={"Sortitaj"}>Sortiraj...</option>
                            <option value="1">Opadajuce</option>
                            <option value="2">Rastuce</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-danger w-100 btn-lg">Pretraga</button>
                    </div>
                </form>
            </section>

            <section className="container pregled-putovanja py-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {filtredTravel.map((travel, idx) => {
                        const { img, destination, price, date } = travel

                        const stars = []
                        for (let i = 1; i <= travel.rating; i++) {
                            stars.push(<i className="bi bi-star-fill" key={i}></i>)
                        }

                        return (

                            <div className="col" key={idx}>
                                <div className="card h-100">
                                    <img src={`../img/${img}`} className="card-img-top" alt="..." />
                                    <div className="card-footer">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Destinacija: {destination}</li>
                                            <li className="list-group-item">
                                                Ocena:
                                                {stars}
                                            </li>
                                            <li className="list-group-item">Datum putovanja: {date}</li>
                                            <li className="list-group-item">Cena: {price}E</li>
                                        </ul>
                                    </div>
                                    <Link className="btn btn-danger m-2" to={`/details/${idx}`}>Detaljnije</Link>
                                </div>
                            </div>
                        )
                    })}






                </div>
            </section>
        </>
    )
}

export default TravelOffers