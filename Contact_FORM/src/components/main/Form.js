import React from 'react'
import Content from '../sub/Content';
import './Form.css';

export default function Form({valueName,action,mpg,deletion,edition}) {
  console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk================>",mpg);
  return (
    <>
  
 <header>
	<h1>Contact Form</h1>
</header>

<div id="firm">


<center>
<form id="waterform" method="post"onSubmit={action}>

<div class="formgroup" id="name-form">
    <label for="name">Your name*</label>
    <input type="text" id="name" name="name" onChange={valueName}  required/>
</div>

<div class="formgroup" id="email-form">
    <label for="email">Your e-mail*</label>
    <input type="email" id="email" name="email" onChange={valueName}  required />
    
</div>
<input type="submit" value="SUBMIT HERE !"  />

</form>
</center>

<Content kp={mpg} dlt={deletion} edit={edition} />
</div>
    </>
  )
}
