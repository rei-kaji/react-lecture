import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../../context/ThemeContext";

// import reactLogo from "../../../assets/React.svg";
// import tailwindLogo from "../../../assets/Tailwind.svg";
import { AiFillStar } from "react-icons/ai";

const SnippetCardWrapper = styled.div`
  width: 556px;
  height: 282px;
  border-radius: 20px;
  text-align: left;
  padding: 2rem 3rem;
  background-color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SnippetCardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const SnippetCardBottom = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const SnippetCardIcon = styled.div`
  width: 39px;
  height: 39px;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 0.5rem;
  svg {
    color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
    font-size: 26px;
  }
`;

const SnippetCard = ({ title, content, rating = 8, techs }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SnippetCardWrapper theme={theme}>
      <SnippetCardTop>
        <h3>{title}</h3>
        <p>{content}</p>
      </SnippetCardTop>
      <SnippetCardBottom>
        <div className="snippet-bottom-logos">
          {techs &&
            techs.map((tech, index) => (
              <SnippetCardIcon theme={theme} key={index}>
                {tech}
              </SnippetCardIcon>
            ))}
        </div>
        <div>
          <AiFillStar color="#FFF615" size={18} />
          <p>{rating} Stars</p>
        </div>
      </SnippetCardBottom>
    </SnippetCardWrapper>
  );
};

export default SnippetCard;
