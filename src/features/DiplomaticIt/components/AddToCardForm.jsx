import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import ColorField from '../../../components/formField/ColorField'

import { InputField } from '../../../components/formField/InputField'
import { SelectField } from '../../../components/formField/SelectField'

function AddToCardForm({ colorList, chassisList, optionList }) {
  const { control, handleSubmit } = useForm({
    mode: 'all',
    defaultValue: {
      brake_pads: 'Metallic',
      amount: 0,
    },
  })

  function handleFormSubmit(formValues) {
    //
  }

  return (
    <Stack spacing={2} component="form" noValidate onSubmit={handleSubmit(handleFormSubmit)}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Color
        </Typography>

        <ColorField optionList={colorList} defaultValue="black" />
      </Box>

      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Chassis
        </Typography>

        {/* <Stack direction="row" alignItems="center" spacing={2}>
          {chassisList.map((item, idx) => (
            <Button variant="outlined" key={idx} color="inherit">
              {item.label}
            </Button>
          ))}
        </Stack> */}
      </Box>

      <Box>
        <Typography variant="body2">Brake pads</Typography>

        <SelectField optionList={optionList} control={control} name="brake_pads" />
      </Box>

      <Box>
        <Typography variant="body2">Amount</Typography>

        <InputField control={control} name="amount" type="number" />
      </Box>

      <Divider />

      <Button variant="outlined">Add to card</Button>
    </Stack>
  )
}

export default AddToCardForm
