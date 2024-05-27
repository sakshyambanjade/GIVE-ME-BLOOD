import React from 'react'
import Navbar from '../Components/Navbar'
import Flex from '../Components/vflex'
import Testimonial from '../Components/testimonial'
import Quotes from '../Components/quotes'
import Form from '../Components/form'
function Donate() {
  return (
    <>
    <div className="navbar"> <Navbar/></div>
   <div className="Testimonial"><Testimonial/></div>
   <div className="quotes"><Quotes/></div>
   <div className="form"><Form/></div>
   
    </>
  )
}

export default Donate