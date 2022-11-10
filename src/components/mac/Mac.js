import React from 'react'
import "./Mac.css"
import Acc from "../../assets/acc.jpg"
import macair from "../../assets/macair.jpg"
function Mac() {
  return (
    <div className='mac'>
        <img className='acc' src={Acc} alt="" />
        <div className="p">

        <p>Get 3% Daily Cash back with Apple Card. And pay for your new Mac over 12 months, interest‑free when you choose to check out with Apple Card Monthly Installments.* Learn more</p>
        </div>

        <div className="macair">
          <h4>New</h4>
          <h1>MacBook Air</h1>
          <h2>Don’t take it lightly.</h2>
          <p>From $1199</p>
          <button className='btn'>Buy</button>
          <a href="#">Learn more </a>
          <br />
        <img className='macimg' src={macair} alt="" />

        </div>
    </div>
  )
}

export default Mac