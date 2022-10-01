import React from 'react'
// import PropTypes from "prop-types";
import CopyrightIcon from '@mui/icons-material/Copyright'
import { Box, Container, Stack, Typography } from '@mui/material'
Footer.propTypes = {}

function Footer(props) {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.light' }}>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
          <CopyrightIcon />
          <Typography variant="body1">
            {` ${new Date().getFullYear()}. Power by Minh Hung Le`}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
