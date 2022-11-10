import React from 'react'
import "./Ipad.css"
import Acc2 from "../../assets/acc2.jpg"
import Ipadimg from "../../assets/ipad.jpg"
function Ipad() {
  return (
    <div className='ipad'>
      <img className='acc2' src={Acc2} alt="" />
      <div className="p">
        <p>Get 3% Daily Cash back with Apple Card. And pay for your new iPad over 12 months, interest-free when you choose to check out with Apple Card Monthly Installments.* Learn more</p>
        <div className="p2">
          <h1 className='h1'>Introducing the all‑new iPad and iPad Pro.</h1>
          <button>Watch the film</button>
        </div>
        <div className="flex">
        <div className="ipadimg">
          <img className='ipadimg_item' src={Ipadimg} alt="" />
        </div>

          <div className="flex_text">
            <h4>New</h4>
              <h1>iPad</h1>
              <h2>Lovable. Drawable.Magical.</h2>
              <h3>From $449</h3>
              <button className='btn'>Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ipad