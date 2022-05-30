import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import CardStatus from "./CardStatus";
import EditStatus from "./EditStatus";
import "./MainComponents.css";
import UserDataService from "../services/facebook.services";
import Comment from "./Comment";


export default function MainComponent() {
  const [like, setLike] = useState("");
  const [show, setShow] = useState("false");
  const [editshow, setEditshow] = useState("false");

  const [textColor, setTextColor] = useState("black");
  const [post, setPost] = useState("");
  const [userId, setUserId] = useState("");

  const [comment, setComment] = useState("");

  let id = userId

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      post,
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await UserDataService.updateUser(id, newBook);
        setUserId("");
      } else {
        await UserDataService.addUsers(newBook);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    console.log(data.docs);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await UserDataService.deleteUser(id);
    getUsers();
  };


  const getUserIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setUserId(id);
  };

  
  const editHandler = async () => {
    try {
      const docSnap = await UserDataService.getUser(id);
      console.log("the record is :", docSnap.data());
      setPost(docSnap.data().post);
    
    } catch (err) {
    }
  };


  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  const handleChnageTextColor = (e) => {
    like == "" ? setLike("You Like this") : setLike("");

    textColor == "black" ? setTextColor("blue") : setTextColor("black");
  };

  const showhandle = () => {
    show == "false" ? setShow("true") : setShow("false");
  };

  const Editshowhandle = () => {
    editshow == "false" ? setEditshow("true") : setEditshow("false");
  };

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
            <li>
              <a href>
                <i>
                  <img
                    style={{ height: "40px" }}
                    alt="icon"
                    src="img/statuspic.png"
                  />
                </i>
                <span style={{ position: "absolute", padding: "5px" }}></span>
              </a>{" "}
            </li>
            <form action="" onSubmit={handleSubmit}>
              <input
                className="input-post-section"
                style={{ padding: "18px 1px 1px 5px", marginBottom: "5px" }}
                type="text"
                placeholder="Whats on your mind,শেখ?"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />

              <button onClick={getUsers} type="submit" className="postbtn">
                Post
              </button>
            </form>
          </ul>
          <ul>
            <li>
              <a href>
                <i>
                  <img alt="icon" src="img/card2icon1.PNG" />
                </i>
                <span
                  style={{
                    position: "absolute",
                    padding: "3px",
                    color: "#3e506b",
                  }}
                >
                  Live video
                </span>
              </a>{" "}
            </li>
          </ul>
          <ul>
            <li>
              <a href>
                <i>
                  <img
                    alt="icon"
                    style={{ paddingLeft: "75px" }}
                    src="img/card2icon2.PNG"
                  />
                </i>
                <span
                  style={{
                    position: "absolute",
                    padding: "3px",
                    color: "#3e506b",
                  }}
                >
                  Photo/video
                </span>
              </a>{" "}
            </li>
          </ul>
          <ul>
            <li>
              <a href>
                <img
                  alt="icon"
                  style={{ paddingLeft: "53px" }}
                  src="img/card2icon3.PNG"
                />
                <span
                  style={{
                    position: "absolute",
                    padding: "3px",
                    color: "#3e506b",
                  }}
                >
                  Feelings/Activity
                </span>
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="f2-card">
          <ul>
            <li>
              <a href>
                <img
                  alt="icon"
                  style={{ padding: "0px 0px 10px 4px" }}
                  src="img/create-room-icon.PNG"
                />
                <span
                  style={{
                    position: "absolute",
                    padding: "0px",
                    color: "#3e506b",
                  }}
                >
                  Create Room
                </span>
              </a>{" "}
            </li>
          </ul>
          <ul>
            <li>
              <a href>
                <img
                  alt="icon"
                  style={{ paddingLeft: "80px" }}
                  src="img/create-room-icon1.PNG"
                />
                <span style={{ position: "absolute", color: "#3e506b" }}></span>
              </a>{" "}
            </li>
          </ul>
          <ul>
            <li>
              <a href>
                <img
                  alt="icon"
                  style={{ paddingLeft: "0px" }}
                  src="img/create-room-icon2.PNG"
                />
                <span style={{ position: "absolute", color: "#3e506b" }}></span>
              </a>{" "}
            </li>
          </ul>
          <ul>
            <li>
              <a href>
                <img
                  alt="icon"
                  style={{ paddingLeft: "0px" }}
                  src="img/create-room-icon3.PNG"
                />
                <span
                  style={{
                    position: "absolute",
                    padding: "px",
                    color: "#3e506b",
                  }}
                ></span>
              </a>{" "}
            </li>
          </ul>
          <ul>
            <li>
              <a href>
                <img
                  alt="icon"
                  style={{ paddingLeft: "0px" }}
                  src="img/create-room-icon5.PNG"
                />
                <span
                  style={{
                    position: "absolute",
                    padding: "px",
                    color: "#3e506b",
                  }}
                ></span>
              </a>{" "}
            </li>
          </ul>
        </div>

        {data.map((doc, index) => {
          return (
            <div className="f3-card">
              <tr key={index}>
                <div className="status1">
                  <ul>
                    <li>
                      <Link to="/Profile" className="ll">
                        <a href>
                          <i>
                            <img
                              style={{ height: "35px" }}
                              alt="icon"
                              src="img/statuspic.png"
                            />
                          </i>{" "}
                          <span
                            style={{
                              position: "absolute",
                              padding: "5px",
                              color: "black",
                            }}
                          >
                            Khairul Islam
                          </span>
                        </a>{" "}
                      </Link>{" "}
                    </li>
                  </ul>
                  <ul>
                    <li className="status1btn">
                      <button onClick={showhandle}>...</button>
                    </li>
                  </ul>
                </div>

                <ul key={doc.id}>
                
                  <li>
                    <p className="statuss"> {doc.post}</p>
                  </li>
                </ul>

                {/* <button onClick={() => Delete5(ind)}>Delete</button> */}

                {show == "true" ? (
                  <div>
                    <div className="card cardd">
                      <div className="card-body">
                        <div>
                        <button
                    variant="secondary"       
                    className="edit"
                    onClick={(e) => getUserIdHandler(doc.id)}
                  >
                    Edit
                  </button>
                
                          <button
                            variant="danger"
                            className="delete"
                            onClick={(e) => deleteHandler(doc.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}

                {editshow == "true" && <EditStatus />}

                <ul>
                  <div className="fbstatus">
                    <p>{like}</p>

                    <hr
                      style={{
                        height: "0.2px",
                        bordeWidth: "0",
                        color: "red",
                        backgroundColor: "gray",
                      }}
                    ></hr>

                    <div className="likecmnt">
                      <h4
                        className="likehover"
                        style={{
                          color: textColor,
                          paddingLeft: "60px",
                          paddingRight: "60px",
                        }}
                        onClick={handleChnageTextColor}
                      >
                        Like
                      </h4>

                      <h4
                        // onClick={CommentSave}
                        className="likehover"
                        style={{
                          marginLeft: "160px",
                          paddingLeft: "60px",
                          paddingRight: "60px",
                        }}
                      >
                        Comment
                      </h4>
                    </div>

                    <hr
                      style={{
                        height: "0.2px",
                        bordeWidth: "0",
                        color: "red",
                        backgroundColor: "gray",
                      }}
                    ></hr>
                   

                    <Comment/>
                  </div>
                </ul>

              </tr>
            </div>
          );
        })}

        <div></div>
      </div>
    </>
  );
}
