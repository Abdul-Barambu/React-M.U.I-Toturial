import React, { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const MuiTextField = () => {

    const [value, setValue] = useState('')

    return (
        <Stack spacing={3}>
            <Stack spacing={3} direction='row'>
                <TextField label='Name' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <br />
            <Stack spacing={3} direction='row'>
                <TextField label='Name' size='small' inputProps={{ readOnly: true }} />
            </Stack>
            <br />
            <Stack spacing={3} direction='row'>
                <TextField label='Name' size='small' color='success' value={value} required
                    onChange={e => setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'required' : 'Do not share your password'}
                />
                <TextField label='password' size='small' type='password' />
            </Stack>
            <br />
            <Stack spacing={3} direction='row'>
                <TextField label='Amount' size='small' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }} />
                <TextField label='password' size='small' type='password' InputProps={{
                    endAdornment: <InputAdornment position='end'><VisibilityOffIcon /></InputAdornment>
                }} />
            </Stack>
        </Stack>
    )
}

export default MuiTextField
