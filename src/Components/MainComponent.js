import React, { Component,useState }  from 'react';
import { Link } from "react-router-dom";
import "../App.css";

function MainComponent() {

  const [status, setStatus] = useState('');
  const [nstatus, setNstatus] = useState('');
  const [like, setLike] = useState('');


 
  const handleNameChange = (e) => {
    setStatus(e.target.value)
  }

  const sendDatatoApp = (e) => {
    setNstatus(status)
   
  }


  const HandleLike = (e) => {
    setLike("You Like this")
   
  }
  
  return (
    <>
     
        <div className="three">
          <div className="container2">
            <div className="story1">
              <img src="img/story1.jpg" alt="Nature" className="responsive" />
            </div>
            <div className="story2">
              <img src="img/story2.jpg" alt="Nature" className="responsive" />
            </div>
            <div className="story3">
              <img src="img/story3.jpg" alt="Nature" className="responsive" />
            </div>
            <div className="story4">
              <img src="img/story4.jpg" alt="Nature" className="responsive" />
            </div>
            <div className="story5">
              <img src="img/story5.jpg" alt="Nature" className="responsive" />
            </div>
            <div className="story6">
              <img src="img/story6.jpg" alt="Nature" className="responsive" />
            </div>
          </div>
          <div className="f1-card">
            <ul>
              <li><a href><i><img style={{ height: "40px" }} alt='icon' src="img/statuspic.png" /></i><span style={{ position: 'absolute', padding: '5px' }}>
              </span></a> </li>
              <li>
                <input value={status} onChange={handleNameChange} className="input-post-section" style={{ padding: '18px 1px 1px 5px', marginBottom: "5px" }} type="text" name placeholder="Whats on your mind,শেখ?" />
              </li>
              <button onClick={sendDatatoApp} className="postbtn">Post</button>
            </ul>
            <ul>
              <li><a href><i><img alt='icon' src="img/card2icon1.PNG" /></i><span style={{ position: 'absolute', padding: '3px', color: '#3e506b' }}>
                Live video
              </span></a> </li>
            </ul>
            <ul>
              <li><a href><i><img alt='icon' style={{ paddingLeft: '75px' }} src="img/card2icon2.PNG" /></i><span style={{ position: 'absolute', padding: '3px', color: '#3e506b' }}>
                Photo/video
              </span></a> </li>
            </ul>
            <ul>
              <li><a href><img alt='icon' style={{ paddingLeft: '53px' }} src="img/card2icon3.PNG" /><span style={{ position: 'absolute', padding: '3px', color: '#3e506b' }}>
                Feelings/Activity
              </span></a> </li>
            </ul>
          </div>
          <div className="f2-card">
            <ul>
              <li><a href><img alt='icon' style={{ padding: '0px 0px 10px 4px' }} src="img/create-room-icon.PNG" /><span style={{ position: 'absolute', padding: '0px', color: '#3e506b' }}>
                Create Room
              </span></a> </li>
            </ul>
            <ul>
              <li><a href><img alt='icon' style={{ paddingLeft: '80px' }} src="img/create-room-icon1.PNG" /><span style={{ position: 'absolute', color: '#3e506b' }}>
              </span></a> </li>
            </ul>
            <ul>
              <li><a href><img alt='icon' style={{ paddingLeft: '0px' }} src="img/create-room-icon2.PNG" /><span style={{ position: 'absolute', color: '#3e506b' }}>
              </span></a> </li>
            </ul>
            <ul>
              <li><a href><img alt='icon' style={{ paddingLeft: '0px' }} src="img/create-room-icon3.PNG" /><span style={{ position: 'absolute', padding: 'px', color: '#3e506b' }}>
              </span></a> </li>
            </ul>
            <ul>
              <li><a href><img alt='icon' style={{ paddingLeft: '0px' }} src="img/create-room-icon5.PNG" /><span style={{ position: 'absolute', padding: 'px', color: '#3e506b' }}>
              </span></a> </li>
            </ul>
          </div>
          <div className="f3-card">
            <ul>
              <li><Link to="/Profile" className="ll"><a href><i><img style={{ height: "35px" }} alt='icon' src="img/statuspic.png" /></i> <span style={{ position: 'absolute', padding: '5px', color: 'black' }}>Khairul Islam</span></a> </Link> </li>
            </ul>

           
            <p>
            {nstatus}
            </p>
            
            <div>
              <p>{like}</p>
            <button onClick={HandleLike} >Like</button>
            </div>
          </div>
        </div>

    
    </>
  )
}

export default MainComponent
