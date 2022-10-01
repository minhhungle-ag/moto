import React from 'react'
// import PropTypes from "prop-types";
import { Box, Container, Divider, Stack, Typography } from '@mui/material'

Company.propTypes = {}

function Company(props) {
  return (
    <Box
      sx={{
        py: '120px',
      }}
    >
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
          <Box sx={{ width: { xs: '100%', md: 1 / 3 } }}>
            <Stack spacing={2} sx={{ p: 1 }}>
              <Typography variant="h3">THE COMPANY</Typography>

              <Divider color="white" sx={{ height: '2px' }} />

              <Typography variant="body2">
                Nulla facilisi. Maecenas venenatis metus leo, ac mollis nisi mattis ut. Nunc sed
                orci sit amet erat tempor rutrum et eget risus. Vestibulum sed odio nec nunc
                tristique tristique et vel purus. Aenean lobortis orci id dui tempus, in ornare
                justo scelerisque.
              </Typography>

              <Typography variant="body2">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Aenean aliquet orci sed venenatis ornare. Praesent commodo tristique libero,
                quis commodo dui pellentesque quis. Integer euismod dapibus dignissim. Phasellus et
                tincidunt velit.
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 2 / 3 } }}>
            <Stack direction="row" flexWrap="wrap" sx={{ p: 1, mx: -1 }}>
              <Box sx={{ width: { xs: '100%', md: 1 / 2 }, p: 1 }}>
                <Box
                  width="100%"
                  component="img"
                  alt=""
                  src="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2021/05/production.jpg"
                />
              </Box>

              <Box sx={{ width: { xs: '100%', md: 1 / 2 }, p: 1 }}>
                <Box
                  width="100%"
                  component="img"
                  alt=""
                  src="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/7.jpg"
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Company
