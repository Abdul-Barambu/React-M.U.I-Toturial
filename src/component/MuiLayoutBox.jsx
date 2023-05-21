import React from 'react'
import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

const MuiLayoutBox = () => {
    return (
        <Paper sx={{padding: '2rem'}} elevation={6}>
            <Stack sx={{ border: '1px solid' }} direction='row'
                spacing={2} divider={<Divider orientation='vertical'
                    flexItem />}>
                <Box sx={{
                    backgroundColor: 'primary.main',
                    color: 'red',
                    height: '100px',
                    width: '100px',
                    padding: '1rem',
                    '&:hover': {
                        backgroundColor: 'primary.light',
                        color: 'yellow'
                    }
                }}>
                    Orellions
                </Box>
                <Box sx={{
                    backgroundColor: 'success.light',
                    height: '100px',
                    width: '100px',
                    padding: '1rem',
                }}>
                </Box>
            </Stack>
            <Grid container my={4}>
                <Grid item>
                    <Box bgcolor='primary.light' p={2} >Item 1</Box>
                </Grid>
                <Grid item>
                    <Box bgcolor='primary.light' p={2}>Item 2</Box>
                </Grid>
                <Grid item>
                    <Box bgcolor='primary.light' p={2}>Item 3</Box>
                </Grid>
                <Grid item>
                    <Box bgcolor='primary.light' p={2}>Item 4</Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default MuiLayoutBox
