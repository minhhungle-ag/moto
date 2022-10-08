import React from 'react'
import { Box, Typography } from '@mui/material'

function Item({ label, value }) {
  return (
    <Box>
      <Typography variant="body1" fontWeight="bold" sx={{ flexGrow: 1, color: 'white', mb: 1 }}>
        {label}
      </Typography>

      <Typography variant="body2" component="div" fontStyle="italic" textAlign="justify">
        {value}
      </Typography>
    </Box>
  )
}

export default Item
