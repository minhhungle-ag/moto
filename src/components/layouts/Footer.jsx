import React from "react";
// import PropTypes from "prop-types";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { AppBar, Box, Container, Stack, Typography } from "@mui/material";
Footer.propTypes = {};

function Footer(props) {
  return (
    <AppBar
      component="footer"
      position="static"
      sx={{ bgcolor: "primary.light" }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ p: 2 }}
        >
          <CopyrightIcon />
          <Typography variant="body1">
            {` ${new Date().getFullYear()}. Power by Minh Hung Le`}
          </Typography>
        </Stack>
      </Container>
    </AppBar>
  );
}

export default Footer;
