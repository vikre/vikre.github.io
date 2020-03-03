import React from 'react';
import './App.css';
import Education from './Education';
import Work from './Work';
import Volunteer from './Volunteer';

const Resume = () => (
  <section>
    <Work />
    <Education />
    <Volunteer />
  </section>
);

export default Resume;
