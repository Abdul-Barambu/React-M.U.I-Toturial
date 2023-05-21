import React from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

const skills = ["HTML", "CSS", "Javascript", "React", "Java"]

const MuiAutocomplete = () => {
    return (
        <Stack>
            <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label="Skills" />} />
        </Stack>
    )
}

export default MuiAutocomplete
