import React, { Component, useState } from 'react';

import { Link } from 'react-router-dom';

import "../App.css";

function Profile({ datas, commentdatas, fetch3, DeleteFn, commentfetch }) {

  const [like, setLike] = useState('');
  const [textColor, setTextColor] = useState('black');
  const [comment, setComment] = useState('');


  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleChnageTextColor = (e) => {


    like == '' ? setLike("You Like this") : setLike("")

    textColor == 'black' ? setTextColor('blue') : setTextColor('black')
  }

  const CommentSave = (e) => {
    e.preventDefault();
    commentfetch({ comment });
    setComment('');
    console.log(comment)

  }
  return (
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
              <img alt='icon' className src="img/profileicon08.PNG" />
            </div>
            <div className="btnAddtoStorydiv">
              <button className="btnAddtoStory1">Add to Story</button>
              <button className="btnAddtoStory2">Edit Profile</button>
            </div>
          </div>
          <div>
            <hr style={{ width: '100%' }} size={1} color="#DCE1DE" />
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
            <hr style={{ width: '100%' }} size={1} color="#DCE1DE" />
          </div>
          <div className="profile-carddiv">
            <div className="profile1-card1">
              <div className="profilestatus01">
                <img alt='icon' className src="img/profileicon01.PNG" />
                <p>
                  BSc in Computer Science &amp; Engineering at
                  <span style={{ color: 'black' }}>Islamic University,Bangladesh</span>
                </p>
              </div>
              <div className="profilestatus01">
                <img alt='icon' className src="img/profileicon01.PNG" />
                <p>
                  Chief Executive Officer (CEO) &amp; Founder at
                  <span style={{ color: 'black' }}>E-ICT HSC &amp; Others</span>
                </p>
              </div>
              <div className="profilestatus01">
                <img alt='icon' className src="img/profileicon01.PNG" />
                <p>
                  সভাপতি at
                  <span style={{ color: 'black' }}>শেরপুর জেলা ছাত্রকল্যাণ পরিষদ,ইবি</span>
                </p>
              </div>
              <div className="profilestatus01">
                <img alt='icon' className src="img/profileicon01.PNG" />
                <p>
                  Studied Science at
                  <span style={{ color: 'black' }}>Sherpur Govt. College</span>
                </p>
              </div>
              <div className="profilestatus01">
                <img alt='icon' className src="img/profileicon02.PNG" />
                <p>
                  From
                  <span style={{ color: 'black' }}>Sherpur, Mymensingh, Bangladesh</span>
                </p>
              </div>
              <div className="profilestatus01">
                <img alt='icon' className src="img/profileicon03.PNG" />
                <p>
                  Single
                  <span style={{ color: 'black' }} />
                </p>
              </div>
              <div className="profilestatus01">
                <img alt='icon' className src="img/profileicon04.PNG" />
                <p>Joined September 2012</p>
              </div>
              <div className="profilestatus01">
                <img alt='icon' className src="img/profileicon05.PNG" />
                <p>
                  Followed by
                  <span style={{ color: 'black' }}>238 people</span>
                </p>
              </div>
            </div>
            <div>
              <div className="profile1-card2">
                <ul>
                  <li>
                    <a href><i><img alt='icon' src="img/leftone.PNG" /></i><span style={{ position: 'absolute', padding: '5px' }}> </span></a>
                  </li>
                  <li>
                    <input className="input-post-section" style={{ padding: '18px 1px 1px 5px' }} type="text" name placeholder="Whats on your mind,শেখ?" />
                  </li>
                  <button className="postbtn">Post</button>
                </ul>
                <ul>
                  <li>
                    <a href><i><img alt='icon' src="img/card2icon1.PNG" /></i><span style={{ position: 'absolute', padding: '3px', color: '#3e506b' }}>
                      Live video
                    </span></a>
                  </li>
                </ul>
                <ul>
                  <li><a href><i><img style={{ paddingLeft: '75px' }} alt='icon' src="img/card2icon2.PNG" /></i><span style={{ position: 'absolute', padding: '3px', color: '#3e506b' }}>
                    Photo/video
                  </span></a> </li>
                </ul>
                <ul>
                  <li><a href><img alt='icon' style={{ paddingLeft: '53px' }} src="img/card2icon3.PNG" /><span style={{ position: 'absolute', padding: '3px', color: '#3e506b' }}>
                    Feelings/Activity
                  </span></a> </li>
                </ul>
              </div>
              {datas.map((el, ind) => {
            return (
              <div className="f3-card">
                <tr key={ind}>
                  <ul>
                    <li><Link to="/Profile" className="ll"><a href><i><img style={{ height: "35px" }} alt='icon' src="img/statuspic.png" /></i> <span style={{ position: 'absolute', padding: '5px', color: 'black' }}>Khairul Islam</span></a> </Link> </li>
                  </ul>
                  {/* <th scope="row">{ind + 1}</th> */}
                  <ul>
                    <li>{el.name}</li>
                  </ul>

                  <ul>
                    <div className='fbstatus'>
                      <p>{like}</p>

                      <hr style={{ height: "0.2px", bordeWidth: "0", color: "red", backgroundColor: "gray" }}></hr>


                      <div className='likecmnt'>

                        <h4 className='likehover' style={{ color: textColor, paddingLeft: "60px", paddingRight: "60px" }} onClick={handleChnageTextColor}>
                          Like
                        </h4>

                        <h4 onClick={CommentSave} className='likehover' style={{ marginLeft: "160px", paddingLeft: "60px", paddingRight: "60px" }} >
                          Comment
                        </h4>
                      </div>

                      <hr style={{ height: "0.2px", bordeWidth: "0", color: "red", backgroundColor: "gray" }}></hr>
                      <div>
                        <input value={comment} onChange={handleCommentChange} className="input-post-section" style={{ padding: '18px 1px 1px 5px', marginBottom: "5px" }} type="text" name placeholder="Write a comment..." />
                       {commentdatas.map((ele, ind) => {
                          return (
                            <div className="f3-card">
                              <tr key={ind}>
                                <ul>
                                  <li><Link to="/Profile" className="ll"><a href><i><img style={{ height: "35px" }} alt='icon' src="img/statuspic.png" /></i> <span style={{ position: 'absolute', padding: '5px', color: 'black' }}>Khairul Islam</span></a> </Link> </li>
                                </ul>
                                {/* <th scope="row">{ind + 1}</th> */}
                                <ul>
                                  <li>{ele.comment}</li>
                                </ul>

                                {/* <td><Link to={`/edit/${ind}`}><button className="btn btn-success mright">Edit</button></Link><button onClick={() => DeleteFn(ind)} className="btn btn-danger" >Delete</button></td> */}

                              </tr>
                            </div>
                          )


                       })}
                      </div>

                    </div>
                  </ul>


                  {/* <td><Link to={`/edit/${ind}`}><button className="btn btn-success mright">Edit</button></Link><button onClick={() => DeleteFn(ind)} className="btn btn-danger" >Delete</button></td> */}

                </tr>
              </div>
            )


          })}

            </div>
          </div>
        </div>
        <div className="pthree" >

        <h1>hiiiiiii</h1>

        </div>

      </div>


    </div>
  )
}

export default Profile
