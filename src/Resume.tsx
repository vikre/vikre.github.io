import React from 'react';
//import './App.css';
import Education from './Education';
import Work from './Work';
import Volunteer from './Volunteer';

const Resume = () => (
  <div className="prose">
    <hr className="mt-8 mb-12 print:mb-6 print:mt-2" />
    <Work />
    <hr className="mt-8 mb-12 print:mb-6" />
    <Education />
    <hr className="mt-8 mb-12 print:mb-6" />
    <Volunteer />
  </div>
);

export default Resume;
