import React from 'react'
import { Button, Typography, Box, Grid } from '@mui/material'
import { ChatBar } from '../../components/ChatBar/ChatBar'
import ReXProfile from '../../assets/ReXProfile.svg?react';
import styles from './styles'
import InputText from '../../components/InputText';

export const ChatPage = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <ChatBar/>
      <Grid container spacing={2} direction={'column'} rowSpacing={1} justifyContent={'center'}>
        <ReXProfile width="140px" height="110.63px"/>
        <Grid item xs={8} sx={{marginRight:'auto', paddingLeft:2}}>
          <Typography sx={{...styles.rexMsgs}}>Hello User! I&apos;m ReX</Typography>
        </Grid>
        <Grid item xs={8} sx={{marginRight:'auto', paddingLeft:2}}>
          <Typography sx={{...styles.rexMsgs}}>What aspect of your career would you like guidance on?</Typography>
        </Grid>
        <Grid item xs={8} sx={{marginLeft:'auto', paddingRight:2}}>
          <Typography sx={{...styles.userMsgs}}>I&apos;m thinking about changing my job, but I&apos;m not sure where to start.</Typography>
        </Grid>
      </Grid>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          zIndex: 1,
        }}
      >
        <InputText/>
      </Box>
    </Box>
  )
}
