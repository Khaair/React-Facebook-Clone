import React from 'react';

import MainComponent from './MainComponent';
import RightSideBar from './RightSideBar';
import Sidebar from './Sidebar';

 function Homepage({fetch3,commentfetch,datas,commentdatas,DeleteFn}) {

  return (
    <div>
            <div className="container">
     

      <div className="two">
      <Sidebar/>
      </div>
      <div className="three">
      <MainComponent fatch4= {fetch3} commentfetch2 = {commentfetch} data2 = {datas} commentdata4={commentdatas} Delete5={DeleteFn} />
      </div>

      <div class="four">
        <RightSideBar/>
      </div>

      </div>
     
    </div>
  )
}

export default Homepage
