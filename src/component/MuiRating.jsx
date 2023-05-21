import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material'

const MuiRating = () => {

    const [value, setValue] = useState(null)
    console.log(value)

    return (
        <Stack>
            <Rating value={value} onChange={e=>setValue(e.target.value)} precision='0.5' highlightSelectedOnly/>
        </Stack>
    )
}

export default MuiRating
