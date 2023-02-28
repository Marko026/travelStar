import { BrowserRouter, Routes, Route } from "react-router-dom"


import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'
import Dashboard from './pages/Dashboard'
import TravelsOffers from './pages/TravelsOffers'
import NotFound from "./pages/NotFound"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traveloffers" element={<TravelsOffers />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>



      </div>
    </BrowserRouter>
  )
}

export default App
