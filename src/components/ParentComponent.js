import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";


function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(true);
  const [gender, setGender] = useState("male");
  function handleGenderChange(event) {
    setGender(event.target.value);
  }
  
  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }
  function handleFirstNmae(e){
    e.preventDefault();
    setFirstName(e.target.value);
    
  }
  
  function handleLastName(e){ 
    e.preventDefault();
    setLastName(e.target.value);
    
  }
  return(
    <>
    <Form firstName={firstName} lastName={lastName} newsletter={newsletter} gender={gender} handleGenderChange={handleGenderChange} handleNewsletterChange={handleNewsletterChange} handleFirstNmae={handleFirstNmae} handleLastName={handleLastName}/>
    <DisplayData firstName={firstName} lastName={lastName} />   
    </>
     )
}
export default ParentComponent;