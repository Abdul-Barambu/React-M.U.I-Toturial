import React from 'react'
import { Stack, Alert, AlertTitle } from '@mui/material'

const MuiAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity='error'>Error message</Alert>
            <Alert variant='filled' severity='warning'>warm  message</Alert>
            <Alert variant='outlined' severity='info'>info  message</Alert>
            <Alert severity='success'>success message</Alert>
        </Stack>
    )
}

export default MuiAlert
