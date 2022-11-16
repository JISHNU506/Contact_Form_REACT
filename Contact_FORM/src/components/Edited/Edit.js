import React from 'react'
import './edit.css';
import { useState } from 'react';

export default function Edit(props) {

const [changeValue,setChangeValue]=useState(props.edi[0])

  console.log("popssss=====>",changeValue);
const UpdateCHange=(vl)=>{
  console.log("elvalueeeee========>",vl.target.value)
    console.log("elNameid========>",vl.target.name)
    const value=vl.target.value
    const name=vl.target.name
    console.log("snrrrrr=======>",changeValue);

    
    setChangeValue({
      ...changeValue,
      [name]:value
     })

} 

 const pass=(pa)=>{


  console.log("passssss===>",pa);
  props.editedValue(pa)
  window.location.reload();

 }


 

  return (
    <>
    <div className="login-card">
      <h2>EDIT HERE</h2>
      <h3>Enter your credentials...</h3>
      <form className="login-form">
        <input
          // spellcheck="false"
          classNameName="control"
          type="text"
          name='name'
          onChange={UpdateCHange}
          // placeholder="Username"
          value={changeValue.name}
        />
        <div className="mail">
          <input
            // spellcheck="false"
            classNameName="control"
            id="mail"
            name='email'
            type="email"
            onChange={UpdateCHange}
            // placeholder="email here"
            value={changeValue.email }
          />
          <button
            className="toggle"
            type="button"
            
          ></button>
        </div>
        <button className="control" type="button" onClick={()=>pass(changeValue)}>UPDATE</button>
      </form>
      
    </div>
    </>
  )
}