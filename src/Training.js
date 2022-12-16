import React from 'react';
import { FaChevronRight } from "react-icons/fa";

const Training = () => {
  return (
    <div style={{padding:'50px'}}>
          <h1>ahmed ibn hambal</h1>
      <h2>ahmed ibn hambal</h2>
      <h3>ahmed ibn hambal</h3>
      <h4>ahmed ibn hambal</h4>
      <h5>ahmed ibn hambal</h5>
      <h6>ahmed ibn hambal</h6>
      <p>ahmed ibn hambal est un homme tres severe</p>
      <h6 className="title">ahmed ibn hambal</h6>
      <h6 className="subTitle">Fusce ut est sed dolor gravida convallis</h6>
      <button className="button1">
        <p>see product</p>
      </button>
      <br />
      <br />
      <button className="button2">
        <p>see product</p>
      </button>
      <br />
      <br />
      <button className="button3">
        <p>shop</p>
        <FaChevronRight />
      </button>
      <br />
      <br />
      <form>
        <div className="formElement">
          <label>name</label>
          <input type="text" placeholder="Insert your name" />
        </div>
        <br />
        <br />
        <div className="formElement error">
          <label className="textContainer">name</label>
          <p className="errorMessage">Wrong Format</p>
          <input type="text" placeholder="Insert your name" />
        </div>
        <br />
        <br />
        <div class="radioContainer">
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
          <label>e-Money</label>
        </div>
      </form>
    </div>
  )
}

export default Training