import React from 'react'
import { Stack, Typography } from '@mui/material'

function Description(props) {
  return (
    <Stack spacing={2}>
      <Typography variant="body1" textAlign="justify">
        Praesent vel orci enim. Vestibulum ac tempus orci. Proin vitae luctus est, ac varius felis.
        Morbi augue nibh, iaculis id odio quis, auctor lobortis nulla. Vestibulum nulla risus,
        posuere ac erat vel, tincidunt dictum purus. Pellentesque orci est, ultrices eget nibh eu,
        maximus egestas orci. Nunc feugiat leo ut dolor mollis volutpat.
      </Typography>

      <Typography variant="body1" textAlign="justify">
        Integer non elit pharetra, convallis dolor eu, bibendum nulla. Suspendisse sagittis, tortor
        a gravida tincidunt, tortor nunc fringilla ipsum, at rhoncus dui velit id massa. Duis
        sollicitudin accumsan scelerisque. Aliquam tristique eget tellus eget rhoncus. Cras
        tincidunt sit amet elit vitae iaculis. Aliquam dignissim volutpat massa, id ultricies eros
        aliquet at. Nunc dapibus at ex in pharetra. Morbi vel sem non erat volutpat imperdiet. Sed
        eget metus nec nisi facilisis finibus in eget tellus.
      </Typography>
    </Stack>
  )
}

export default Description
