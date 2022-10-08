import { Box, Stack, Typography } from '@mui/material'
import Title from '../../../components/common/Title'
import AddToCardForm from './AddToCardForm'

const descriptionList = [
  'Sed rutrum erat sit amet viverra cursus. Proin at posuere libero. Maecenas blandit leo in ullamcorper varius.',
  'Maecenas ullamcorper, purus et pharetra commodo, elit dolor imperdiet dui, sed suscipit nibh tellus non lorem. Integer nec sem ut neque vestibulum maximus vitae in massa.',
  'Nam at justo nec dui fringilla egestas sit amet nec odio. Morbi a ante placerat, aliquam dui eget, pretium est. Donec dictum magna eu diam euismod, sed consectetur urna gravida.',
]

const colorList = [
  {
    color: 'black',
    value: 'black',
  },
  {
    color: 'white',
    value: 'white',
  },
  {
    color: 'blue',
    value: 'blue',
  },
  {
    color: 'red',
    value: 'red',
  },
  {
    color: 'yellow',
    value: 'yellow',
  },
]

const chassisList = [
  { value: 'Aluminium', label: 'Aluminium' },
  { value: 'Carbon fibre', label: 'Carbon fibre' },
]

const optionList = [
  { value: 'Semi Metallic', label: 'Semi Metallic' },
  { value: 'Organic', label: 'Organic' },
  { value: 'Metallic', label: 'Metallic' },
]

function AddToCart() {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Stack spacing={3} sx={{ p: 2, width: '100%' }}>
          <Title title="PERSONALIZED FOR YOU" />

          {descriptionList.map((item, idx) => (
            <Typography variant="body2" key={idx} textAlign="justify">
              {item}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
        <Box sx={{ p: 2 }}>
          <AddToCardForm chassisList={chassisList} colorList={colorList} optionList={optionList} />
        </Box>
      </Box>
    </Stack>
  )
}

export default AddToCart
