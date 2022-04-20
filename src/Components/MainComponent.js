import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import CardStatus from './CardStatus';
import "./MainComponents.css"

export default function MainComponent({ fatch4, commentfetch2, data2, commentdata4, Delete5 }) {

  const [like, setLike] = useState('');
  const [show, setShow] = useState("false")

  const [textColor, setTextColor] = useState('black');
  const [name, setName] = useState("");
  const [comment, setComment] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const saveData2 = (e) => {
    e.preventDefault();
    fatch4({ name });
    setName('');

  }



  const CommentSave = (e) => {
    e.preventDefault();
    commentfetch2({ comment });
    setComment('');
    console.log(comment)

  }


  const handleChnageTextColor = (e) => {


    like == '' ? setLike("You Like this") : setLike("")

    textColor == 'black' ? setTextColor('blue') : setTextColor('black')
  }

  const showhandle = () => {

    show == "false"? setShow("true") : setShow("false")


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
            <form action="" onSubmit={saveData2}>

              <input onChange={handleNameChange} value={name} name="firstname" className="input-post-section" style={{ padding: '18px 1px 1px 5px', marginBottom: "5px" }} type="text" placeholder="Whats on your mind,শেখ?" />

              <button  onClick={()=>setShow("false")} type="submit" className="postbtn">Post</button>
            </form>
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



        {data2.map((el, ind) => {
          return (
            <div className="f3-card">
              <tr key={ind}>
                <div className='status1'>
                  <ul>
                    <li><Link to="/Profile" className="ll"><a href><i><img style={{ height: "35px" }} alt='icon' src="img/statuspic.png" /></i> <span style={{ position: 'absolute', padding: '5px', color: 'black' }}>Khairul Islam</span></a> </Link> </li>
                  </ul>
                  <ul>
                    <li className='status1btn'><button onClick={showhandle}>...</button></li>
                  </ul>

                </div>

                <ul>
                  <li><p className='statuss'> {el.name}</p></li>
                </ul>

                {/* <button onClick={() => Delete5(ind)}>Delete</button> */}

                {show == "true"
                  ?
                  (
                    <div>
                      <div className="card cardd">
                        <div className="card-body">
                          <div >
                            <button className='card-button2'>Edit</button>
                            <button className='card-button2' onClick={() => Delete5(ind)}>Delete</button>
                          </div>



                        </div>
                      </div>

                    </div>
                  )
                  :
                  (
                    <p></p>
                  )}






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





                      {commentdata4.map((ele, ind) => {
                        return (
                          <div className="f3-card">
                            <tr key={ind}>
                              <ul>
                                <li><Link to="/Profile" className="ll"><a href><i><img style={{ height: "35px" }} alt='icon' src="img/statuspic.png" /></i> <span style={{ position: 'absolute', padding: '5px', color: 'black' }}>Khairul Islam</span></a> </Link> </li>
                              </ul>
                              {/* <th scope="row">{ind + 1}</th> */}
                              <ul>
                                <li className='commentt'>{ele.comment}</li>
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









        <div>


        </div>
      </div>


    </>
  )
}
