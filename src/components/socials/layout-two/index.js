import React from "react";
import { FiInstagram, FiLinkedin, FiYoutube, FiGithub } from "react-icons/fi";
import Social, { SocialLink } from "../../shared/social";

const SocialOne = ({ social, ...restProps }) => {
  const { instagram, linkedin, github, youtube } = social;
  return (
    <Social {...restProps}>
      {instagram && (
        <SocialLink path={instagram}>
          <FiInstagram />
        </SocialLink>
      )}
      {linkedin && (
        <SocialLink path={linkedin}>
          <FiLinkedin />
        </SocialLink>
      )}
      {youtube && (
        <SocialLink path={youtube}>
          <FiYoutube />
        </SocialLink>
      )}
      {github && (
        <SocialLink path={github}>
          <FiGithub />
        </SocialLink>
      )}
    </Social>
  );
};

SocialOne.defaultProps = {
  mr: "15px",
  width: "34px",
  height: "34px",
  lineHeight: "26px",
  borderWidth: "2px",
  layout: 2,
};

export default SocialOne;
