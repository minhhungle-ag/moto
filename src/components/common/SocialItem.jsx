import React from 'react'
import { Stack, Typography } from '@mui/material'

function SocialItem({ icon, social }) {
  return (
    <Stack direction="row" alignItems="center">
      {icon}{' '}
      <Typography variant="body1" sx={{ ml: 2 }}>
        {social}
      </Typography>
    </Stack>
  )
}

export default SocialItem
