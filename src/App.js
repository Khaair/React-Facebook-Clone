import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./Components/Account";
import Events from "./Components/Events";
import Friends from "./Components/Friends";
import Gaming from "./Components/Gaming";
import Groups from "./Components/Groups";
import Homepage from "./Components/Homepage";
import Jobs from "./Components/Jobs";
import MainComponent from "./Components/MainComponent";
import Marketplace from "./Components/Marketplace";
import Memories from "./Components/Memories";
import Menu from "./Components/Menu";
import Messenger from "./Components/Messenger";
import Navbar from "./Components/Navbar";
import Notification from "./Components/Notification";
import Pages from "./Components/Pages";
import Profile from "./Components/Profile";
import Saved from "./Components/Saved";
import Watch from "./Components/Watch";

function App() {

  const [data2,setData2]=useState([]);
  const [commentdata,setCommentdata]=useState([]);


  const FetchData2=(values2)=>{
  setData2([...data2,values2]);
  }

  const CommentFetchData=(values)=>{
    setCommentdata([...commentdata,values]);
    }

 
  const Delete=(id)=>{
    
    let deletedData=data2.filter((eld,indd)=> indd!==id);
    setData2(deletedData);
    
  
  }
  

  
  return (
    <div>

     
      <Navbar/>

      <Routes>
        <Route path="/" element={<Homepage datas={data2}  commentdatas={commentdata} DeleteFn={Delete} fetch3={FetchData2} commentfetch={CommentFetchData} />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/Profile" element={<Profile datas={data2}  commentdatas={commentdata} DeleteFn={Delete} fetch3={FetchData2} commentfetch={CommentFetchData}  />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Messenger" element={<Messenger />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/Saved" element={<Saved />} />
        <Route path="/Memories" element={<Memories />} /> 
        <Route path="/Pages" element={<Pages />} /> 
        <Route path="/Events" element={<Events />} />
        <Route path="/Jobs" element={<Jobs />} />
        
      </Routes>
    </div>
  );
}

export default App;
