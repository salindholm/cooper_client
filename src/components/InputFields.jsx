import React from 'react'
import { Form } from 'semantic-ui-react'

const InputFields = ({ onChangeHandler }) => {
  return (
    <Form>
      <Form.Field>
        <label>Age</label>
        <input onChange={onChangeHandler} name="age" id="age"></input>
      </Form.Field>
      <Form.Field>
        <label>Distance</label>
        <input
        onChange={onChangeHandler}
        name="distance"
        id="distance"
      ></input>
      </Form.Field>
      <select onChange={onChangeHandler} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </Form>
  )
};

export default InputFields;
