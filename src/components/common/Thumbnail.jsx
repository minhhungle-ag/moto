import React from 'react'
import { Box } from '@mui/material'

function Thumbnail({ thumbnailUrl }) {
  return (
    <Box>
      <Box component="img" width="100%" alt="" src={thumbnailUrl} />
    </Box>
  )
}

export default Thumbnail
