import React, { useState, forwardRef } from 'react'
import { Snackbar, Button, Alert, AlertProps } from '@mui/material'

const SnackbarAlert = forwardRef(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

const MuiSnackBar = () => {

    const [open, setOpen] = useState(false)
    const handleClose = (e, reason) => {
        if (reason === 'Clickaway') {
            return
        }
        setOpen(false)
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            {/* <Snackbar
                message='form submitted successfully!!!'
                autoHideDuration={5000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center'
                }}
            /> */}

            <Snackbar autoHideDuration={5000} open={open} onClose={handleClose}>
                <SnackbarAlert onClose={handleClose} severity='success'>
                    Form submitted successfully!!!
                </SnackbarAlert>
            </Snackbar>
        </>
    )
}

export default MuiSnackBar
