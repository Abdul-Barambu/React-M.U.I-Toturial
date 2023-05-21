import React from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'

const MuiRadioButtons = () => {
  return (
    <Box>
      <FormControl>
        <FormLabel id='job-experience-group-label'>
            Years of Experience
        </FormLabel>
        <RadioGroup name='job-experience-group' aria-label='job-experience-group-label' row>
            <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
            <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
            <FormControlLabel control={<Radio />} label='6-9' value='6-9' />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButtons
