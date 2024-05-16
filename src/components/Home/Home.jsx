import React from 'react'
import Intro from './Intro'
import TechStack from './TechStack';
import { Projects } from './Projects';

export default function Home() {
  return (
    <>
      <Intro/>
      <br/>
      <br/>
      <TechStack/>
      <br/>
      <br/>
      <br/>
      <Projects/>
    </>
  );
}