import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import Hero from "../../components/Hero/Hero";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import SnippetSection from "../../components/SnippetSection/SnippetSection";
const HomeContainer = styled.div`
  padding: 1rem 2rem;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <HomeContainer theme={theme}>
      <Hero />
      <ProjectSection />
      <SnippetSection sectionName={"Home"} />
    </HomeContainer>
  );
};

export default Home;
