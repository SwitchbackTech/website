import React from "react";
import LargePlayer from "../../components/podcast/players/large";
import TheCloseUpCTA from "../../components/podcast/close-up-cta";
import { PodcastWrapper, Padding } from "./podcast.stc";
import ReviewCTA from "../../components/podcast/review-cta/index";
import PodcastAbout from "../../components/podcast/about/index";

const Podcast = () => {
  return (
    <PodcastWrapper>
      <PodcastAbout />

      <Padding />
      <LargePlayer />

      <Padding />
      <TheCloseUpCTA />

      <Padding />
      <ReviewCTA />
    </PodcastWrapper>
  );
};

export default Podcast;
