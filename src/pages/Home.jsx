import { useNavigate } from "react-router-dom"
const Home = ({ searchDest, setSearchDest, sortDest, setSortDest }) => {

    let navigate = useNavigate()

    const searchFilter = (event) => {
        event.preventDefault()

        setSearchDest(event.target.searchPlaces.value)
        navigate("traveloffers", { replace: true })

    }

    return (
        <div>
            <section className="hero text-white d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold display-5">Gde zelite da putujete?</h1>
                <p>Pretrazite nasu veliku ponudu premium putovanja</p>
                <form onSubmit={(e) => searchFilter(e)} className="row gx-3 gy-2 align-items-center container">

                    <div className="col-sm-3">
                        <input name='searchPlaces' type="text" className="form-control form-control-lg" placeholder="Destinacija" />
                    </div>

                    <div className="col-sm-3">
                        <select className="form-select form-select-lg" >
                            <option defaultValue={"Month"}>Mesec...</option>
                            <option value="1">Oktobar</option>
                            <option value="2">Novembar</option>
                            <option value="3">Decembar</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <select value={sortDest} onChange={(e) => setSortDest(e.target.value)} className="form-select form-select-lg" >
                            <option defaultValue={"Sort"} >Sortiraj...</option>
                            <option value="1">Opadajuce</option>
                            <option value="2">Rastuce</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-danger w-100 btn-lg">Pretraga</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Home