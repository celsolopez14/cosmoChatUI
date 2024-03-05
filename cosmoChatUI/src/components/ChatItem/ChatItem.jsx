import ReXProfile from '../../assets/ReXProfile.svg?react'
import ChatBubble from '../../assets/ChatBubble.svg?react'
import { Box, Typography } from '@mui/material'
import styles from './styles'
import { useNavigate } from 'react-router-dom'

export const ChatItem = (props) => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/ChatPage");
  };
  return (
    <Box sx={{...styles.box}} onClick={handleClick}>
      <ReXProfile width='80px' height='80px'/>
      <Box sx={{...styles.chatDetailsBox}}>
      <Typography sx={{...styles.name}}>ReX</Typography>
      <Typography sx={{...styles.message}}>Hello User! I&apos;m ReX</Typography>
      </Box>
      {props.activeChat ? <ChatBubble width='28px' height='28px'/> : <></>}
    </Box>
  )
}
