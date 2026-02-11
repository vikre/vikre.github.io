import React from 'react';

type EducationProps = {
  header: string;
  meta: string;
  description: string;
  link: string;
  extra?: React.ReactNode;
};

const EducationItem = ({ header, link, meta, description, extra }: EducationProps) => (
  <div className="my-4">
    <h3 className="text-black font-semibold text-lg mt-4 mb-4">
      <a href={link}>{header}</a>
    </h3>
    <div className="mb-4">
      <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">{meta}</div>
      <div className="lg:inline-block lg:w-8/12 w-full">{description}</div>
    </div>
    {extra && (
      <div>
        <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2"></div>
        <div className="lg:inline-block lg:w-8/12 w-full font-light">{extra}</div>
      </div>
    )}
  </div>
);

const Education = () => (
  <div>
    <h2 className="section-headline">Education</h2>
    <EducationItem
      header="Norwegian University of Science and Technology"
      link="https://www.ntnu.no/"
      meta="2010 - 2015"
      description="Master in Computer Science"
      extra={
        <ul className="list-disc list-inside">
          <li>
            <a className="links hover:underline" href="https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/2353650">
              Master thesis: Online News Detection on Twitter
            </a>
          </li>
          <li>
            <a
              className="links hover:underline"
              href="http://www.polibits.gelbukh.com/2017_55/Hybrid%20Entity%20Driven%20News%20Detection%20on%20Twitter.pdf"
            >
              Paper publication: Hybrid Entity Driven News Detection on Twitter
            </a>
          </li>
          <li>
            <a
              className="links hover:underline"
              href="https://www.scitepress.org/PublishedPapers/2016/58019/pdf/index.html"
            >
              Paper publication: Twitter Topic Modeling for Breaking News Detection
            </a>
          </li>
        </ul>
      }
    />
    <EducationItem
      header="Dønski Videregående Skole"
      link="http://donski.no/"
      meta="2006 - 2009"
      description="Specialization in general studies / Alpine skiing"
    />
  </div>
);

export default Education;
