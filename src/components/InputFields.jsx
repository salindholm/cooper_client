import React from 'react'
import { Form, Divider, Segment, Icon, Header, Grid } from 'semantic-ui-react'
import "../styling/inputFields.css"

const InputFields = ({ onChangeHandler }) => {
  return (
    <Segment basic textAlign='center'>
      <Header as='h3'>Check Your Results <Icon name='heartbeat'/> </Header>
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
        <select onChange={onChangeHandler} name="gender" id="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </Form>
      <Divider horizontal>Or</Divider>
    </Segment>
  )
};

export default InputFields; //