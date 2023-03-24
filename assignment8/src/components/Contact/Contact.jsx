import React from "react";
import styled from "styled-components";
import { GrInstagram } from "react-icons/gr"
import { FiTwitter, FiFacebook } from "react-icons/fi"

const ContactWrapper = styled.div`
  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 72px;
    letter-spacing: 1px;
  }
  .icons {
    display: flex;
    gap: 20px;
    svg{
      font-size: 24px;
      cursor: pointer;
    }
  }
`;

const Contact = ({ title }) => {
  return (
    <ContactWrapper>
      <h4>{title}</h4>
      <div className="icons">
        <GrInstagram />
        <FiTwitter />
        <FiFacebook />
      </div>
    </ContactWrapper>
  );
};

export default Contact;
