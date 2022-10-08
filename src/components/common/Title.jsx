import React from 'react'
import { Stack, Typography } from '@mui/material'

function Title({ title, justifyContent }) {
  return (
    <Stack direction="row" justifyContent={justifyContent}>
      <Typography variant="h4" sx={{ borderBottom: '2px solid white', pb: 0.5 }}>
        {title}
      </Typography>
    </Stack>
  )
}

export default Title
