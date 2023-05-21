import React from 'react'
import { Link, Stack, Typography, Box, Breadcrumbs } from '@mui/material'
import NavigateNextIcon  from '@mui/icons-material/NavigateNext'

const MuiLink = () => {
    return (
        <Stack spacing={4} m={4}>
            <Typography>
                <Link href='#'>Link</Link>
            </Typography>
            <Typography variant='h5'>
                <Link href='#' color='black' underline='none'>Colored</Link>
            </Typography>

            <Box direction='column'>
                <Breadcrumbs separator={<NavigateNextIcon />} maxItems={2}>
                <Link href='#' underline='hover'>Phones</Link>
                <Link href='#' underline='hover'>Laptops</Link>
                <Link href='#' underline='hover'>Watches</Link>
                <Typography>Shoes</Typography>
                </Breadcrumbs>
            </Box>
        </Stack>
    )
}

export default MuiLink
