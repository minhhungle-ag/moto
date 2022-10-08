import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import Gallery from '../../../components/common/Gallery'
import Title from '../../../components/common/Title'

MeetDiplomaticIt.propTypes = {}

function MeetDiplomaticIt(props) {
  return (
    <Box sx={{ py: '120px', bgcolor: '#2e313a' }}>
      <Container>
        <Stack spacing={4}>
          <Typography variant="h3" fontWeight={400} textAlign="center" sx={{ color: '#f4911d' }}>
            MEET THE NEW DIPLOMATIC TT
          </Typography>

          <Typography variant="body1" textAlign="justify">
            Integer non elit pharetra, convallis dolor eu, bibendum nulla. Suspendisse sagittis,
            tortor a gravida tincidunt, tortor nunc fringilla ipsum, at rhoncus dui velit id massa.
            Duis sollicitudin accumsan scelerisque. Aliquam tristique eget tellus eget rhoncus. Cras
            tincidunt sit amet elit vitae iaculis. Aliquam dignissim volutpat massa, id ultricies
            eros aliquet at. Nunc dapibus at ex in pharetra. Morbi vel sem non erat volutpat
            imperdiet. Sed eget metus nec nisi facilisis finibus in eget tellus.
          </Typography>

          <Title title="DISCOVER NOW" justifyContent="center" />

          <Gallery />
        </Stack>
      </Container>
    </Box>
  )
}

export default MeetDiplomaticIt
