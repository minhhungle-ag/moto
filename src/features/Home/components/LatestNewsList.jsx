import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import News from '../../../components/common/News'
import Title from '../../../components/common/Title'

const newList = [
  {
    thumbnailUrl:
      'https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2021/06/20-696x464.jpg',
    title: 'SOMETHING FOR EVERYONE',
    date: 'June 7, 2021',
    description:
      'The Vintage Choppers European Cup is a new championship for riders aged 12-20, and is the ideal first step for young riders on the...',
  },
  {
    thumbnailUrl:
      'https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2021/06/19-696x460.jpg',
    title: 'THE TÉNÉRÉ SPIRIT',
    date: 'June 7, 2021',
    description:
      'The Vintage Choppers European Cup is a new championship for riders aged 12-20, and is the ideal first step for young riders on the...',
  },
  {
    thumbnailUrl:
      'https://demo.tagdiv.com/newspaper_shop_vintage_choppers_store/wp-content/uploads/2021/06/18-696x548.jpg',
    title: 'THE 2019 ET TOUR',
    date: 'June 7, 2021',
    description:
      'The Vintage Choppers European Cup is a new championship for riders aged 12-20, and is the ideal first step for young riders on the...',
  },
]

function LatestNewsList(props) {
  return (
    <Box
      sx={{
        py: '120px',
      }}
    >
      <Container>
        <Box>
          <Box sx={{ mb: 4 }}>
            <Title title="LATEST NEWS" textAlign="flex-start" />
          </Box>

          <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
            {newList.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  width: { xs: '100%', sm: 1 / 2, md: 1 / 3 },
                }}
              >
                <Box sx={{ px: 1, py: 2 }}>
                  <News
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    thumbnailUrl={item.thumbnailUrl}
                  />
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default LatestNewsList
