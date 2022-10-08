import { Box } from '@mui/material'
import React from 'react'
import Banner from '../../../components/common/Banner'
import Company from '../components/Company'
import LatestNewsList from '../components/LatestNewsList'
import MeetDiplomaticIt from '../components/MeetDiplomaticIt'

function HomePage(props) {
  return (
    <Box>
      <Box>
        <Banner
          height={600}
          thumbnailUrl="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2021/06/home-hero-1.jpg"
        />
      </Box>

      <Box>
        <Company />
      </Box>

      <Box>
        <MeetDiplomaticIt />
      </Box>

      <Box>
        <LatestNewsList />
      </Box>
    </Box>
  )
}

export default HomePage
