import Navbar from './Navbar'
import AboutUs from './AboutUs'
import Business from './Business'

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>

      <Routes>

        <Route path="/" element={<AboutUs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/navbar" element={<Navbar />} />

      </Routes>

    </>
  )
}

export default App
