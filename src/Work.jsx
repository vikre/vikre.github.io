import React from 'react';
import { Item, Label } from 'semantic-ui-react';
import './App.css';

const WorkItem = ({ header, link, meta, metadescription, description, labels }) => (
  <Item className="ui items item-margin-left">
    <Item.Content>
      <Item.Header as="a" href={link}>{header}</Item.Header>
      <Item.Meta>
        <span className="cinema">{meta}</span><br />
        <span className="cinema">{metadescription}</span>
      </Item.Meta>
      <Item.Description>{description}</Item.Description>
      <Item.Extra>
        <Label.Group tag>
          {labels && labels.map((label, index) =>
            <Label tag key={index} content={label} color="blue" />,
          )}
        </Label.Group>
      </Item.Extra>
    </Item.Content>
  </Item>
);

const Work = () => (
  <Item.Group>
    <h2><span>Work</span></h2>
    <WorkItem
      header={'Knowit AS'}
      link={'https://www.knowit.no/'}
      meta={'2016 - now'}
      metadescription={'Consultant / Software developer / Team lead'}
      description={'Maintain and develop new features for Enturs sales- and ticket system.'}
      labels={['Javascript', 'React', 'CSS', 'Semantic', 'Java', 'Hibernate', 'Ruby on rails', 'Docker', 'Spring', 'npm', 'gradle', 'maven', 'git', 'oracle', 'postgreSQL', 'Google cloud']}
    />
    <WorkItem
      header={'Knowit AS'}
      link={'https://www.knowit.no/'}
      meta={'2015 - 2016'}
      metadescription={'Consultant / Software developer'}
      description={'Maintain and develop new features for the Norwegian Rail Roads (NSB) sales- and ticket system.'}
      labels={['javascript', 'CSS', 'Java', 'Hibernate', 'Spring', 'maven', 'git', 'oracle']}
    />
    <WorkItem
      header={'Knowit AS'}
      link={'https://www.knowit.no/'}
      meta={'2014'}
      metadescription={'Summer intern - Developer'}
      description={'Helped develop an administration web app for configuring tickets, trips and so on for the Norwegian Rail Road (NSB)'}
      labels={['javascript', 'backbone.js', 'CSS', 'Java', 'Hibernate', 'maven', 'git', 'oracle']}
    />
    <WorkItem
      header={'ODIN Forvalting AS'}
      link={'https://odinfond.no/'}
      meta={'2011 - 2014'}
      metadescription={'Summer intern - Developer and daily system operation'}
      description={'Mainly helped employees with their daily computer problems in addition to daily operations'}
      labels={['Java', 'PowerShell']}
    />
  </Item.Group>
);

export default Work;
