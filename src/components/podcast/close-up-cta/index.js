import React from "react";
import Emoji from "../../shared/emoji";
import Mailchimp from "../../forms/mailchimp";
import WidgetBox, { WidgetTitle } from "../../shared/widget-box";

const TheCloseUpCTA = ({ widgetStyle }) => {
  return (
    <WidgetBox {...widgetStyle}>
      <WidgetTitle>
        <Emoji label="gift" symbol="🎁"></Emoji>Get <em>The Close Up</em>
      </WidgetTitle>
      <p>
        Everytime an episode is released, we email subscribers exclusive goodies
        like promo codes for the featured product, show links, fun facts,
        recommendations, and favorite quotes. And it's all free - just subscribe
        below and enjoy!{" "}
      </p>
      <Mailchimp />
    </WidgetBox>
  );
};

TheCloseUpCTA.defaultProps = {
  widgetStyle: {
    skin: "primary",
  },
};

export default TheCloseUpCTA;
