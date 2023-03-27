import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BiBox } from "react-icons/bi";

// const NavContainer = styled.nav`
//   display: flex;
//   align-items: center;
//   padding: 1rem 2rem;
//   background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
//   color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
//   height: 128px;
//   border-bottom: 1px solid
//     ${(props) => (props.theme === "light" ? "#E2E2E2" : "#4D4D4D")};
//   .inner {
//     width: 1140px;
//     display: flex;
//     align-items: center;
//     // padding: 1rem 2rem;
//     margin: 0 auto;
//   }
//   h1 {
//     margin-right: auto;
//     a {
//       color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
//     }
//   }
//   ul {
//     list-style: none;
//     display: flex;
//     gap: 1rem;
//     li {
//       a {
//         text-decoration: none;
//         color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
//       }
//     }
//   }
//   button {
//     margin-left: 1rem;
//     padding: 0.55rem 1.2rem;
//     border: none;
//     border-radius: 4px;
//     background-color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
//     color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

const MobileNavContainer = styled.nav`
  @media (min-width: 768px) {
    display: none;
  }
  position: sticky;
  bottom: 0;
  border-top: 1px solid
    ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  a {
    color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
    svg {
      color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
      font-size: 1.5rem;
    }
    // display: flex;
    // flex-direction: row;
  }
  button {
    width: 75%;
    margin: 0 auto;
    background-color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
    color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
    border: none;
    border-radius: 10px;
  }
`;

const InnerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuButton = styled.button``;

const MobileNav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* <NavContainer theme={theme}>
        <div className="inner">
          <h1>
            <Link to={"/"}>Rei Kajiwara</Link>
          </h1>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/snippet"}>Snippet</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
          </ul>
          <button onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </NavContainer> */}
      <MobileNavContainer theme={theme}>
        {/* <div className="inner"> */}
        {/* <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/snippet"}>Snippet</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
          </ul> */}
        <Link to={"/"}>
          <InnerMenu>
            <HiHome />
            Home
          </InnerMenu>
        </Link>

        <Link to={"/snippet"}>
          <InnerMenu>
            <FaGithub />
            Snippet
          </InnerMenu>
        </Link>
        <Link to={"/portfolio"}>
          <InnerMenu>
            <BiBox />
            Portfolio
          </InnerMenu>
        </Link>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
        {/* </div> */}
      </MobileNavContainer>
    </>
  );
};

export default MobileNav;
