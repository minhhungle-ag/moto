import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'

MeetDiplomaticIt.propTypes = {}

function MeetDiplomaticIt(props) {
  return (
    <Box sx={{ py: '120px', bgcolor: 'primary.light' }}>
      <Container>
        <Stack spacing={4}>
          <Typography variant="h3" fontWeight={400} textAlign="center" sx={{ color: '#f4911d' }}>
            MEET THE NEW DIPLOMATIC TT
          </Typography>

          <Typography variant="body1">
            Integer non elit pharetra, convallis dolor eu, bibendum nulla. Suspendisse sagittis,
            tortor a gravida tincidunt, tortor nunc fringilla ipsum, at rhoncus dui velit id massa.
            Duis sollicitudin accumsan scelerisque. Aliquam tristique eget tellus eget rhoncus. Cras
            tincidunt sit amet elit vitae iaculis. Aliquam dignissim volutpat massa, id ultricies
            eros aliquet at. Nunc dapibus at ex in pharetra. Morbi vel sem non erat volutpat
            imperdiet. Sed eget metus nec nisi facilisis finibus in eget tellus.
          </Typography>

          <Stack direction="row" justifyContent="center">
            <Typography
              variant="h5"
              textAlign="center"
              sx={{ borderBottom: '2px solid white', pb: 0.5 }}
            >
              DISCOVER NOW
            </Typography>
          </Stack>

          <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }} alignItems="center">
            <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
              <Box sx={{ p: 2 }}>
                <Box sx={{}}>
                  <Box
                    width="100%"
                    borderRadius="4px"
                    component="img"
                    alt=""
                    src="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/1.jpg"
                  />
                </Box>
              </Box>
            </Box>

            <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
              <Stack spacing={4} sx={{ p: 2 }}>
                <Box>
                  <Box
                    width="100%"
                    borderRadius="4px"
                    component="img"
                    alt=""
                    src="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/2.jpg"
                  />
                </Box>

                <Box
                  sx={{
                    height: 0,
                    paddingTop: '56.25%',
                    position: 'relative',
                    borderRadius: '4px',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '4px',
                    }}
                    component="iframe"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Dx8CdtLx5Qs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default MeetDiplomaticIt
