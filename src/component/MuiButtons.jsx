import React, {useState} from 'react'
import { Stack, Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButtons = () => {

    return (
        <Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="text">Text</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>
            <br />
            <Stack spacing={2} direction='column'>
                <Button variant="contained" color='primary'>Text</Button>
                <Button variant="contained" color='secondary'>contained</Button>
                <Button variant="contained" color='error'>contained</Button>
                <Button variant="contained" color='warning'>contained</Button>
                <Button variant="contained" color='info'>contained</Button>
                <Button variant="contained" color='success'>contained</Button>
            </Stack>
            <br />
            <Stack spacing={2} direction='row'>
                <Button variant="outlined" color='primary' onClick={() => alert("Icon Button Clicked")}><SendIcon /></Button>
                <Button variant="outlined" color='secondary'>contained</Button>
                <Button variant="outlined" color='error'>contained</Button>
                <Button variant="outlined" color='warning'>contained</Button>
                <Button variant="outlined" color='info'>contained</Button>
                <Button variant="outlined" color='success'>contained</Button>
            </Stack>
            <br />
            <Stack display='block' spacing={2} direction='row'>
                <Button variant="contained" color='primary' size='small'>Text</Button>
                <Button variant="contained" color='secondary' size='medium'>contained</Button>
                <Button variant="contained" color='error' size='large'>contained</Button>
            </Stack>
            <br />
            <Stack direction='row'>
                <ButtonGroup variant='contained' orientation='vertical'>
                    <Button>Text</Button>
                    <Button>contained</Button>
                    <Button>contained</Button>
                </ButtonGroup>
            </Stack>
            <br />
            <Stack direction='row'>
                <ToggleButtonGroup arial-label='text formatting'>
                    <ToggleButton value='bold' arail-label='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic' arail-label='italic'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='underlined' arail-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiButtons
