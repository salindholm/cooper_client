import React from 'react'

const InputFields = ({ inChangeHandler }) => {
  return (
    <>
      <label>Distance</label>
      <input
      onChange={this.onChangeHandler}
      name="distance"
      id="distance"
      ></input>

      <select onChange={this.onChangeHandler} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

      <label>Age</label>
      <input onChange={this.onChangeHandler} name="age" id="age"></input>
    </>
  )
};

export default InputFields;
