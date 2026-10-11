import Navbar from './Navbar'
import AboutUs from './AboutUs'
import Business from './Business'
import Privacy from './Privacy'
import TermsOfUse from './TermsOfUse'

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>

      <Routes>

        <Route path="/" element={<AboutUs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

      </Routes>

    </>
  )
}

export default App
