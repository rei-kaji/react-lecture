import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LocationCardContainer = styled.div`
  // position: relative;
  // img {
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 8px;
  // }
  // .overlay {
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   background: linear-gradient(
  //     180deg,
  //     rgba(0, 0, 0, 0.1) 50%,
  //     rgba(0, 0, 0, 0.8)
  //   );
  //   border-radius: 8px;
  // }
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.8)
  );
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const LocationInformation = styled.div`
  // position: absolute;
  bottom: 12px;
  left: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LocationAction = styled.div`
  // position: absolute;
  // top: 8px;
  // right: 8px;
  text-align: left;
  button {
    border: none;
    padding: 10px 12px;
    border-radius: 8px;
    background: gray;
    color: black;
    cursor: pointer;
  }
`;

const ResidentsAccordion = styled.div`
  .toggle {
    display: none;
  }
  .Label {
    padding: 0.5rem;
    display: block;
    color: #fff;
    background: #333;
    width: 12rem;
    text-align: left;
  }
  .Label::before {
    /*タイトル横の矢印*/
    content: "";
    width: 6px;
    height: 6px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    -webkit-transform: rotate(45deg);
    position: absolute;
    top: calc(50% - 3px);
    right: 20px;
    transform: rotate(135deg);
  }
  .Label,
  .content {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: all 0.3s;
  }
  .content {
    /*本文*/
    height: 0;
    margin-bottom: 10px;
    padding: 0 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .toggle:checked + .Label + .content {
    /*開閉時*/
    height: auto;
    padding: 20px;
    transition: all 0.3s;
  }
  .toggle:checked + .Label::before {
    transform: rotate(-45deg) !important;
  }
  .residentButton {
    border: none;
    background: lightgray;
    padding: 2px 5px;
    color: black;
  }
  a {
    text-decoration: none;
  }
`;

const LocationCard = ({ id, name, residents, type, dimension }) => {
  const navigate = useNavigate();

  const handleRoute = (id) => {
    navigate(`/location/${id}`);
  };

  return (
    <LocationCardContainer>
      {/* <img src={image} alt={name + "-image"} /> */}
      {/* <div className="overlay"></div> */}
      <LocationInformation>
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
        <ResidentsAccordion>
          <input id={`togglebox-${name}`} type="checkbox" class="toggle" />
          <label class="Label" for={`togglebox-${name}`}>
            Residents:
          </label>
          <div class="content">
            {residents.map((resident, index) => (
              <a href={resident} key={index}>
                <div className="residentButton">{index}</div>
              </a>
            ))}
          </div>
          <LocationAction>
            <button onClick={() => handleRoute(id)}>See more</button>
          </LocationAction>
        </ResidentsAccordion>
      </LocationInformation>
    </LocationCardContainer>
  );
};

export default LocationCard;
