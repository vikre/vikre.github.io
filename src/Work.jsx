import React from 'react';
import { Item, Label } from 'semantic-ui-react';
import './App.css';

const WorkItem = ({
  header,
  link,
  meta,
  metadescription,
  description,
  labels
}) => (
  <Item className="ui items item-margin-left">
    <Item.Content>
      <Item.Header as="a" href={link}>
        {header}
      </Item.Header>
      <Item.Meta>
        <span className="cinema">{meta}</span>
        <br />
        <span className="cinema">{metadescription}</span>
      </Item.Meta>
      <Item.Description>{description}</Item.Description>
      <Item.Extra>
        <Label.Group tag>
          {labels &&
            labels.map((label, index) => (
              <Label tag key={index} content={label} color="blue" />
            ))}
        </Label.Group>
      </Item.Extra>
    </Item.Content>
  </Item>
);

const Work = () => (
  <Item.Group>
    <h2>
      <span>Work</span>
    </h2>
    <WorkItem
      header={'Knowit Objectnet AS'}
      link={'https://www.knowit.no/'}
      meta={'2018 - now'}
      metadescription={'Consultant / Software developer'}
      description={
        'Global digital library (GDL) - a cooperation project between Norad and USAID with NDLA for developing a platform to freely provide reading material in a large number of languages for children.'
      }
      labels={[
        'Javascript',
        'React',
        'Next.js',
        'express.js',
        'jest',
        'Cypress',
        'Styled components',
        'flow',
        'babel',
        'Material UI',
        'GraphQL',
        'Apollo Client',
        'Gatsby.js',
        'Webpack',
        'Serverless',
        'Python',
        'Java',
        'Scala',
        'Docker',
        'npm',
        'git',
        'postgreSQL',
        'AWS',
        'Kong'
      ]}
    />
    <WorkItem
      header={'Knowit Objectnet AS'}
      link={'https://www.knowit.no/'}
      meta={'2016 - December 2018 & June 2019 - now'}
      metadescription={'Consultant / Team leader / Software developer'}
      description={
        'Maintain and develop new features for Enturs sales- and ticket system.'
      }
      labels={[
        'Javascript',
        'React',
        'CSS',
        'Semantic',
        'Webpack',
        'npm',
        'Java',
        'Hibernate',
        'Ruby on rails',
        'Docker',
        'Spring boot',
        'gradle',
        'maven',
        'git',
        'oracle',
        'postgreSQL',
        'Google cloud',
        'Helm',
        'GraphQL',
        'prometheus',
        'babel',
        'express.js',
        'Electron',
        'Cypress',
        'Auth0'
      ]}
    />
    <WorkItem
      header={'Knowit Objectnet AS'}
      link={'https://www.knowit.no/'}
      meta={'2015 - 2016'}
      metadescription={'Consultant / Software developer'}
      description={
        'Maintain and develop new features for the Norwegian Rail Roads (NSB) sales- and ticket system.'
      }
      labels={[
        'Javascript',
        'CSS',
        'Java',
        'Hibernate',
        'Spring boot',
        'maven',
        'git',
        'oracle',
        'Helm',
        'gradle',
        'prometheus'
      ]}
    />
    <WorkItem
      header={'Knowit Objectnet AS'}
      link={'https://www.knowit.no/'}
      meta={'2014'}
      metadescription={'Summer intern - Developer'}
      description={
        'Helped develop an administration web app for configuring tickets, trips and so on for the Norwegian Rail Road (NSB)'
      }
      labels={[
        'Javascript',
        'backbone.js',
        'CSS',
        'Java',
        'Spring boot',
        'Hibernate',
        'maven',
        'git',
        'oracle'
      ]}
    />
    <WorkItem
      header={'ODIN Forvalting AS'}
      link={'https://odinfond.no/'}
      meta={'2011 - 2014'}
      metadescription={'Summer intern - Developer and daily system operation'}
      description={
        'Mainly helped employees with their daily computer problems in addition to daily operations'
      }
      labels={['Java', 'PowerShell']}
    />
  </Item.Group>
);

export default Work;
