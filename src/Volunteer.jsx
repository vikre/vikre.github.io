import React from 'react';
import { Item, List } from 'semantic-ui-react';
import './App.css';

const VolunteerItem = ({ header, link, meta, subItems }) => (
  <Item className="ui items item-margin-left">
    <Item.Content>
      <Item.Header as="a" href={link}>{header}</Item.Header>
      <Item.Meta>
        <span className="cinema">{meta}</span>
      </Item.Meta>
      <Item.Description>
        {subItems &&
          <List relaxed="very">
            {subItems.map((item, index) =>
              <List.Item key={index} header={item.title} content={item.description} />,
            )}
          </List>
        }
      </Item.Description>
    </Item.Content>
  </Item>
);

const Volunteer = () => (
  <Item.Group>
    <h2><span>Volunteer / other experience</span></h2>
    <VolunteerItem
      header={'Online'}
      link={'https://online.ntnu.no'}
      meta={'2011 - 2015'}
      subItems={[
        { title: 'Head (2014-2015)', description: 'Worked closely with the rest of the team to organize and run the organization. Also had the responsibility for HES (Health Environmental Safety)' },
        { title: 'Deputy head (2013-2014)', description: 'Worked closely with the rest of the team to organize and run the organization. Mostly communication and representation' },
        { title: 'Head of the academic and courses commitee (2012 -2013)',
          description: 'Managing the team working with arranging courses and workshops for the informatics students at the Norwegian University of Science and Technology' },
        { title: 'Member of the academic and courses commitee (2011 - 2015)',
          description: 'Arranging courses and workshops for the informatics students at the Norwegian University of Science and Technology' },
      ]}
    />
    <VolunteerItem
      header={'Datakameratene FK'}
      link={'https://online.ntnu.no/wiki/online/datakameratenefk/'}
      meta={'2012 - 2013'}
      subItems={[
        { title: 'Manager for Datakameratene FK', description: 'Computer Science soccer team for girls' },
      ]}
    />
  </Item.Group>
);

export default Volunteer;
