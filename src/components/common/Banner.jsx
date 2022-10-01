import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const THUMBNAIL_IMAGE =
  "https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2021/06/home-hero-1.jpg";

Banner.propTypes = {};

function Banner(props) {
  return (
    <Box
      sx={{
        height: 750,
        backgroundImage: `url(${THUMBNAIL_IMAGE})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        // backgroundAttachment: "fixed",
      }}
    />
  );
}

export default Banner;
