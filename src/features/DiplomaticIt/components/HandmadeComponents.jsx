import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Item from '../../../components/common/Item'
import Title from '../../../components/common/Title'

const firstThumbnailUrl =
  'https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/4.jpg'

const secondThumbnailUrl =
  'https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2020/11/5.jpg'

const firstContentList = [
  {
    label: 'BRAKES',
    value:
      'Ut ac ultrices est. Sed sollicitudin, ligula ac sodales luctus, libero neque scelerisque mauris, in efficitur eros urna ut massa. Etiam in ligula sed mi fringilla condimentum. Sed convallis rutrum sagittis.',
  },

  {
    label: 'SUSPENSION',
    value:
      'Cras tincidunt sit amet elit vitae iaculis. Aliquam dignissim volutpat massa, id ultricies eros aliquet at. Nunc dapibus at ex in pharetra. Morbi vel sem non erat volutpat imperdiet. Sed eget metus nec nisi facilisis finibus in eget tellus.',
  },

  {
    label: 'WHEELS',
    value:
      'Nulla ante justo, hendrerit at malesuada nec, viverra ac felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse id mi molestie, posuere neque ac, pretium arcu. Sed eros tortor, vulputate ultricies velit non, lobortis tempor turpis. Aliquam ornare ac magna sed scelerisque.',
  },
]

const secondContentList = [
  {
    label: 'BUILD',
    value:
      'Proin finibus dolor tellus, in tincidunt nisl gravida et. Duis urna quam, semper ac pulvinar et, vestibulum vitae justo. Proin sit amet tellus posuere, cursus lectus sed, laoreet quam. Suspendisse commodo ac lectus vel fermentum. Cras iaculis lacinia eleifend. Curabitur quis lacus urna.',
  },

  {
    label: 'CHASIS',
    value:
      'Nulla fermentum nibh sed lacus volutpat sollicitudin. Aliquam eget tellus molestie, volutpat risus ut, auctor ligula. In vitae nisl sed nisl porta scelerisque eget nec est. Maecenas ornare ac sem quis lobortis. Suspendisse potenti.',
  },

  {
    label: 'POWERTRAIN',
    value:
      'Fusce luctus diam purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vehicula ultrices feugiat. Nulla eu velit magna. Nullam gravida tempor luctus. Sed eget varius leo. Nam efficitur lectus eu ante sollicitudin consectetur.',
  },
]

function HandmadeComponents(props) {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Title title="HANDMADE COMPONENTS" />
      </Box>

      <Stack direction="row" flexWrap="wrap" sx={{ mx: -2, mb: 4 }}>
        <Box
          sx={{
            width: { xs: '100%', md: 1 / 2 },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box boxShadow={3}>
              <Box
                component="img"
                width="100%"
                alt=""
                src={firstThumbnailUrl}
                sx={{ verticalAlign: 'middle' }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
          <Stack sx={{ p: 2 }} spacing={3}>
            {firstContentList.map((item, idx) => (
              <Item key={idx} label={item.label} value={item.value} />
            ))}
          </Stack>
        </Box>
      </Stack>

      <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
        <Box sx={{ width: { xs: '100%', md: 1 / 2 }, order: { xs: 2, md: 1 } }}>
          <Stack sx={{ p: 2 }} spacing={3}>
            {secondContentList.map((item, idx) => (
              <Item key={idx} label={item.label} value={item.value} />
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: 1 / 2 },
            order: { xs: 1, md: 2 },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box boxShadow={3}>
              <Box
                component="img"
                width="100%"
                alt=""
                src={secondThumbnailUrl}
                sx={{ verticalAlign: 'middle' }}
              />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default HandmadeComponents
