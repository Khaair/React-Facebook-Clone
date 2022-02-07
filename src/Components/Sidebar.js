import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";

 function Sidebar() {
  return (
    <div>
    <div className="two">
  <ul>
    <li> <Link to="/Profile" className="ll"> <a href><i><img alt='icon' src="img/leftone.PNG" /></i> <span style={{position: 'absolute', padding: '5px'}}>Khairul Islam</span></a> </Link></li>
  </ul>
  <ul>
    <li><Link to="/Friends" className="ll"><a href><i><img alt='icon' src="img/lefttwo.png" /></i> <span style={{position: 'absolute', padding: '5px'}}>Friends</span></a> </Link></li>
  </ul>
  <ul>
    <li><Link to="/Saved" className="ll"><a href><i><img alt='icon' src="img/leftthree.png" /></i><span style={{position: 'absolute', padding: '5px'}}>Saved</span> </a> </Link></li>
  </ul>
  <ul>
    <li><a href><i><img alt='icon' src="img/leftfour.png" /></i><span style={{position: 'absolute', padding: '5px'}}>Groups</span> </a> </li>
  </ul>
  <ul>
    <li><a href><i><img alt='icon' src="img/leftfive.png" /></i> <span style={{position: 'absolute', padding: '5px'}}>Groups</span> </a> </li>
  </ul>
  <ul>
    <li><a href><i><img alt='icon' src="img/leftsix.png" /></i><span style={{position: 'absolute', padding: '5px'}}>Watch</span> </a> </li>
  </ul>
  <ul>
    <li><a href><i><img alt='icon' src="img/leftseven.png" /></i><span style={{position: 'absolute', padding: '5px'}}>Memories</span> </a> </li>
  </ul>
  <ul>
    <li><a href><i><img alt='icon' src="img/lefteight.png" /></i><span style={{position: 'absolute', padding: '5px'}}>Pages</span> </a> </li>
  </ul>
  <ul>
    <li><a href><i><img alt='icon' src="img/leftnine.png" /></i><span style={{position: 'absolute', padding: '5px'}}>Events</span> </a> </li>
  </ul>
  <ul>
    <li><a href><i><img alt='icon' src="img/leftten.png" /></i><span style={{position: 'absolute', padding: '5px'}}>
          Jobs</span></a> </li>
  </ul>
</div>

    </div>
  )
}

export default Sidebar
