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

const SnippetCard = ({ title, content, rating = 8 }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SnippetCardWrapper theme={theme}>
      <SnippetCardTop>
        <h3>{title}</h3>
        <p>{content}</p>
      </SnippetCardTop>
      <SnippetCardBottom>
        <div className="snippet-bottom-logos"></div>
        <div>
          <AiFillStar color="#FFF615" size={18} />
          <p>{rating} Stars</p>
        </div>
      </SnippetCardBottom>
    </SnippetCardWrapper>
  );
};

export default SnippetCard;
