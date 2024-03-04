import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HomeBg from '../../assets/HomeBg.svg?react'
import styles from './styles'
import TopBar from '../../components/TopBar'
import { redirect, useNavigate } from 'react-router-dom'


export const WelcomePage = () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/ChattingPage");
    }
    return (
        <>
            <TopBar />
            <Box sx={{ ...styles.topBox }}>
                <HomeBg />
            </Box>
            <Box sx={{ ...styles.bottomBox }}>
                <Typography sx={{ ...styles.welcomeTxt }}>
                    Welcome, User!
                </Typography>
                <Typography sx={{ ...styles.secondaryTxt }}>
                    Receive Career help from ReX!
                </Typography>
                <Typography sx={{ ...styles.thirdTxt }}>
                    Start a conversation with ReX right now!
                </Typography>
                <Button variant='contained' sx={{ ...styles.btn }} onClick={handleClick}>
                    <Typography variant='button' sx={{ ...styles.btnTxt }}>
                        Start Chat with ReX
                    </Typography>
                </Button>
            </Box>
        </>
    )
}
