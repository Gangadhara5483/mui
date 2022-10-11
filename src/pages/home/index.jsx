import React from 'react'
import DashBoard from '../../components/dashboard'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <div>
       <div className={{display:"flex"}}>
       <Navbar />
       <DashBoard />
    
       </div>
       
    </div>
  )
}

export default Home