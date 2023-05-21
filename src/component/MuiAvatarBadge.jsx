import React from 'react'
import { Stack, Avatar, Badge } from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import ME from '../assets/Me.jpg'

const MuiAvatarBadge = () => {
    return (
        <Stack spacing={4}>
            {/* Avatar */}
            <Stack spacing={4} direction='row'>
                <Avatar>CK</Avatar>
                <Avatar>BG</Avatar>
            </Stack>
            <Stack spacing={4} direction='row'>
                <Avatar sx={{ bgcolor: 'primary.light', width: 60, height: 60 }}>CK</Avatar>
                <Avatar>BG</Avatar>
                <Avatar>
                    <img src={ME} alt="" />
                </Avatar>
            </Stack>

            {/* Bagde */}
            <Stack spacing={4} direction='row'>
                <Badge badgeContent={9}>
                    <CopyIcon />
                </Badge>
            </Stack>
        </Stack >
    )
}

export default MuiAvatarBadge
