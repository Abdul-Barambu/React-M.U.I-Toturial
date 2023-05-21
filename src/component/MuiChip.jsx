import React, {useState} from 'react'
import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

const MuiChip = () => {

    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])
    const handleDelete = (chipToDelete) => {
        setChips(chips => chips.filter(chip => chip !== chipToDelete))
    }
    
    return (
        <Stack direction='row' spacing={1} >
            <Chip label='Chip' color='secondary' size='small' icon={<FaceIcon />}/>
            <Chip label='Chip' color='primary' size='medium'/>
            <Chip label='Chip' color='primary' size='large' variant='outlined' avatar={<Avatar>
                V
            </Avatar>}/>
            <Chip label='click' onClick={() => alert('Clicked')} color='success' />
            <Chip label='delete' onClick={() => alert('Clicked')} onDelete={() => alert('Deleted')} color='error' />

            {
                chips.map(chip => (
                    <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
                ))
            }
        </Stack>
    )
}

export default MuiChip
