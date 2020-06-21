import React from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import Social, { SocialLink } from "../../shared/social";

const SocialOne = ({ social, ...restProps }) => {
  const {instagram, linkedin, youtube } = social;
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
    </Social>
  );
};

SocialOne.defaultProps = {
  pr: "27px",
};

export default SocialOne;
