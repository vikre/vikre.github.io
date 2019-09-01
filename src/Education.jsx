import React from 'react';
import { Item } from 'semantic-ui-react';
import './App.css';

const EducationItem = ({ header, link, meta, description, extra }) => (
  <Item className="ui items item-margin-left">
    <Item.Content>
      <Item.Header as="a" href={link}>
        {header}
      </Item.Header>
      <Item.Meta>
        <span className="cinema">{meta}</span>
      </Item.Meta>
      <Item.Description>{description}</Item.Description>
      {extra && <Item.Extra>{extra}</Item.Extra>}
    </Item.Content>
  </Item>
);

const Education = () => (
  <Item.Group>
    <h2>
      <span>Education</span>
    </h2>
    <EducationItem
      header={'Norwegian University of Science and Technology'}
      link={'https://www.ntnu.no/'}
      meta={'2010 - 2015'}
      description={'Master in Computer Science'}
      extra={
        <a href="https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/2353650">
          Master thesis: Online News Detection on Twitter
        </a>
      }
    />
    <EducationItem
      header={'Dønski Videregående Skole'}
      link={'http://donski.no/'}
      meta={'2006 - 2009'}
      description={'Specialization in general studies / Alpine skiing'}
    />
  </Item.Group>
);

export default Education;
