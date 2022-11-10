import React from 'react'
import "./Watch.css"
import Acc4 from "../../assets/acc4.jpg"
import Logo from "../../assets/logo.png"
import Watchimg from "../../assets/watch.jpg"
function Watch() {
  return (
    <div className='watch'>
      <img className='acc4' src={Acc4} alt="" />
      <div className="p">
        <p>Get 3% Daily Cash back with Apple Card. And pay for your new Apple Watch over 24 months, interest-free when you choose to check out with Apple Card Monthly Installments.* Learn more</p>
      </div>
      <div className="watch_text">
        <img src={Logo} alt="" />
        <h1>Adventure awaits.</h1>
        <h3>$799</h3>
        <button className='btn'>Buy</button>
        <div className="a">

        <a href="#">Learn more</a>
        <a href="#">Watch the film</a>
        </div>
        <img className='watch_img' src={Watchimg} alt="" />
      </div>

    </div>
  )
}

export default Watch