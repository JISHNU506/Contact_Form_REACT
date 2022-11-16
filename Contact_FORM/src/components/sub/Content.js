import React from 'react'
import './Content.css';
import {AccountCircle}from '@mui/icons-material';
import {Delete} from '@mui/icons-material';
import {BorderColor} from '@mui/icons-material';


export default function Content(props) {
console.log("kp==================>",props.kp);
  return (
    <>
<div class="flex-container" id='ko'>
{props.kp.map(itm=>(
<>
{console.log("logggggggggggggggg======>",props.kp)}
<div class="flex-container" id='kkp'>
  

  <div  id='klm'><h2><AccountCircle style={{fontSize:"40px"}}/></h2></div>
  <div  id='klm'><h2>{itm.name}</h2></div>
  <div  id='klm'><h2>{itm.email}</h2></div> 

   {/* <div  id='klm2'  onClick={()=>props.edit(itm.name)}><h2><BorderColor style={{fontSize:"40px"}}/></h2></div>
   <div  id='klm1'  onClick={()=>props.dlt(itm.name)}><h2><Delete style={{fontSize:"40px"}}/></h2></div> */}

   <div  id='klm2'  onClick={()=>props.edit(itm.id)}><h2><BorderColor style={{fontSize:"40px"}}/></h2></div>
   <div  id='klm1'  onClick={()=>props.dlt(itm.id)}><h2><Delete style={{fontSize:"40px"}}/></h2></div>
   
   </div> 
</>
  
  ))}   


</div>
    </>
  )
}
