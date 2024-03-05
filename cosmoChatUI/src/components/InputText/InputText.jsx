import { Box, Input, TextField } from '@mui/material'
import React from 'react'
import MessageButton from '../../assets/MessageButton.svg?react';

export const InputText = () => {
  return (
   <Box display={'flex'}>
    <input
          type="text"
          id="input-msg"
          placeholder="Type a messsage to ReX..."
          style={{
              marginBottom: 5,
              width: '250px',
              height: '56px',
              padding: '0px 20px',
              borderRadius: '12px',
              border: '1px solid transparent',
              ':focus': {
                  border: '1px solid',
                  borderColor: '#6949FF',
                  backgroundColor:'#6949FF'
              },
              '::placeholder': {
                  fontFamily: 'Urbanist, sans-seriff',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '19.6px',
              },
          }} />
          <MessageButton width="56px" height="56px"/>
   </Box>
  )
}
