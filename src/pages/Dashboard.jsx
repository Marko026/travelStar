import React, { useContext, useState } from 'react'
import TravelContext from '../Context/TravelContext'

const Dashboard = () => {
    const { traveloffers, setTravelOffers } = useContext(TravelContext)

    const [destination, setDestination] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState("");
    const [date, setDateTravel] = useState("");
    const [rating, setRating] = useState(0);

    const [editMode, setEditMode] = useState({ mode: false, id: null, })


    const addTravel = (e) => {
        e.preventDefault()

        if (editMode.mode == false) {
            setTravelOffers([...traveloffers, {
                destination: destination,
                title: title,
                desc: desc,
                price: price,
                img: img,
                date: date,
                rating: rating,
            }])
        } else {
            console.log("Editing....")
        }

        setDestination("");
        setTitle("");
        setDescription("");
        setPrice(0);
        setImg("");
        setDateTravel("");
        setRating(0);

    }
    const removeTravel = (idx) => {

        let tempTrave = [...traveloffers]
        tempTrave.splice(idx, 1)
        setTravelOffers([...tempTrave])

    }
    const setEdit = (idx) => {
        setEditMode({ mode: true, id: idx })
        setDestination(traveloffers[idx].destination);
        setTitle(traveloffers[idx].title);
        setDescription(traveloffers[idx].desc);
        setPrice(traveloffers[idx].price);
        setImg(traveloffers[idx].img);
        setDateTravel(traveloffers[idx].date);
        setRating(traveloffers[idx].rating);
    }

    const finalEdit = (e) => {
        e.preventDefault();
        let id = editMode.id

        if (editMode.mode == true) {

            traveloffers[id].destination = destination
            traveloffers[id].title = title
            traveloffers[id].desc = desc
            traveloffers[id].price = price
            traveloffers[id].img = img
            traveloffers[id].date = date
            traveloffers[id].rating = rating


            setDestination("");
            setTitle("");
            setDescription("");
            setPrice(0);
            setImg("");
            setDateTravel("");
            setRating(0);

            setEditMode({ mode: false, id: null })
        }
    }

    const cancleAdd = (e) => {
        e.preventDefault()
        setDestination("");
        setTitle("");
        setDescription("");
        setPrice(0);
        setImg("");
        setDateTravel("");
        setRating(0);
    }



    return (
        <>
            <section className="bg-light py-5 text-dark d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold display-5 mb-5">Dashboard za putovanja</h1>
                <form className="row gx-3 gy-2 align-items-center container">

                    <div className="col-sm-3">
                        <input value={destination} onChange={(e) => setDestination(e.target.value)} type="text" className="form-control form-control-lg" placeholder="Destination" />
                    </div>

                    <div className="col-sm-3">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control form-control-lg" placeholder="Title" />
                    </div>

                    <div className="col-sm-3">
                        <input value={desc} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control form-control-lg" placeholder="Description" />
                    </div>

                    <div className="col-sm-3">
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" min="0" className="form-control form-control-lg" placeholder="Price" />
                    </div>

                    <div className="col-sm-3">
                        <input value={date} onChange={(e) => setDateTravel(e.target.value)} type="date" min="0" className="form-control form-control-lg" />
                    </div>

                    <div className="col-sm-3">
                        <select value={rating} onChange={(e) => setRating(e.target.value)} className="form-select form-select-lg" >
                            <option defaultValue={"Ocena"} >Rating...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <select value={img} onChange={(e) => setImg(e.target.value)} className="form-select form-select-lg" >
                            <option defaultValue={"Slika"} >Image...</option>
                            <option value="1">engleska</option>
                            <option value="italija.jpg">italija</option>
                            <option value="dominikana.jpg">dominikana</option>
                            <option value="maldivi.jpg">maldivi</option>
                            <option value="uae.jpg">uae</option>
                            <option value="indonezija.jpg">indonezija</option>
                        </select>
                    </div>

                    {editMode.mode == false
                        ?
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success btn-lg me-2" onClick={(e) => addTravel(e)} >Add</button>
                            <button type="submit" className="btn btn-danger btn-lg" onClick={(e) => cancleAdd(e)}>Cancel</button>
                        </div>
                        :
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-warning btn-lg me-2 " onClick={(e) => finalEdit(e)} >Save</button>
                            <button type="submit" className="btn btn-danger btn-lg" onClick={(e) => cancleAdd(e)}>Cancel</button>
                        </div>

                    }
                </form>
            </section>
            <section className="container spisak-putovanja py-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Slika</th>
                            <th scope="col">Odrediste</th>
                            <th scope="col">Cena</th>
                            <th scope="col">Ocena</th>
                            <th scope="col">Datum</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            traveloffers.map((travel, idx) => {
                                const { img, price, rating, date, destination, } = travel
                                return (
                                    <tr key={idx} >
                                        <th scope="row">{idx}</th>
                                        <td><img src={`../img/${img}`} alt="" width="50" /></td>
                                        <td>{destination}</td>
                                        <td>{price}</td>
                                        <td>{rating}</td>
                                        <td>{date}</td>
                                        <td><button className="btn btn-warning" onClick={() => setEdit(idx)}>Edit</button></td>
                                        <td><button className="btn btn-danger" onClick={() => removeTravel(idx)}>Delate</button></td>
                                    </tr>

                                )
                            })
                        }



                    </tbody>
                </table>
            </section>

        </>
    )
}

export default Dashboard