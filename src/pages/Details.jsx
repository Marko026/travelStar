import React, { useContext } from 'react'
import TravelContext from '../Context/TravelContext'
import { useParams } from 'react-router-dom'

const Details = ({ filtredTravel }) => {

    const { traveloffers, setTravelOffers } = useContext(TravelContext)
    let params = useParams()



    const stars = []
    for (let i = 1; i <= traveloffers[params.id].rating; i++) {
        stars.push(<i className="bi bi-star-fill" key={i}></i>)
    }
    return (
        <div>
            <section className="container pojedinacno-putovanje py-5">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={`../img/${traveloffers[params.id].img}`} className="w-100 rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6 d-flex flex-column">
                            <div className="card-body">
                                <h5 className="card-title">Opis putovanja</h5>
                                <p className="card-text">
                                    {traveloffers[params.id].desc}
                                </p>
                            </div>
                            <div className="card-footer">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Destinacija:{traveloffers[params.id].destination}</li>
                                    <li className="list-group-item">Ocena:
                                        {stars}
                                    </li>
                                    <li className="list-group-item">Datum putovanja:{traveloffers[params.id].date} </li>
                                    <li className="list-group-item">Cena: {traveloffers[params.id].price}E</li>
                                    <li className="list-group-item">
                                        <button className="btn btn-danger w-100">Rezervisi</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Details