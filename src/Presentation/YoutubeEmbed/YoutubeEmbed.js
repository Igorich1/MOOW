import React from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed.css'
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
        border-radius="15px"

      width="700"
      height="350"
      src="https://www.youtube.com/embed/RAjg8_z53CY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
