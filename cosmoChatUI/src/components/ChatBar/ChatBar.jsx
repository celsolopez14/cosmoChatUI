import React from 'react'
import { AppBar, 
    Box, 
    Toolbar, 
    Typography, 
    IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChatSearch from '../../assets/ChatSearch.svg?react';
import ChatSettings from '../../assets/ChatSettings.svg?react';
import styles from './styles';
import { useNavigate } from 'react-router-dom';

export const ChatBar = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/ChattingPage");
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='fixed' color='default' sx={{...styles.appBar}}>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="rexProfile"
                onClick={handleClick}
              >
                <ArrowBackIcon/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{...styles.title}}>
                ReX
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="stats"
                sx={{ mr: 2 }}
              >
                <ChatSearch/>
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="stats"
                
              >
                <ChatSettings/>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar/>
        </Box>
      )
}
