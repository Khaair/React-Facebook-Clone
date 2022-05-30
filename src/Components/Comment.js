import React, { Component, useState, useEffect } from "react";
import UserDataService from "../services/comment.services";
import { Link } from "react-router-dom";

export default function Comment({ id, setUserId }) {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);

  const getComments = async () => {
    const data = await UserDataService.getAllComment();
    console.log(data.docs);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      comment,
    };
    console.log(newComment);

    try {
      if (id !== undefined && id !== "") {
        await UserDataService.updateUser(id, newComment);
        setUserId("");
      } else {
        await UserDataService.addComment(newComment);
      }
      getComments();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (id) => {
    await UserDataService.deleteComment(id);
    getComments();
  };

  return (
    <div>
      <div>
        <input
          className="input-post-section"
          style={{
            padding: "18px 1px 1px 5px",
            marginBottom: "5px",
          }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter comment"
        />

        <button onClick={handleSubmit}>Comment</button>
      </div>

      {data.map((doc, index) => {
        return (
          <tr key={doc.id}>
            <th scope="row"></th>
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
            
            <li>
                <p>{doc.comment}</p>
                <button
                variant="danger"
                className="delete"
                onClick={(e) => deleteHandler(doc.id)}
              >
                Delete
              </button>
            </li>
            <br></br>
            <br></br>

            <td>
              {/* <button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBookId(doc.id)}
                  >
                    Edit
                  </button> */}

            
            </td>
          </tr>
        );
      })}
    </div>
  );
}
