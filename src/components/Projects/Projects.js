import React, {useEffect, useState} from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
//import { projects } from '../../constants/constants';
//import { getProjects, projects } from '../../../utils/data';
import { firestore } from '../../../utils/firebase';


const Projects = () => {

  const [projects, setProjects]  = useState([
    {title:"", description:"",image:"",tags:[],source:"",id:0}
  ])
  const getProjects = async ()=>{
    var broje = []
    const snapshot = await firestore.collection("projects").get();
    snapshot.docs.forEach((doc)=>{
        broje.push(doc.data())
        console.log(doc.data())
        console.log(broje)
    })-
    setProjects(broje)
  }

  useEffect(()=>{
    getProjects()
  },[])

  function Projects_to_Render(){
    if(projects){
      return(
        <Section nopadding id="projects">
        <SectionDivider/>
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
          {projects.map(({id, image, title, description, tags, source, visit})=>(
            <BlogCard key = {id}>
              
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i)=>(
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                { source == 0 &&
                  <ExternalLinks href={source}>Source</ExternalLinks>}
              </UtilityList>
    
            </BlogCard>
          ))  }
        </GridContainer>
      </Section>)
    }else{
      return <div>Loading</div>
    }
  }
 
  return(
    <Projects_to_Render></Projects_to_Render>
  );
}

export default Projects;