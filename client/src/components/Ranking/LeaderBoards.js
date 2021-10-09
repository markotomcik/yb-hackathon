import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import afa from '../../media/img/afa.png';
import asd from '../../media/img/asdgfasdg.png';
import OIP from '../../media/img/OIP.png';

export default function LeaderBoards() {
  return (
    <Box>
      <Box style = {{ display: 'flex', flexDirection: 'column', background: 'green', alignItems: 'center', fontSize: '10rem', textAlign:'center', padding: '50px', marginLeft: 'auto', marginRight: 'auto'}}>
        Leader Boards
        <Avatar src={afa} style={{ width: '20rem', height: '20rem'}} />
        <div style={{ fontSize: '5rem' }}>John</div>
      </Box>
      <Box style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10rem', textAlign:'center', padding: '50px', marginLeft: 'auto', marginRight: 'auto'}}>
        <Avatar src={asd} style={{ width: '20rem', height: '20rem' }} />
        <Avatar src={OIP} style={{ width: '20rem', height: '20rem' }} />
      </Box>
    </Box>
  )
}
