import ReXProfile from '../../assets/ReXProfile.svg?react'
import ChatBubble from '../../assets/ChatBubble.svg?react'
import { Box, Typography } from '@mui/material'
import styles from './styles'

export const ChatItem = (props) => {
  return (
    <Box sx={{...styles.box}}>
      <ReXProfile width='80px' height='80px'/>
      <Box sx={{...styles.chatDetailsBox}}>
      <Typography sx={{...styles.name}}>ReX</Typography>
      <Typography sx={{...styles.message}}>Hello User! I&apos;m ReX</Typography>
      </Box>
      {props.activeChat ? <ChatBubble width='28px' height='28px'/> : <></>}
    </Box>
  )
}
