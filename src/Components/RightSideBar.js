import React from 'react';
import "../App.css";
function RightSideBar() {
  return (
    <div>
        <div className="four">
  <div className="four-f1-card">
    <ul>
      <li><a href><i><img alt='icon' src="img/birthday.PNG" /></i>
          <span style={{padding: 'px', color: '#3e506b'}}>
            Birthday
            <p>Mothammad Kibria and 18 others birthday today!</p>
          </span></a> </li>
    </ul>
  </div>
  <div className="four-div2">
    <ul>
      <li><a href><i><img alt='icon' src="img/four-div-2.jpg" /></i>
          <br />
          <span style={{padding: 'px', color: 'black'}}>
            <p>Gratitude to all the ABSS members for their contribution to make this event a successful one! 'Bangladeshi Night' rocks!</p>
          </span></a> </li>
    </ul>
  </div>
  <div className="four-div3">
    <div className>
      <ul>
        <li><a href><i><img alt='icon' src="img/four-div-3.jpg" /></i>
            <br />
            <span style={{textAlign: 'justify', color: 'black'}}>
              Join  our Web Development Course.
            </span></a> </li>
      </ul>
    </div>
  </div>
</div>

    </div>

  )
}

export default RightSideBar
