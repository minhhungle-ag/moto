import Radio from '@mui/material/Radio'
import { Box, Stack } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import * as React from 'react'

export default function ColorField({ optionList, label, defaultValue }) {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <RadioGroup defaultValue={defaultValue} name="radio-buttons-group">
        <Stack direction="row">
          {Array.isArray(optionList) &&
            optionList.length > 0 &&
            optionList.map((option, idx) => (
              <FormControlLabel
                key={idx}
                value={option.value}
                sx={{
                  p: 1,
                  border: '1px solid white',
                  borderRadius: '50%',
                }}
                control={
                  <Radio
                    sx={{
                      height: 40,
                      width: 40,
                      color: option.color,
                      bgcolor: option.color,

                      '&.Mui-checked': {
                        border: '4px solid',
                        color: option.color,
                        borderColor: 'primary.main',
                      },

                      '&:hover': {
                        bgcolor: option.color,
                      },
                    }}
                  />
                }
              />
            ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}
