import { Box, Stack } from '@mui/material'
import React from 'react'

function Gallery(props) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
      <Box sx={{ width: { xs: '100%', md: 1 / 3 } }}>
        <Box sx={{ p: 1 }}>
          <Box
            boxShadow={3}
            sx={{
              position: 'relative',
              paddingTop: '56.25%',
              height: 0,

              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Box
                sx={{ verticalAlign: 'middle', objectFit: 'contain' }}
                width="100%"
                component="img"
                alt=""
                src="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/1.jpg"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: { xs: '100%', md: 1 / 3 } }}>
        <Box sx={{ p: 1 }}>
          <Box
            boxShadow={3}
            sx={{
              position: 'relative',
              paddingTop: '56.25%',
              height: 0,

              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Box
                sx={{ verticalAlign: 'middle', objectFit: 'contain' }}
                width="100%"
                component="img"
                alt=""
                src="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/2.jpg"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: { xs: '100%', md: 1 / 3 } }}>
        <Box sx={{ p: 1 }}>
          <Box
            boxShadow={3}
            sx={{
              position: 'relative',
              paddingTop: '56.25%',
              height: 0,

              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Box
                sx={{ verticalAlign: 'middle', objectFit: 'contain' }}
                width="100%"
                component="img"
                alt=""
                src="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/3.jpg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  )
}

export default Gallery
