import React from 'react'
import { AppBar, 
    Box, 
    Toolbar, 
    Typography, 
    IconButton,
} from '@mui/material';
import Stats from '../../assets/Stats.svg?react';
import ReXProfile from '../../assets/ReXProfile.svg?react';
import Settings from '../../assets/Settings.svg?react';
import styles from './styles';
import { useNavigate } from 'react-router-dom';


export const TopBar = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/");
  }
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
           <ReXProfile width='28px' height='28px'/> 
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
            <Stats/>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="stats"
            
          >
            <Settings/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </Box>
  )
}
