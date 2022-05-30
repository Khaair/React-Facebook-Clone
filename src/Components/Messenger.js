import { useState,useEffect } from "react";
import React, { Component }  from 'react';
import UserDataService from "../services/facebook.services"

function Messenger({id,setUserId}) {

  const [post,setPost]=useState('');
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newBook = {
     post
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
      console.log(err)
    }

  
  };  


  // const editHandler = async () => {
  //   try {
  //     const docSnap = await UserDataService.getUser(id);
  //     console.log("the record is :", docSnap.data());
  //     setName(docSnap.data().name);
  //     setEmail(docSnap.data().email);
  //     setAddress(docSnap.data().address);
  //   } catch (err) {
  //   }
  // };


  // useEffect(() => {
  //   console.log("The id here is : ", id);
  //   if (id !== undefined && id !== "") {
  //     editHandler();
  //   }
  // }, [id]);
  return(
    <div>
       
    <div className='container'>
    <form action="">
    <div className="form-group mt-5 ">
    <label htmlFor="">Enter Post</label>
    <input className="form-control" value={post} onChange={(e)=>setPost(e.target.value)} style={{margin:"12px"}} placeholder="Enter post"/>
    </div>

        <button className="btn btn-primary mt-3" type="button" onClick={handleSubmit} >Save</button>
    </form>

    </div>
   
  
    </div>
  )
}

export default Messenger
