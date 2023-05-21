import React from 'react'
import { Box, FormControlLabel, Checkbox } from '@mui/material'

const MuiCheck = () => {
  return (
    <Box>
      <FormControlLabel label='Accept Terms and Agreement' 
      control={<Checkbox color='secondary' size='small'/>}  />
    </Box>
  )
}

export default MuiCheck
