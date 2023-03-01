import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'
import Dashboard from './pages/Dashboard'
import TravelOffers from './pages/TravelOffers'
import NotFound from "./pages/NotFound"
import { TravelProvider } from "./Context/TravelContext"

function App() {

  const [searchDest, setSearchDest] = useState("")
  const [sortDest, setSortDest] = useState("")


  return (
    <TravelProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home searchDest={searchDest} setSearchDest={setSearchDest} sortDest={sortDest} setSortDest={setSearchDest} />} />
            <Route path="/traveloffers" element={<TravelOffers searchDest={searchDest} setSearchDest={setSearchDest} sortDest={sortDest} setSortDest={setSearchDest} />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />

          </Routes>



        </div>
      </BrowserRouter>
    </TravelProvider>
  )
}

export default App
