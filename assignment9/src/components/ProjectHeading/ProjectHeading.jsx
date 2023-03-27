import React from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow.svg";

const ProjectHeadingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  h2 {
    // width: 458px;
    height: 119px;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    span {
      color: #3bf686;
    }

    .pc-header {
      display: block;
    }
    .mobile-header {
      display: none;
    }

    @media (max-width: 768px) {
      width: 100%;
      font-size: 2.5rem;
      line-height: 48px;
      .pc-header {
        display: none;
      }
      .mobile-header {
        display: block;
      }
    }
  }
  img {
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    border-bottom: 1px solid gray;
  }
`;

const ProjectHeading = ({ title, content }) => {
  return (
    <ProjectHeadingWrapper>
      <h2>
        Project that i <br className="pc-header" />
        has
        <br className="mobile-header" /> been <span>done</span>
      </h2>
      <img src={arrow} alt="" />
    </ProjectHeadingWrapper>
  );
};

export default ProjectHeading;
