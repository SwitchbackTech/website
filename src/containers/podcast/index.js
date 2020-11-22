import React from "react";
import LargePlayer from "../../components/podcast/players/large";
import TheTrailheadCTA from "../../components/podcast/trailhead-cta";
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
      <TheTrailheadCTA />

      <Padding />
      <ReviewCTA />
    </PodcastWrapper>
  );
};

export default Podcast;
