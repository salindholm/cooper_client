import React from 'react'
import { Container, Header, Divider } from 'semantic-ui-react';
import "../styling/aboutStyle.css"

const About = () => {
  return (
    <div id="about-message">
    <Container textAlign='center'>
      <Header as="h2">
        About The Cooper Test
      </Header>
    </Container>
      <Divider />
      <p id="about-description">
        The Cooper test is a test of physical fitness. It was designed by Kenneth H. Cooper in 1968 for US military use. 
        In the original form, the point of the test is to run as far as possible within 12 minutes. 
        Pacing is important, as the participant will not cover a maximal distance if they begin with a pace too close to an all out sprint. 
        The outcome is based on the distance the test person ran, their age and their sex.
      </p>
      <br/>
      <br/>
      <a id="cooper-link" 
      href={"https://en.wikipedia.org/wiki/Cooper_test"}>
        Read More About The Cooper Test
      </a>
    </div>
  )
}

export default About;
