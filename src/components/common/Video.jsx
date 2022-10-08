import React from 'react'
import { Box } from '@mui/material'
import ReactPlayer from 'react-player'

function Video({ source = '', muted = true, playing = true }) {
  return (
    <Box
      sx={{
        position: 'relative',
        paddingTop: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: (theme) => theme.shadows[10],
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
        <ReactPlayer
          style={{
            verticalAlign: 'middle',
            objectFit: 'contain',
          }}
          playing={playing}
          width="100%"
          height="100%"
          url={source}
          controls
          muted={muted}
        />
      </Box>
    </Box>
  )
}

export default Video
