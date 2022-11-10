import React from 'react'
import "./Iphone.css"
import Acc3 from "../../assets/acc3.jpg"
import I14 from "../../assets/i14.jpg"
function Iphone() {
  return (
    <div className='iphone'>
        <img className='acc3' src={Acc3} alt="" />
        <div className="p">
          <p>
          Get 3% Daily Cash back with Apple Card. And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.* Learn more
          </p>
        </div>

        <div className="iphone_text">
          <h4>New</h4>
          <h2>iPhone 14</h2>
          <h1>Big and bigger</h1>
          <h3>From $33.29/mo. for 24 mo. or $799 before trade-in1</h3>
          <button className='btn'>Buy</button>
          <a href="#">Learn more</a>
          <img className='i14' src={I14} alt="" />
        </div>

    </div>
  )
}

export default Iphone