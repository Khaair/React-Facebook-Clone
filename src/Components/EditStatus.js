
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
   <div className='container'>
   <form  onSubmit={editData}>

   <div className="form-group mt-5 ">
   <label htmlFor="">Enter Name</label>
   <input onChange={handleNameChange} value={name} name="firstname" type="text" className="form-control" id="" placeholder="Name" />
   </div>

  

   <button type="submit" className="btn btn-primary mt-3">Update</button>
   </form>

   </div>
 )
}

export default EditStatus