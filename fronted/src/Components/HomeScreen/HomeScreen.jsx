import React from 'react'
import {Link} from 'react-router-dom'
import '../HomeScreen/HomeScreen.css'
function HomeScreen() {
  return (
    <div className="homeScreenLink">
      <Link to='/order'><i class="fab fa-instagram" > </i> Instagram Services</Link>
    </div>
  )
}

export default HomeScreen
