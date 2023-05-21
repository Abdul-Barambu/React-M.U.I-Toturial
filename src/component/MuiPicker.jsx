import React, { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/lab'

const MuiPicker = () => {

    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <Stack spacing={4} sx={{ width: '250px' }}>
            <DatePicker label='Date Picker' renderInput={(params) => <TextField {...params} />}
                value={selectedDate}
                onChange={(newValue) => {selectedDate(newValue)}}
            />
        </Stack>
    )
}

export default MuiPicker
