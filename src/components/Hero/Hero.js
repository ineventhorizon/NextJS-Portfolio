import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br/>
        I'm Yusuf Ekrem Keçilioğlu
      </SectionTitle>
      <SectionText>I've studied Computer Engineering at Eskişehir Osmangazi University. Through my study time at the university I've learned about OOP, data structures, teamwork and other programming and communication skills. This is my portfolio website to show my skills and projects.</SectionText>
      <Button onClick={()=> window.location = 'https://www.google.com.tr/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;