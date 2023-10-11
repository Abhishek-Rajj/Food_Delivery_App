import classes from "./Input.module.css";
import React from "react";
/* All key value pairs are included by spread operator*/
/* forward refs are used*/
const Input = React.forwardRef((props,ref)=> {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref= {ref} {...props.input} />
    </div>
  );
}) ;
export default Input;
