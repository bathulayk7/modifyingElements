import React, { useState } from "react";

const Input = ({ onSubmit }) => {
  const [val, setVal] = useState("");
 const formSubmit=(e)=>{
    e.preventDefault();
    onSubmit(val);
 }
  const changeTitleById = (e) => {
    setVal(parseInt(e.target.value));
  };
  return (
    <div>
      <h1>{val}</h1>
      <form onSubmit={formSubmit} >
        <input value={val} type="number" onChange={changeTitleById} />
      </form>
    </div>
  );
};

export default Input;
