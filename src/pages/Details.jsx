import React from 'react'

const Details = () => {
    return (
        <div>
            <section className="container pojedinacno-putovanje py-5">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="img/italija.jpg" className="w-100 rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6 d-flex flex-column">
                            <div className="card-body">
                                <h5 className="card-title">Opis putovanja</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Destinacija: Dominikana</li>
                                    <li className="list-group-item">Ocena:
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li className="list-group-item">Datum putovanja: 2.12.2022.</li>
                                    <li className="list-group-item">Cena: 2500E</li>
                                    <li className="list-group-item"><button className="btn btn-danger w-100">Rezervisi</button></li>
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