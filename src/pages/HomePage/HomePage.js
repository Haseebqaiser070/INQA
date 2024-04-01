import React from 'react';
import Hero from './Hero';
import Quote from './Quote';
import Benifits from './Benifits';
import About from './About';
import Phases from './Phases';
import BenfitisAtGlance from './BenfitisAtGlance';
import Pricing from './Pricing';
import Eligibile from './Eligibile';
import HowItWorks from './HowItWorks';
import Contact from './Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Quote />
      <Benifits />
      <About />
      <Phases />
      <BenfitisAtGlance />
      <Pricing />
      <Eligibile />
      <HowItWorks />
      <Contact />
    </>
  );
}
