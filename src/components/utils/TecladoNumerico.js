import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

//Estilos personalizados del teclado numerico
const useStyles = makeStyles( theme => ({
    container:{
      opacity: '0.9',
      height: '78%',
      [theme.breakpoints.down(400 + theme.spacing(2)+ 2)]:{
        marginTop:0,
        width:'100%',
        height:'100%'
      }
    },
    div:{
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    avatar:{
      margin:theme.spacing(1),
      backgroundColor: 'primary'
    },
    form:{
       width: '100%',
       marginTop: theme.spacing(2),
       display:"grid",
  
    },
    button:{    
      marginTop:5
    },
    tipografia:{
      color: '#000',
      height:'35%'
    },
    subtitulo:{
      marginTop: theme.spacing(3)
    },
    errorMessage:{
      color: 'red',
      fontSize: '12px',
      marginTop:5,
     
  },
  
    inputTextGrounp:{
      width:'100%',
      display:'grid',
      marginBottom: 20
    },
    inputText:{
      width:'90%%',
      height:'30px',
    },
    labelGround:{
     marginBottom:5
    }
  }));


const ContainerGrid = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  align-content:center;
  width:100%;
  height:100%;
 
  `
const Container  =  styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto;
    gap: 10px;
`;


const TecladoNumerico = ({handleInput,deletelast,clear}) => {

    
    const classes =  useStyles();

   
  return (
    <ContainerGrid>
      <Container>   
      <Button data-value="1"   onClick={handleInput} variant="contained" key={1}>{'1'}</Button>
            <Button data-value="2"   onClick={handleInput} variant="contained" key={2}>{'2'}</Button>
            <Button data-value="3"   onClick={handleInput} variant="contained" key={3}>{'3'}</Button>
            <Button data-value="4"   onClick={handleInput} variant="contained" key={4}>{'4'}</Button>
            <Button data-value="5"   onClick={handleInput} variant="contained" key={5}>{'5'}</Button>
            <Button data-value="6"   onClick={handleInput} variant="contained" key={6}>{'6'}</Button>
            <Button data-value="7"   onClick={handleInput} variant="contained" key={7}>{'7'}</Button>
            <Button data-value="8"   onClick={handleInput} variant="contained" key={8}>{'8'}</Button>
            <Button data-value="9"   onClick={handleInput} variant="contained" key={9}>{'9'}</Button>
            <Button data-value="Clear"   onClick={deletelast} variant="contained" key={10}>{'DEL'}</Button>
            <Button data-value="0"   onClick={handleInput} variant="contained" key={11}>{'0'}</Button>
            <Button data-value="."   onClick={clear} variant="contained" key={12}>{'Clear'}</Button>
        </Container>
    </ContainerGrid>
 
  )
}

export default TecladoNumerico