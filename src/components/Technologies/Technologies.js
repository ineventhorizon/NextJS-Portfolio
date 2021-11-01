import React from 'react';
import { DiFirebase, DiReact, DiCodeBadge, DiGhostSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Through my study time I've learned technologies to help my understanding of programming further and help to my future career.
    </SectionText>
    <List>
      <ListItem>
        <DiCodeBadge size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            C, C++, C# <br />
            JavaScript, HTML, CSS <br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frameworks/Libraries</ListTitle>
          <ListParagraph>
            Node.js, Express.js, React.js <br />
            Bootstrap, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            
            MSSQL, PostgreSQL <br />
            MongoDB, Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGhostSmall size="3rem" />
        <ListContainer>
          <ListTitle>Miscellaneous</ListTitle>
          <ListParagraph>
            git, GitHub, Heroku, Digitalocean <br />
            MongoDB Atlas, Windows Environments <br />
            Arduino, PyTorch, HTML5 Canvas
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
