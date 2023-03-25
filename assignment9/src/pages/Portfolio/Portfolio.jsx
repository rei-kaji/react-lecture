import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import ProjectHeading from '../../components/ProjectHeading/ProjectHeading';
import ProjectCard from '../../components/Card/ProjectCard/ProjectCard';
const PortfolioContainer = styled.div`
    padding: 2rem 0;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    .inner{
      width: 1140px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }
`;

const Portfolio = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <PortfolioContainer theme={theme}>
      <div className='inner'>
        <ProjectHeading />
        <ProjectCard 
          type={"Web Development"} 
          title={"Bolder Landing page"}
          content={"Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."}
          image={""}
        />
        <ProjectCard 
          type={"Web Development"} 
          title={"Bolder Landing page"}
          content={"Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."}
          image={""}
        />
        <ProjectCard 
          type={"Web Development"} 
          title={"Bolder Landing page"}
          content={"Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."}
          image={""}
        />

      </div>
    </PortfolioContainer>
  )
}

export default Portfolio