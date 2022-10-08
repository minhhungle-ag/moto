import React from 'react'
import { Box } from '@mui/material'
import Video from '../../../components/common/Video'
import Title from '../../../components/common/Title'

function Channel(props) {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Title title="CHANNEL" />
      </Box>

      <Box>
        <Video source="https://www.youtube.com/embed/Dx8CdtLx5Qs" />
      </Box>
    </Box>
  )
}

export default Channel
