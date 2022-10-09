import React from 'react';
//import './App.css';

type WorkItemProps = {
  header: string;
  meta: string;
  metadescription: string;
  description: React.ReactNode;
  labels?: string[];
  link?: string;
  classname?: string;
};

const WorkItem = ({ header, link, meta, metadescription, description, labels, classname }: WorkItemProps) => (
  <div>
    <h3 className="text-black font-semibold text-lg mt-4 mb-4">
      <a href={link}>{header}</a>
    </h3>
    <div className="mb-4">
      <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">{meta}</div>
      <div className="lg:inline-block lg:w-8/12 w-full font-semibold">{metadescription}</div>
    </div>
    <div>
      <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2"></div>
      <div className="lg:inline-block lg:w-8/12 w-full">{description}</div>
    </div>
    <div className="mt-4">
      <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Tools:</div>
      <div className="lg:inline-block lg:w-8/12 w-full">
        <div className="flex flex-wrap">
          {labels &&
            labels.map((label, index) => (
              <span key={index} className="rounded-xl bg-emerald-300 px-3 py-1 m-1">
                {label}
              </span>
            ))}
        </div>
      </div>
    </div>
  </div>
);

const Work = () => (
  <div>
    <h2 className="section-headline">Work</h2>
    <WorkItem
      header="Favrit AS (Former Ordr AS)"
      link="https://www.favrit.com/"
      meta="March 2020 - now"
      metadescription="Techlead & Senior Software developer"
      description={
        <span>
          <a href="https://favrit.com/">Favrit</a> - a startup which focus on how to make the resturant visit to a
          purely positive experience. Both for they who works on the resturant and for the customers there.
        </span>
      }
      labels={[
        'React',
        'Next.js',
        'Javascript',
        'Typescript',
        'Tailwindcss',
        'Styled components',
        'Java',
        'Docker',
        'Spring boot',
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
      description={
        <span>
          <a href="https://digitallibrary.io/">Global digital library (GDL)</a> - a cooperation project between Norad
          and USAID with NDLA for developing a platform to freely provide reading material in a large number of
          languages for children.
        </span>
      }
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
      description={
        <span>
          Maintained and developed new features for{' '}
          <a href="https://www.entur.org/">Enturs sales- and ticket system.</a>
          Were team lead for a team of aprox. 10 developers, and sat as both a backend- and frontend developer.
        </span>
      }
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
      description={
        <span>
          Maintained and developed new features for the Norwegian Rail Roads (
          <a href="https://www.vy.no/">former called NSB, and now VY</a>) sales- and ticket system. Contributed mainly
          as a backend developer on the project. One of the responsibilities were to implement the integration between
          the sales- and ticketing system and third party payment APIs as Vipps, MobilePay and Mcash so that the NSB-app
          could have they as payment methods.
        </span>
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
        'prometheus',
      ]}
    />
    <WorkItem
      header="Knowit Objectnet AS"
      link="https://www.knowit.no/"
      meta="2014"
      metadescription="Summer intern - Developer"
      description={
        <span>
          Helped develop an administration web app for configuring tickets, trips and so on for the Norwegian Rail Road
          (<a href="https://www.vy.no/">NSB</a>)
        </span>
      }
      labels={['Javascript', 'backbone.js', 'CSS', 'Java', 'Spring boot', 'Hibernate', 'maven', 'git', 'oracle']}
    />
    <WorkItem
      header="ODIN Forvalting AS"
      link="https://odinfond.no/"
      meta="2011 - 2014"
      metadescription="Summer intern - Developer and daily system operation"
      description={
        <span>Mainly helped employees with their daily computer problems in addition to daily operations.</span>
      }
      labels={['Java', 'PowerShell']}
    />
  </div>
);

export default Work;
