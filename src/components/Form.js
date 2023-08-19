import React from "react";


function Form(props) {
  
  return (
    <form>
      <input type="text" value={props.firstName} onChange={props.handleFirstNmae} />
      <input type="text" value={props.lastName} onChange={props.handleLastName} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={props.handleNewsletterChange}
        defaultChecked={props.newsletter}
      />
      <div>
        <label>
          <input
            type="radio"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleGenderChange}
          />
          Female
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
