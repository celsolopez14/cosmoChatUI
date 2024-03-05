import React from 'react'
import TopBar from '../../components/TopBar'
import { Button, Grid, Typography, Box } from '@mui/material'
import styles from './styles'
import ChatItem from '../../components/ChatItem'

export const ChattingPage = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <TopBar />
      <Grid container spacing={2} direction={'column'} rowSpacing={2} justifyContent={'center'}>
        <Grid item xs={8}>
          <Typography sx={{ ...styles.firstTitle }}>Active Chats</Typography>
        </Grid>
        <Grid item xs={8}>
          <ChatItem activeChat={true} />
        </Grid>
        <Grid container item xs={8} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography sx={{ ...styles.firstTitle }}>Ended Chats</Typography>
          <Button>
            <Typography sx={{ ...styles.seeAllBtn }}>See All</Typography>
          </Button>
        </Grid>
        <Grid item xs={8} alignItems={'center'}>
          <ChatItem />
          <ChatItem />
          <ChatItem />
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
        <Button variant='contained' sx={{ ...styles.btn }}>
          <Typography variant='button' sx={{ ...styles.btnTxt }}>
            Start Another Chat with ReX
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
