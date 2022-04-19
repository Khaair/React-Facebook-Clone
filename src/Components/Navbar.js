import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <div>
      <div>
        <div className="one">

          <Link to="/" className="fouricon" >
            <img alt="icon" src="img/fblogo.PNG" />
          </Link>


          <input
            className="input01"
            type="text"
            placeholder="Search Facebook"
          />

          <Link to="/" className="fouricon" >
            <img alt='icon' className="homeicon" src="./img/home.PNG" />
          </Link>


          <Link to="/watch" className="ll">
            <img alt='icon' className="threeicon" src="img/three.PNG" />
          </Link>


          <Link to="/marketplace" className="ll">
            <img alt='icon' className="fouricon" src="img/four.PNG" />
          </Link>


          <Link to="/Groups" className="ll">
            <img alt='icon' className="fiveicon" src="img/five.PNG" />
          </Link>


          <Link to="/Gaming" className="ll">
            <img alt='icon' className="sixicon" src="img/six.PNG" />
          </Link>

          <Link to="/Profile" className="ll">
            <img alt='icon' className="sevenicon" src="img/seven.PNG" />
          </Link>

          <Link to="/Menu" className="ll">
            <img alt='icon' className="eighticon" src="img/eight.PNG" />
          </Link>






          <Link to="/Messenger" className="ll">
            <img alt='icon' className="nineicon" src="./img/nine.PNG" />
          </Link>

          <Link to="/Notification" className="ll">
            <img alt='icon' className="elevenicon" src="img/eleven.PNG" />
          </Link>

          <Link to="/Account" className="ll">
            <img alt='icon' className="tweleveicon" src="img/tweleve.PNG" />



        </Link>
          </div>
      </div>
    </div>
  )
}
export default Navbar