import React from 'react';
import { Item, Label } from 'semantic-ui-react';
import './App.css';

const WorkItem = ({
  header,
  link,
  meta,
  metadescription,
  description,
  labels,
  classname,
}) => (
  <Item className={`ui items item-margin-left ${classname || ''}`}>
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
        <Label.Group>
          {labels
            && labels.map((label, index) => (
              <Label key={index} content={label} color="teal" />
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
      header="Ordr AS"
      link="https://www.ordr.no/"
      meta="March 2020 - now"
      metadescription="Code monkey aka Senior Software developer"
      description={(
        <span>
          <a href="https://ordr.no/">Ordr</a>
          A Startup which focus on how to make the resturant visit to a purely positive experience.
          Both for they who works on the resturant and for the customers there.
        </span>
)}
      labels={[
        'Javascript',
        'Angular',
        'Ngx',
        'Serverless',
        'Python',
        'Java',
        'Docker',
        'npm',
        'git',
        'postgreSQL',
        'AWS',
        'AWS Lambda',
      ]}
    />
    <WorkItem
      header="Knowit Objectnet AS"
      link="https://www.knowit.no/"
      meta="2018 - March 2020"
      metadescription="Consultant / Team lead / Software developer"
      description={(
        <span>
          <a href="https://digitallibrary.io/">Global digital library (GDL)</a>
          {' '}
          - a cooperation project between Norad and USAID with NDLA for
          developing a platform to freely provide reading material in a large
          number of languages for children.
        </span>
)}
      labels={[
        'Javascript',
        'React',
        'Next.js',
        'express.js',
        'node.js',
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
        'Kong',
        'google assistant',
        'dialog flow',
        'AWS Lambda',
        'Terraform',
      ]}
    />
    <WorkItem
      header="Knowit Objectnet AS"
      link="https://www.knowit.no/"
      meta="2016 - December 2018 & June 2019 - March 2020"
      metadescription="Consultant / Team lead / Software developer"
      description={(
        <span>
          Maintained and developed new features for
          {' '}
          <a href="https://www.entur.org/">Enturs sales- and ticket system.</a>
          Were team lead for a team of aprox. 10 developers, and sat as both a
          backend- and frontend developer.
        </span>
)}
      labels={[
        'Javascript',
        'React',
        'Redux',
        'CSS',
        'Semantic UI',
        'Webpack',
        'npm',
        'Java',
        'Hibernate',
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
        'Auth0',
      ]}
    />
    <WorkItem
      classname="page-break"
      header="Knowit Objectnet AS"
      link="https://www.knowit.no/"
      meta="2015 - 2016"
      metadescription="Consultant / Software developer"
      description={(
        <span>
          Maintained and developed new features for the Norwegian Rail Roads (
          <a href="https://www.vy.no/">former called NSB, and now VY</a>
) sales-
          and ticket system. Contributed mainly as a backend developer on the
          project. One of the responsibilities were to implement the integration
          between the sales- and ticketing system and third party payment APIs
          as Vipps, MobilePay and Mcash so that the NSB-app could have they as
          payment methods.
        </span>
)}
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
        'prometheus',
      ]}
    />
    <WorkItem
      header="Knowit Objectnet AS"
      link="https://www.knowit.no/"
      meta="2014"
      metadescription="Summer intern - Developer"
      description={(
        <span>
          Helped develop an administration web app for configuring tickets,
          trips and so on for the Norwegian Rail Road (
          <a href="https://www.vy.no/">NSB</a>
)
        </span>
)}
      labels={[
        'Javascript',
        'backbone.js',
        'CSS',
        'Java',
        'Spring boot',
        'Hibernate',
        'maven',
        'git',
        'oracle',
      ]}
    />
    <WorkItem
      header="ODIN Forvalting AS"
      link="https://odinfond.no/"
      meta="2011 - 2014"
      metadescription="Summer intern - Developer and daily system operation"
      description={(
        <span>
          Mainly helped employees with their daily computer problems in addition
          to daily operations.
        </span>
)}
      labels={['Java', 'PowerShell']}
    />
  </Item.Group>
);

export default Work;
