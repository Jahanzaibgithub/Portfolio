import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
     <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
        My name is Jahanzaib and I am excited to be joining this team as a frontend developer. I am a hard worker in the industry, eager to learn and grow my skills alongside experienced professionals.
I have a degree in Computer Science and have completed multiple projects during my college years. I have experience in HTML, CSS, JavaScript, and various frontend frameworks such as React and Next.js.
I have a keen eye for design and am passionate about creating user-friendly and visually appealing interfaces. I am excited to collaborate with the team and work on exciting projects that will challenge me while contributing to the organization's success.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
