import Navbar from './Navbar'
import AboutUs from './AboutUs'
import Business from './Business'
import Privacy from './Privacy'
import TermsOfUse from './TermsOfUse'
import Community from './Community'
import Careers from './Careers'
import Newsroom from './Newsroom'
import Founders from './Founders'

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>

      <Routes>

        <Route path="/" element={<AboutUs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/community" element={<Community />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>

    </>
  )
}

export default App
