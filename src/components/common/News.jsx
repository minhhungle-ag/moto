import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

News.propTypes = {}

function News({ title, date, description, thumbnailUrl }) {
  return (
    <Box>
      <Box
        sx={{
          height: 0,
          paddingTop: '56.25%',
        }}
      >
        <Box
          component="img"
          alt=""
          src={thumbnailUrl}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </Box>

      <Typography variant="body2" fontSize={10}>
        {date}
      </Typography>

      <Typography variant="body1">{description}</Typography>
    </Box>
  )
}

export default News
