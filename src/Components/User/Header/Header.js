import React from 'react'
import About from '../../About/About'
import Contactus from '../../Contactus/Contactus'
import Feedback from '../../Feedback/Feedback'
import Footer from '../../Footer/Footer'
import Landingpage from '../Landingpage/Landingpage'
import Method from '../Method/Method'
import Ourservice from '../Ourservice/Ourservice'

const Header = () => {
  return (
   <>
   <Landingpage/>
   <Ourservice/>
   <Method/>
   <Contactus/> 
   <About/>
   <Feedback/>
   <Footer/>
   </>
  )
}

export default Header