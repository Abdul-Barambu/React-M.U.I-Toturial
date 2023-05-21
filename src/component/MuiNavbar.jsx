import React from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const MuiNavbar = () => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <CatchingPokemonIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{flexGrow: '1'}}>POKEMONAPP</Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>About</Button>
                        <Button color='inherit'>Product</Button>
                        <Button color='inherit'>Contact</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MuiNavbar
