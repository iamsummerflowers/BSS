import React, { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Mission from './Mission.js';
import Story from './Story.js';
import Vision from './Vision.js';
import Team from './Team.js';
import Footer from '../Footer/Footer.js';






function About() {



  return (
    <div>
        <Header />
        <Mission />
        <Story />
        <Vision />
        <Team />
        <Footer />
    </div>
  );
}

export default About;