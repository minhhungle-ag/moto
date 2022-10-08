import { alpha, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Title from '../../../components/common/Title'

const THUMBNAIL_IMAGE =
  'https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/featured.jpg'

function ProductBanner(props) {
  return (
    <Box
      sx={{
        height: 750,
        backgroundImage: `url(${THUMBNAIL_IMAGE})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: { xs: '75%', md: 'center' },
      }}
    >
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-end" height="750px">
        <Box
          sx={{
            width: { sm: 1 / 2, height: '40%' },

            border: '32px solid',
            borderLeft: 0,
            borderBottom: 0,
            borderColor: (theme) => alpha(theme.palette.common.black, 0.3),
          }}
        >
          <Stack
            direction="row"
            sx={{
              p: 3,
              bgcolor: '#202328',
              height: '100%',
            }}
          >
            <Box sx={{ width: 'auto', flexGrow: 1 }} />

            <Stack
              sx={{
                height: '100%',
                maxWidth: 500,
              }}
            >
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 3 }}>
                DIPLOMATIC TT
              </Typography>

              <Typography variant="body2" fontWeight="bold" textAlign="justify" sx={{ mb: 3 }}>
                Nulla facilisi. Maecenas venenatis metus leo, ac mollis nisi mattis ut. Nunc sed
                orci sit amet erat tempor rutrum et eget risus. Vestibulum sed odio nec nunc
                tristique tristique et vel purus. Aenean lobortis orci id dui tempus, in ornare
                justo scelerisque.
              </Typography>

              <Stack direction="row" justifyContent="space-between">
                <Title title="DISCOVER NOW" />

                <Typography variant="body1" fontWeight="bold">
                  $18,000.00
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ flexGrow: 1 }} />
      </Stack>
    </Box>
  )
}

export default ProductBanner
