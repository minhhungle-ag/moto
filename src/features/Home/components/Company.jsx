import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";

Company.propTypes = {};

function Company(props) {
  return (
    <Box
      sx={{
        py: "120px",
      }}
    >
      <Container>
        <Stack>
          <Box sx={{ width: { xs: "100%", sm: 1 / 2 } }}>
            <Box sx={{ p: 1 }}>
              <Typography variant="h6">THE COMPANY</Typography>

              <Divider />

              <Typography variant="body1">
                Nulla facilisi. Maecenas venenatis metus leo, ac mollis nisi
                mattis ut. Nunc sed orci sit amet erat tempor rutrum et eget
                risus. Vestibulum sed odio nec nunc tristique tristique et vel
                purus. Aenean lobortis orci id dui tempus, in ornare justo
                scelerisque.
              </Typography>

              <Typography variant="body1">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Aenean aliquet orci sed venenatis ornare.
                Praesent commodo tristique libero, quis commodo dui pellentesque
                quis. Integer euismod dapibus dignissim. Phasellus et tincidunt
                velit.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", sm: 1 / 2 } }}>
            <Box sx={{ p: 1 }}></Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Company;
