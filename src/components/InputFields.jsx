import React from 'react'
import { Form, Divider, Segment, Icon, Header } from 'semantic-ui-react'

const InputFields = ({ onChangeHandler }) => {
  return (
    <Segment basic textAlign='center'>
      <Header as='h3'>Check Your Results <Icon name='heartbeat'/> </Header>
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
          > 
          </input>
        </Form.Field>
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