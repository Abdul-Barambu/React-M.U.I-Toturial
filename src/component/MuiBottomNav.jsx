import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const MuiBottomNav = () => {

    const [value, setValue] = useState(0)

  return (
    <BottomNavigation sx={{ width: '100%', positon: 'absolute', bottom: 0 }} 
    value={value} 
    onChange={(event, newValue) => {setValue(newValue)}}
    showLabels
    >
      <BottomNavigationAction label='Home' icon={<CopyIcon />} />
      <BottomNavigationAction label='Favorites' icon={<PrintIcon />} />
      <BottomNavigationAction label='Share' icon={<ShareIcon />} />
    </BottomNavigation>
  )
}

export default MuiBottomNav
