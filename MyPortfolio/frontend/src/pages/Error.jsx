import React from 'react'
import Error404 from '../components/error 404/Error404'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/navegacion/Navbar'
function Error() {
  return (
    <div>
            <Navbar/>
            <Error404/>
      <Footer/>
    </div>
  )
}

export default Error
