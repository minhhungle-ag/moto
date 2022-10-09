import { Stack, Tooltip } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import * as React from 'react'
import { useController } from 'react-hook-form'

export default function ColorField({ name, control, optionList, label }) {
  const [selectedIdx, setSelectedIdx] = React.useState(0)

  const {
    field: { value, onChange, onBlur, ref },
  } = useController({
    name,
    control,
  })

  function handleChange(idx) {
    setSelectedIdx(idx)
  }

  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={ref}
        value={value || optionList[0]?.value || ''}
      >
        <Stack direction="row">
          {Array.isArray(optionList) &&
            optionList.length > 0 &&
            optionList.map((option, idx) => (
              <Tooltip title={option.color} arrow>
                <FormControlLabel
                  onClick={() => handleChange(idx)}
                  key={idx}
                  value={option.value}
                  sx={{
                    p: 1,
                    border: '2px solid',
                    borderRadius: '50%',
                    borderColor: selectedIdx === idx ? 'grey.100' : 'grey.700',

                    '&:hover': {
                      borderColor: 'grey.300',
                    },
                  }}
                  control={
                    <Radio
                      sx={{
                        height: 22,
                        width: 22,

                        color: option.color,
                        bgcolor: option.color,

                        '&.Mui-checked': {
                          color: option.color,
                        },

                        '&:hover': {
                          bgcolor: option.color,
                        },
                      }}
                    />
                  }
                />
              </Tooltip>
            ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}
