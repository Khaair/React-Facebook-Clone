import React from 'react';
import MainComponent from './MainComponent';
import RightSideBar from './RightSideBar';
import Sidebar from './Sidebar';

 function Homepage() {
  return (
    <div>
            <div className="container">
     

      <div className="two">
      <Sidebar/>
      </div>
      <div className="three">
      <MainComponent/>
      </div>

      <div class="four">
        <RightSideBar/>
      </div>

      </div>
     
    </div>
  )
}

export default Homepage
