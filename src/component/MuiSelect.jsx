import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const MuiSelect = () => {

    const [country, setCountry] = useState('')
    console.log(country)

    return (
        <Box width='250px'>
            <TextField label='Select Country...' select value={country} onChange={e => setCountry(e.target.value)} fullWidth>
                <MenuItem value='NG'>Nigeria</MenuItem>
                <MenuItem value='NI'>Niger</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect
