import React from 'react';
import { codeIcon, github, linkedin, twitter } from './assets';

const ContactInfo = () => (
  <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap print:text-center print:justify-around">
    <div className="font-light text-lg px-2 mb-6 print:mb-2">
      <h2 className="text-xl font-semibold mb-4">Personal</h2>

      <div className="flex items-center my-2">Oslo, Norway</div>
      <div className="flex items-center my-2">(+47) 970 43 924</div>
      <div className="flex items-center my-2">vikre.90@gmail.com</div>
    </div>
    <div className="font-light text-lg px-2 mb-6 print:hidden">
      <h2 className="text-xl font-semibold mb-4">Links</h2>
      <div className="flex items-center my-2 links hover:underline">
        <img src={github} className="inline w-6 mr-4" alt="GitHub Logo" />
        <a href="https://github.com/vikre">Github</a>
      </div>
      <div className="flex items-center my-2 links hover:underline">
        <img src={linkedin} className="inline w-6 mr-4" alt="Linkedin Logo" />
        <a href="http://www.linkedin.com/in/vikre">Linkedin</a>
      </div>
      <div className="flex items-center my-2 links hover:underline">
        <img src={twitter} className="inline w-6 mr-4" alt="Twitter Logo" />
        <a href="https://twitter.com/vikrel">Twitter</a>
      </div>
    </div>
    <div className="font-light text-lg px-2 mb-6 print:mb-2">
      <h2 className="text-xl font-semibold mb-4">Languages</h2>
      <div className="flex gap-3 my-2">
        <h3 className="font-semibold">Norwegian</h3>
        <div>Native</div>
      </div>
      <div className="flex gap-3 my-2">
        <h3 className="font-semibold">English</h3>
        <div>Fluent</div>
      </div>
      <div className="flex gap-3 my-2">
        <h3 className="font-semibold">Swedish</h3>
        <div>Conversational</div>
      </div>
    </div>
  </div>
);

const Profile = () => (
  <>
    <div className="px-2 mb-7 print:mb-2">
      <h1 className="text-center text-3xl font-semibold mb-2">Linn Vikre</h1>
      <h3 className="text-center text-xl font-light flex justify-center">
        <img src={codeIcon} className="px-4" />
        Software developer
      </h3>
    </div>
    <ContactInfo />
    <div className="print:hidden">
      <span>
        <i className="text-sm text-gray-400">References are provided on request</i>
      </span>
      <p className="text-sm text-gray-400 my-2">&copy; 2022 Linn Vikre</p>
    </div>
  </>
);

export default Profile;
