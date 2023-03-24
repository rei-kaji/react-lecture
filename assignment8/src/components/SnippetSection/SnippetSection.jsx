import React from "react";
import styled from "styled-components";
import SnippetCard from "../Card/SnippetCard/SnippetCard";
import SeeMoreButton from "../Button/SeeMoreButton/SeeMoreButton";
import { SiTailwindcss, SiReact } from "react-icons/si";
const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(556px, 1fr));
    gap: 1rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
`;

const SnippetSection = ({ sectionName }) => {
  return (
    <Wrapper>
      <Title>Code Snippet</Title>
      <div className="list">
        <SnippetCard
          title={"Nextjs Starter"}
          content={"A dead simple for nextjs project."}
          tech={["React", "Tailwind"]}
          rating={8}
        />
        <SnippetCard
          title={"Frontend Starter Kit"}
          content={
            "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting."
          }
          tech={["React", "Tailwind"]}
          rating={12}
        />
        <SnippetCard
          title={"Nextjs Starter 2.0"}
          content={"A dead simple for nextjs project with firebase setup."}
          tech={["React", "Tailwind"]}
          rating={89}
        />
        <SnippetCard
          title={"Mobile Web Starter Kit"}
          content={
            "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting."
          }
          tech={["React", "Tailwind"]}
          rating={8}
        />
        {sectionName == "Snippet" && (
          <>
            <SnippetCard
              title={"Nextjs Starter 2.0"}
              content={"A dead simple for nextjs project with firebase setup."}
              tech={["React", "Tailwind"]}
              rating={8}
            />
            <SnippetCard
              title={"Mobile Web Starter Kit"}
              content={
                "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting."
              }
              tech={["React", "Tailwind"]}
              rating={8}
            />
          </>
        )}
      </div>
      {sectionName == "Home" && <SeeMoreButton />}
    </Wrapper>
  );
};

export default SnippetSection;
