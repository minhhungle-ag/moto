import React from 'react'
import { Box } from '@mui/material'
import Banner from '../../../components/common/Banner'
import Company from '../components/Company'
import MeetDiplomaticIt from '../components/MeetDiplomaticIt'

function HomePage(props) {
  return (
    <Box>
      <Box>
        <Banner />
      </Box>

      <Box>
        <Company />
      </Box>

      <Box>
        <MeetDiplomaticIt />
      </Box>
    </Box>
  )
}

export default HomePage
