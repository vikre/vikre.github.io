import React from 'react';
import { List, Divider, Flag, Header } from 'semantic-ui-react';
import './App.css';

const ContactInfo = () => (
  <List>
    <List.Item content="Oslo, Norway" icon="marker" />
    <List.Item content="(+47) 970 43 924" icon="phone" />
    <List.Item content="vikre.90@gmail.com" icon="mail" />
    <List.Item>
      <List animated link verticalAlign="middle" >
        <List.Item as="a" content="Twitter" icon="twitter" href="https://twitter.com/vikrel" />
        <List.Item as="a" content="Github" icon="github" href="https://github.com/vikre" />
        <List.Item as="a" content="Linkedin" icon="linkedin" href="http://www.linkedin.com/in/vikre" />
      </List>
    </List.Item>
    <List.Item>
      <List verticalAlign="middle" >
        <List.Item>
          <Flag name="no" />
          {'Spoken: fluent, written: excellent'}
        </List.Item>
        <List.Item>
          <Flag name="gb" />
          <Flag name="us" />
          {'Spoken: excellent, written: excellent'}
        </List.Item>
        <List.Item>
          <Flag name="se" />
          {'Spoken: avarage, written: avarage'}
        </List.Item>
      </List>
    </List.Item>
  </List>
);

const Profile = () => (
  <nav>
    <h1>Linn Vikre</h1>
    <Header as="h3" content={'Software developer'} icon="code" />
    <Divider hidden />
    <ContactInfo />
    <Divider hidden />
    <span><i>References are provided on request</i></span>
  </nav>
);

export default Profile;
