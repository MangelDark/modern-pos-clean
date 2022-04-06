import styled from '@emotion/styled'
import { fontFamily, height } from '@mui/system';
import React from 'react'




const Container = styled('div')({
  textAlign:"center",
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  fontFamily:'Nunito, sans-serif',
  backgroundColor: '#1a202c',
  height:'100vh'
});

const Title = styled('h1')({
   alignSelf:"center",
   fontSize:"22px",
   color:'lightgray'
});
const NotFound = () => {
  return (
    <Container >
          <Title>404 | NOT FOUND</Title>
    </Container>
  )
}

export default NotFound