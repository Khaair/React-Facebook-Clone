
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditStatus(props) {
    let {id}=useParams();
    let history=useNavigate();
    console.log(id,'iddd',props.datas)
     const [name, setName] = useState("");



 useEffect(()=>{
    let element=props.datas[id];
    setName(element.name);
   

 },[])

 const handleNameChange = (e) => {
   setName(e.target.value)
 }


    
   
     const editData = (e) => {
       e.preventDefault();
      props.UpdateData({id,name});
      setName('');
     
      history('/')
   }
 return(
  <div className="editcardd">
  <div className="card-body"> 
   <div className='editstatus1container'>
   <form  onSubmit={editData}>

   <div className="editstatus1">
   <li><Link to="/Profile" className="ll"><a href><i><img style={{ height: "35px" }} alt='icon' src="img/statuspic.png" /></i> <span style={{ position: 'absolute', padding: '5px', color: 'black' }}>Khairul Islam</span></a> </Link> </li>

   <input className='editstatus1input' onChange={handleNameChange} value={name} name="firstname" type="text"  id="" placeholder="Edit Your Status" />
   </div>

   <button type="submit" className="editstatus1btn">Update</button>
   </form>

   </div>
   </div>
   </div>
 )
}

export default EditStatus