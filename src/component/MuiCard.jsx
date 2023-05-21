import React from 'react'
import { Box, Card, CardActions, CardContent, Typography, Button, CardMedia } from '@mui/material'

const MuiCard = () => {
    return (
        <Box width='350px'>
            <Card elevation={5}>
                <CardMedia component='img' height='140' image='https://source.unsplash.com/random' alt='splash img' />
                <CardContent>
                    <Typography variant='h2' gutterBottom >React</Typography>
                    <Typography variant='body2'>he UMD links use the latest tag to point to the latest
                        version of the library. This pointer is unstable and subject to change as we release
                        new versions. You should consider pointing to a specific version, such as v5.0.0.</Typography>
                </CardContent>
                <CardActions>
                    <Button size='medium' variant='outlined'>Share</Button>
                    <Button size='medium' variant='contained'>Learm More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard
