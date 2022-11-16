
import './App.css';
import { useState } from 'react';
import Form from './components/main/Form';
import { useEffect } from 'react';
import Edit from './components/Edited/Edit';
import { v4 as uuidv4 } from 'uuid';


function App(){
  const [data,setData]=useState({
    name:"",
    email:"",
  })
  // ************************* updation window varan ***********************
  const[updat,SetUpdat]=useState(false)

  //************************* allocation of olddata to the localstorage*************************
const [oldContct,setOldContact]=useState(JSON.parse(localStorage.getItem("Contact"))||[])
 
// ************************* deletion nadann kazhinj updatechytha data update avaan oru state create chythu*************************
const [temp,setTemp]=useState(false)

// ************************* value updation cheyyan *************************
const [updateData,setUpdatedate]=useState({})



// **************************************************
  const Nameid=(ev)=>{
    const value=ev.target.value
    const name=ev.target.name
  
   setData({
    ...data,
    [name]:value
   })
  }
// **************************************************

// **************************submit click**************************************************
const SubmitAction=(act)=>{
   act.preventDefault()

setOldContact([
  ...oldContct,
  {...data,
  id:uuidv4()}
])
console.log("ansers=======================>",oldContct);
}


// ************************* oldContct il epozhokke value varunnundo appozhokke useeffect work akunnu.ennit localStorage lekk value setchyth enter akunnu**************************************************
useEffect(() => {
localStorage.setItem("Contact",JSON.stringify(oldContct))

}, [oldContct])

// **************************************************delet part****************************

// const dlt=(d)=>{
//   console.log("delete=============>",d);

//  const dot=oldContct.filter(item=>{
//  return item.name!=d
//   })
  
//   console.log(dot)

// *********************************or*****************************

const dlt=(id)=>{
  console.log("delete=============>",id);

 const dot=oldContct.filter(item=>{
 return item.id!=id
  })

  console.log(dot)


  // **************************************************ippol dot il delt cheyyan pokunna value ozhich bakki ellam undakum . athine oldcontactlekk thanne eduth vakkunnu.spread operator use cheyyunilla**************************************************
  setOldContact(dot)
 
  }

//************************************************** Edited part *********************************

// const edit=(e)=>{
//   console.log("edit==========>",e);
//   const ed=oldContct.filter(edo=>{
//     return edo.name==e
//   })
// SetUpdat(true)
// setData(ed)
// console.log("ditorial========>",ed);

// }

// const editdtata=(editcall)=>{

//   console.log("editvalue=====>",editcall);
//   console.log("darta====>",data);
//   setUpdatedate(editcall)
//   dlt(data[0].name);
//    setTemp(true)
// }

// *********************************or*****************************

const edit=(id)=>{
  console.log("edit==========>",id);
  const ed=oldContct.filter(edo=>{
    return edo.id==id
  })
SetUpdat(true)
setData(ed)
console.log("ditorial========>",ed);

}

const editdtata=(editcall)=>{

  console.log("editvalue=====>",editcall);
  console.log("darta====>",data);
  setUpdatedate(editcall)
  dlt(data[0].id);
   setTemp(true)


}



// ************************************************** edit partil deletion nadann kazhinjal edit chytha value update aayi kanikkanam**************************************************
useEffect(()=>{
  if(temp==true){
  setOldContact([
    ...oldContct,
    {...updateData}
  
  ])
}
},[temp])
  
  

  return (
    <>

  {updat==true?
  <Edit  edi={data} editedValue={editdtata} />
  :<>
    <Form valueName={Nameid} action={SubmitAction}  mpg={oldContct}  deletion={dlt} edition={edit}/>
</>}
  
    </>
  );
}

export default App;
