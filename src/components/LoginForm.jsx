import React from 'react'
import { Container, Grid, Form, Button, Icon } from 'semantic-ui-react'

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={8}>
            <Form onSubmit={submitFormHandler} id="login-form">
              <Form.Field>
                <label>Email</label>
                <input name="email" type="email" id="email"></input>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input name="password" type="password" id="password"></input>
              </Form.Field>
              <Button  id="submit">
                <Button.Content >Submit</Button.Content>
                {/* <Button.Content hidden><Icon name='checkmark'/></Button.Content> */}
               </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default LoginForm;

