import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Title from '../../../components/common/Title'

function CustomerMade(props) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
      <Box sx={{ width: { xs: '100%', md: 2 / 3 } }}>
        <Stack direction="row" flexWrap="wrap" sx={{ p: 2, mx: -2 }}>
          <Box
            sx={{
              width: { xs: '100%', sm: 1 / 2 },
              p: 2,
            }}
          >
            <Box boxShadow={3}>
              <Box
                width="100%"
                component="img"
                sx={{ verticalAlign: 'middle' }}
                alt=""
                src="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2021/05/production.jpg"
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', sm: 1 / 2 },
              p: 2,
            }}
          >
            <Box boxShadow={3}>
              <Box
                sx={{ verticalAlign: 'middle' }}
                width="100%"
                component="img"
                alt=""
                src="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/7.jpg"
              />
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ width: { xs: '100%', md: 1 / 3 } }}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Title title="CUSTOM MADE" justifyContent="flex-start" />

          <Typography variant="body2">
            Nulla facilisi. Maecenas venenatis metus leo, ac mollis nisi mattis ut. Nunc sed orci
            sit amet erat tempor rutrum et eget risus. Vestibulum sed odio nec nunc tristique
            tristique et vel purus. Aenean lobortis orci id dui tempus, in ornare justo scelerisque.
          </Typography>

          <Typography variant="body2">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Aenean aliquet orci sed venenatis ornare. Praesent commodo tristique libero, quis
            commodo dui pellentesque quis. Integer euismod dapibus dignissim. Phasellus et tincidunt
            velit.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  )
}

export default CustomerMade
