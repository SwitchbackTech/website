import React from "react";
import ScriptTag from "react-script-tag";

const SmallPlayer = () => {
  //TODO add sth to get the episode id
  return (
    <>
      <div id="buzzsprout-small-player-144173"></div>
      <ScriptTag
        type="text/javascript"
        src="https://www.buzzsprout.com/144173.js?container_id=buzzsprout-small-player-144173&player=small"
      />
    </>
  );
};

export default SmallPlayer;
