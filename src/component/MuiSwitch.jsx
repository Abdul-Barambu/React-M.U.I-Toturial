import React, { useState } from 'react'
import {Box, FormControlLabel, Switch} from '@mui/material'

const MuiSwitch = () => {

    const [checked, setChecked] = useState(false)

    const handleChange = e => {
        setChecked(e.target.value)
    }

  return (
    <Box className = { checked ? 'body' : 'normal'}>
      <FormControlLabel label='Dark mode' control={<Switch  checked={checked} onChange={handleChange}/>} 
           
      />
    </Box>
  )
}

export default MuiSwitch
