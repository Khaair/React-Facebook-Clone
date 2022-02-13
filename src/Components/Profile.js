import React from 'react';
import "../App.css";

function Profile() {
  return(
    <div>
<div className="pcontainer">
  <div className="pone" />
  <div className="ptwo">
    <div className="coverphoto">
      <button>Edit Cover Photo</button>
    </div>
    <div className="profilepicdiv">
      <div>
        <img className="dot" src="img/story1.jpg" alt="Nature" />
      </div>
      <div className="profilename">
        <h3>শেখ এম.এ খায়ের</h3>
        <p className="fivek">5k Friends</p>
        <img className src="img/profileicon08.PNG" />
      </div>
      <div className="btnAddtoStorydiv">
        <button className="btnAddtoStory1">Add to Story</button>
        <button className="btnAddtoStory2">Edit Profile</button>
      </div>
    </div>
    <div>
      <hr style={{width: '100%'}}  size={1} color="#DCE1DE" />
      <div className="profilenav">
        <ul>
          <a href="www.fb.com"><li>Home</li></a>
          <a href="www.fb.com"><li>About</li></a>
          <a href="www.fb.com"><li>Photos</li></a>
          <a href="www.fb.com"><li>Videos</li></a>
          <a href="www.fb.com"><li>Check ins</li></a>
          <a href="www.fb.com"><li>More</li></a>
          <button>...</button>
        </ul>
      </div>
      <hr style={{width: '100%'}}  size={1} color="#DCE1DE" />
    </div>
    <div className="profile-carddiv">
      <div className="profile1-card1">
        <div className="profilestatus01">
          <img className src="img/profileicon01.PNG" />
          <p>
            BSc in Computer Science &amp; Engineering at
            <span style={{color: 'black'}}>Islamic University,Bangladesh</span>
          </p>
        </div>
        <div className="profilestatus01">
          <img className src="img/profileicon01.PNG" />
          <p>
            Chief Executive Officer (CEO) &amp; Founder at
            <span style={{color: 'black'}}>E-ICT HSC &amp; Others</span>
          </p>
        </div>
        <div className="profilestatus01">
          <img className src="img/profileicon01.PNG" />
          <p>
            সভাপতি at
            <span style={{color: 'black'}}>শেরপুর জেলা ছাত্রকল্যাণ পরিষদ,ইবি</span>
          </p>
        </div>
        <div className="profilestatus01">
          <img className src="img/profileicon01.PNG" />
          <p>
            Studied Science at
            <span style={{color: 'black'}}>Sherpur Govt. College</span>
          </p>
        </div>
        <div className="profilestatus01">
          <img className src="img/profileicon02.PNG" />
          <p>
            From
            <span style={{color: 'black'}}>Sherpur, Mymensingh, Bangladesh</span>
          </p>
        </div>
        <div className="profilestatus01">
          <img className src="img/profileicon03.PNG" />
          <p>
            Single
            <span style={{color: 'black'}} />
          </p>
        </div>
        <div className="profilestatus01">
          <img className src="img/profileicon04.PNG" />
          <p>Joined September 2012</p>
        </div>
        <div className="profilestatus01">
          <img className src="img/profileicon05.PNG" />
          <p>
            Followed by
            <span style={{color: 'black'}}>238 people</span>
          </p>
        </div>
      </div>
      <div>
        <div className="profile1-card2">
          <ul>
            <li>
              <a href><i><img src="img/leftone.png" /></i><span style={{position: 'absolute', padding: '5px'}}> </span></a>
            </li>
            <li>
              <input className="input-post-section" style={{padding: '18px 1px 1px 5px'}} type="text" name placeholder="Whats on your mind,শেখ?" />
            </li>
            <button className="postbtn">Post</button>
          </ul>
          <ul>
            <li>
              <a href><i><img src="img/card2icon1.PNG" /></i><span style={{position: 'absolute', padding: '3px', color: '#3e506b'}}>
                  Live vide
                </span></a>
            </li>
          </ul>
          <ul>
            <li><a href><i><img style={{paddingLeft: '75px'}} src="img/card2icon2.PNG" /></i><span style={{position: 'absolute', padding: '3px', color: '#3e506b'}}>
                  Photo/video
                </span></a> </li>
          </ul>
          <ul>
            <li><a href><img style={{paddingLeft: '53px'}} src="img/card2icon3.PNG" /><span style={{position: 'absolute', padding: '3px', color: '#3e506b'}}>
                  Feelings/Activity
                </span></a> </li>
          </ul>
        </div>
        {/* <div class="profile1-card3">
        <h1>3</h1>
      </div> */}
        <div className="profile1-card4">
          <ul>
            <li><a href><i><img src="img/leftone.PNG" /></i> <span style={{position: 'absolute', padding: '5px', color: 'black'}}>Khairul Islam</span></a> </li>
          </ul>
          <p>হাড়ি পাতিল নিয়ে মিথ্যা সংসারের অভিনয় করতাম এই বয়সে। লতাপাতা আর ইটের গুঁড়া দিয়ে তরকারী রাঁধতাম,
            কৃত্রিম আওয়াজে তৃপ্তি নিয়ে আহার করতাম।
            ভাগ্যের কি নির্মম পরিহাস !
          </p>
          <img className="image-ahar" src="img/ahar.jpg" />
        </div>
      </div>
    </div>
  </div>
  <div className="pthree" />
</div>


    </div>
  )
}

export default Profile
