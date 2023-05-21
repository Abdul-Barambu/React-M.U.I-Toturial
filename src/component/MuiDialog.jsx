import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'

const MuiDialog = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Submit Test?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to submit? There will be no edit after submission...
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => setOpen(false)}>Submit</Button>
                </DialogActions>

            </Dialog>
        </>
    )
}

export default MuiDialog
