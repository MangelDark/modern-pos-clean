import { React, useState} from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// import ModalPrinterCodeBar from './ModalGeneric/ModalPrinterCodeBar';
// import ModalPrinterText from './ModalGeneric/ModalPrinterText';
// import ModalSubirArchivo from './ModalGeneric/ModalSubirArchivo';


const Buttons =  styled(Button)(({theme})=>({
    width:'100%',
    height:'100%',
    color:'white',
    fontSize:'11px',
    backgroundColor:'#10A060',
    borderRadius:'0px',
    textTransform:'none',
    "&:hover":{
      backgroundColor: '#0A6A40'
    }
    
  }));

  const ButtonClosed =  styled(Button)(({theme})=>({
    width:'100%',
    height:'100%',
    color:'white',
    fontSize:'11px',
    borderRadius:'0px',
    textTransform:'none',
    "&:hover":{
      backgroundColor: '#0A6A40'
    }
    
  }));

  const ButtonsTree =  styled(Button)(({theme})=>({
    width:'100%',
    height:'100%',
    color:'white',
    fontSize:'11px',
    backgroundColor:'#2F3238',
    borderRadius:'0px',
    textTransform:'none',
    "&:hover":{
      backgroundColor: '#696B6D'
    }
    
  }));
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      color: "white",
      margin:'5px',
      height:'50px',
  }));
  const ItemGroup = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      color: "white",
      margin:'5px',
      height:'100px',
  }));
  
const GroupButtonPanel = (props) => {

 
  const [estadoPanel1,cambiarEstadoPanel1] = useState(false)
  const [estadoPanel2,cambiarEstadoPanel2] = useState(false)
  const [estadoPanel3,cambiarEstadoPanel3] = useState(false)
  
    return (
      <>
         <Grid container >   
            <Grid item xs={12}>
            <ItemGroup elevation={0} >
              <ButtonsTree onClick={()=> cambiarEstadoPanel1(!estadoPanel1)} key='Panel CodeBar'>
                  Pantalla modal para imprimir codigo de barra
                  </ButtonsTree>
              </ItemGroup>              
            </Grid> 
            <Grid item xs={6}>
            <ItemGroup elevation={0} onClick={()=> cambiarEstadoPanel2(!estadoPanel2)} key='Panel Text' >
              <ButtonsTree>
                  Panel Print only text
              </ButtonsTree>
              </ItemGroup>
            </Grid> 
            <Grid item xs={6}>
            <ItemGroup elevation={0} onClick={()=> cambiarEstadoPanel3(!estadoPanel3)} key='Panel Text' >
              <ButtonsTree>
              Panel Print file upload
              </ButtonsTree>
              </ItemGroup>
            </Grid> 
            <Grid item xs={6}>
            <ItemGroup elevation={0} >
              <ButtonsTree>Example
                  </ButtonsTree>
              </ItemGroup>
            </Grid> 
            <Grid item xs={6}>
            <ItemGroup elevation={0} >
              <ButtonsTree>Example
                  </ButtonsTree>
              </ItemGroup>
            </Grid> 
            <Grid item xs={6}>
            <Item elevation={0} >
              <ButtonClosed variant="contained" data-index="Volver" 
              onClick={()=> props.changeValue('main')}
              >Volver
             </ButtonClosed>
              </Item>
            </Grid> 
            <Grid item xs={6}>
            <Item elevation={0} >
              <Buttons >Example
             </Buttons>
              </Item>
            </Grid> 
          </Grid>
          {/*Panel*/}
          {/* <ModalPrinterCodeBar estado={estadoPanel1} cambiarEstado={cambiarEstadoPanel1} ></ModalPrinterCodeBar>
          <ModalPrinterText estado={estadoPanel2} cambiarEstado={cambiarEstadoPanel2} ></ModalPrinterText>
          <ModalSubirArchivo estado={estadoPanel3} cambiarEstado={cambiarEstadoPanel3} ></ModalSubirArchivo>
           */}
      </>
       
   
      );
};

export default GroupButtonPanel;
