import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ColorField from '../../../components/formField/ColorField'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputField } from '../../../components/formField/InputField'
import { SelectField } from '../../../components/formField/SelectField'
import * as yup from 'yup'

const schema = yup.object({
  amount: yup
    .number()
    .typeError('Amount is required and must be more than 0')
    .integer('Amount must be integer')
    .moreThan(0, 'Amount is required and must be more than 0'),
})

function AddToCardForm({ colorList, chassisList, optionList }) {
  const [selectedChassis, setSelectedChassis] = useState({
    idx: 0,
    label: chassisList[0].label || '',
    value: chassisList[0].label || '',
  })

  const { control, handleSubmit } = useForm({
    defaultValues: {
      brake_pads: 'Metallic',
      amount: 1,
      color: 'black',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  })

  function handleFormSubmit(formValues) {
    const data = {
      brake_pads: formValues.brake_pads,
      amount: formValues.amount,
      color: formValues.color,
      chassis: selectedChassis.value,
    }

    console.log('formValues: ', data)
  }

  function handleChassisChange({ item, idx }) {
    setSelectedChassis({
      idx: idx,
      label: item.label,
      value: item.value,
    })
  }

  return (
    <Stack spacing={2} component="form" noValidate onSubmit={handleSubmit(handleFormSubmit)}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Color
        </Typography>

        <ColorField name="color" control={control} optionList={colorList} />
      </Box>

      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Chassis
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          {chassisList.map((item, idx) => (
            <Button
              variant="outlined"
              key={idx}
              color="inherit"
              onClick={() => handleChassisChange({ item, idx })}
              sx={{ borderColor: selectedChassis.idx === idx ? 'primary.main' : 'inherit' }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
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

      <Button type="submit" variant="contained">
        Add to cart
      </Button>
    </Stack>
  )
}

export default AddToCardForm
