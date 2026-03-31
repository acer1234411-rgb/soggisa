import { motion } from 'motion/react';
import Hero from '../components/sections/Hero';
import ProblemSolution from '../components/sections/ProblemSolution';
import ServiceOfferings from '../components/sections/ServiceOfferings';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import Expertise from '../components/sections/Expertise';
import SocialProof from '../components/sections/SocialProof';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import ContactLocation from '../components/sections/ContactLocation';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ProblemSolution />
      <ServiceOfferings />
      <WhyChooseUs />
      <Process />
      <Expertise />
      <SocialProof />
      <FAQ />
      <CTA />
      <ContactLocation />
    </motion.div>
  );
}
