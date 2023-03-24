import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import ProjectHeading from "../../components/ProjectHeading/ProjectHeading";
import ProjectCard from "../../components/Card/ProjectCard/ProjectCard";
import WebsiteImage from "../../assets/website.png";
import WebsiteImage2 from "../../assets/website2.png";
const PortfolioContainer = styled.div`
  padding: 1rem 2rem;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <PortfolioContainer theme={theme}>
      <ProjectHeading />
      <ProjectCard
        type={"Web Development"}
        title={"Bolder Landingpage"}
        content={
          "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
        }
        image={WebsiteImage}
      />
      <ProjectCard
        type={"Web Development"}
        title={"Kerja Mantul Education Management"}
        content={
          "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
        }
        image={WebsiteImage2}
      />
    </PortfolioContainer>
  );
};

export default Portfolio;
