import React from 'react';

type SubItemsProps = {
  title: string;
  description: string;
};

type VolunteerItemProps = {
  header: string;
  meta: string;
  link: string;
  subItems: SubItemsProps[];
  className?: string;
};

const VolunteerItem = ({ header, link, meta, subItems, className }: VolunteerItemProps) => (
  <div>
    <h3 className="text-black font-semibold text-lg mt-4 mb-4">
      <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
        <a href={link}>{header}</a>
      </div>
      <div className="lg:inline-block lg:w-8/12 w-full">{meta}</div>
    </h3>

    <div>
      {subItems && (
        <>
          {subItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 mr-4 font-medium">{item.title}</div>
              <div className="lg:inline-block lg:w-8/12 w-full">{item.description}</div>
            </div>
          ))}
        </>
      )}
    </div>
  </div>
);

const Volunteer = () => (
  <div>
    <h2 className="section-headline">Work Volunteer / other experience</h2>
    <VolunteerItem
      header="Online"
      link="https://online.ntnu.no"
      meta="2011 - 2015"
      subItems={[
        {
          title: 'Head (2014-2015)',
          description:
            'Worked closely with the rest of the team to organize and run the organization. Also had the responsibility for HES (Health Environmental Safety)',
        },
        {
          title: 'Deputy head (2013-2014)',
          description:
            'Worked closely with the rest of the team to organize and run the organization. Mostly communication and representation',
        },
        {
          title: 'Head of the academic and courses commitee (2012 -2013)',
          description:
            'Managing the team working with arranging courses and workshops for the informatics students at the Norwegian University of Science and Technology',
        },
        {
          title: 'Member of the academic and courses commitee (2011 - 2015)',
          description:
            'Arranging courses and workshops for the informatics students at the Norwegian University of Science and Technology',
        },
      ]}
    />
    <VolunteerItem
      header="JavaZone"
      link="https://javazone.no"
      meta="2012 - 2013"
      subItems={[
        {
          title: 'Volunteer @ pkom',
          description:
            'JavaZone is organized by javaBin, the Norwegian Java User Group. The goal is to organize a community-driven conference for Java developers where they can learn new things, share knowledge, and socialize.',
        },
      ]}
      className="page-break"
    />
  </div>
);

export default Volunteer;
