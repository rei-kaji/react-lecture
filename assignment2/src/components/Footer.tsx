import React from "react";
import twitterIcon from "../assets/Twitter.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import linkedinIcon from "../assets/Linkedin.png";
import githubIcon from "../assets/GitHub.png";

type Props = {};

function Footer({}: Props) {
  return (
    <footer>
      <ul>
        <li>
          <a href="twitter">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
        </li>
        <li>
          <a href="facebook">
            <img src={facebookIcon} alt="facebook icon" />
          </a>
        </li>
        <li>
          <a href="instagram">
            <img src={instagramIcon} alt="instagram icon" />
          </a>
        </li>
        <li>
          <a href="likedin">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a href="github">
            <img src={githubIcon} alt="github icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
