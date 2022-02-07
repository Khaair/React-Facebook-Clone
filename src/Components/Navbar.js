import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
 function Navbar() {
  return (
    <div>
              <div>
        <div className="one">

        <Link to="/" className="fouricon" >
        <img alt="icon" src="img/fblogo.png" />
            </Link>
          
          
          <input
            className="input01"
            type="text"
            placeholder="Search Facebook"
          />
        
            <Link to="/" className="fouricon" >
            <img alt='icon' className="homeicon" src="./img/home.png" />
            </Link>
         
         
            <Link to="/watch" className="ll">
            <img alt='icon'  className="threeicon" src="img/three.png" />
            </Link>
       
        
            <Link to="/marketplace" className="ll">
            <img alt='icon'  className="fouricon" src="img/four.png" />
            </Link>
       
         
            <Link to="/Groups" className="ll">
            <img alt='icon'  className="fiveicon" src="img/five.png" /> 
            </Link>
        
        
            <Link to="/Gaming" className="ll">
            <img alt='icon'  className="sixicon" src="img/six.png" />
            </Link>

            <Link to="/Profile" className="ll">
            <img alt='icon' className="sevenicon" src="img/seven.png" />
            </Link>

            <Link to="/Menu" className="ll">
            <img alt='icon'  className="eighticon" src="img/eight.png" />
            </Link>
          
            

            

         
            <Link to="/Messenger" className="ll">
            <img alt='icon'  className="nineicon" src="img/nine.png" />
            </Link>
        
            <Link to="/Notification" className="ll">
            <img alt='icon'  className="elevenicon" src="img/eleven.png" />
            </Link>
         
            <Link to="/Account" className="ll">
            <img alt='icon'  className="tweleveicon" src="img/tweleve.png" />
            </Link>
      
        
            
      
        </div>
      </div>
    </div>
  )
}
export default Navbar