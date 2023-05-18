import React from 'react'
// import About from '../../About/About'
// import Contactus from '../../Contactus/Contactus'
// import Feedback from '../../Feedback/Feedback'
// import Footer from '../../Footer/Footer'
import Landingpage from '../Landingpage/Landingpage'
// import Method from '../Method/Method'
// import Ourservice from '../Ourservice/Ourservice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Header = () => {
  return (
   <>
    <Routes>
      <Route path="/user" element={<Landingpage/>}/>
    </Routes>
   </>
  )
}

export default Header