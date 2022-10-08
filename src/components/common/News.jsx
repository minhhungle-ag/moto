import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { truncateText } from '../../utils/common'

function News({ title, date, description, thumbnailUrl }) {
  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        cursor: 'pointer',

        '&:hover': {
          '& > h5': {
            color: '#f4911d',
          },
        },
      }}
    >
      <Box
        boxShadow={3}
        sx={{
          position: 'relative',
          height: 0,
          paddingTop: '56.25%',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,

            width: '100%',
            height: '100%',

            backgroundImage: `url(${thumbnailUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </Box>

      <Typography variant="h5">{title}</Typography>

      <Typography variant="body2" fontSize={10}>
        {date}
      </Typography>

      <Typography variant="body1">{truncateText(description, 80)}</Typography>
    </Stack>
  )
}

export default News
