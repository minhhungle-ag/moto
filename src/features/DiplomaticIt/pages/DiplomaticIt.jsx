import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Thumbnail from '../../../components/common/Thumbnail'
import AddToCart from '../components/AddToCart'
import Channel from '../components/Channel'
import CustomerMade from '../components/CustomerMade'
import Description from '../components/Description'
import HandmadeComponents from '../components/HandmadeComponents'
import ProductBanner from '../components/ProductBanner'

DiplomaticIt.propTypes = {}

function DiplomaticIt(props) {
  return (
    <Box>
      <Box>
        <ProductBanner />
      </Box>

      <Container>
        <Stack spacing="120px" sx={{ py: '120px' }}>
          <Description />

          <Thumbnail thumbnailUrl="https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/bike-silhouette.png" />

          <HandmadeComponents />

          <Channel />

          <CustomerMade />

          <AddToCart />
        </Stack>
      </Container>
    </Box>
  )
}

export default DiplomaticIt
