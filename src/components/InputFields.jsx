import React from 'react'
import { Form, Divider, Segment, Icon, Header } from 'semantic-ui-react'
import "../styling/inputFields.css"

const InputFields = ({ onChangeHandler }) => {
  return (
    <Segment basic textAlign='center'>
      <Header as='h3'>Check Your Cooper Test Results <Icon name='heartbeat' color='red'/> </Header>
      <Form>
        <Form.Group >
          <label id="age-label">Age:</label>
          <input onChange={onChangeHandler} name="age" id="age"></input>
          <label id="distance-label">Distance:</label>
          <input
          onChange={onChangeHandler}
          name="distance"
          id="distance"
          > 
          </input>
        </Form.Group>
        <form id="select-gender-form">
          <label id="select-gender">
            Select Gender:
            <select onChange={onChangeHandler} name="gender" id="gender" placeholder="Select Gender...">
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
       </form>
      </Form>
      <Divider horizontal>Or</Divider>
    </Segment>
  )
};

export default InputFields; //