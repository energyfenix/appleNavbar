import React from 'react'
import "./Pod.css"
import Acc5 from "../../assets/acc6.jpg"
import Dark from "../../assets/dark.jpg"
function Pod() {
  return (
    <div className='pod'>
      <img className='acc5' src={Acc5} alt="" />
      <p>Get 6 months of Apple Music free with your AirPods.* Learn more</p>
      <img className='dark' src={Dark} alt="" />
    </div>
  )
}

export default Pod