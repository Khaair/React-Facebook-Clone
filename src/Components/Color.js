import React,{ useState }  from 'react'

export default function Color() {
    const [textColor, setTextColor] = useState('black');

    const handleChnageTextColor = (e) => {
       setTextColor('#DC143C');
   }
   
   return(
   <>
   <button  onClick={handleChnageTextColor}>
   Click
   </button>
   
    <small style={{ color:textColor}} className="switch-container_text">advanced view</small>
   </>
   )
}
