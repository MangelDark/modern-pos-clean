import { React} from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "styled-components";
import { styled } from "@mui/material/styles";


const Wrapper =  styles.div`

  display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: 1.5fr 1.5fr 1.5fr 4fr 4fr;
  gap:10px;
  height:90%

`;

const ButtonSmall =  styled(Button)(({theme})=>({
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

const ButtonLargen =  styled(Button)(({theme})=>({
  width:'100%',
  height:'100%',
  color:'white',
  fontSize:'11px',
  backgroundColor:'#2F3238',
  borderRadius:'0px',
  textTransform:'none',
  "&:hover":{
    backgroundColor: '#696B6D'
  },
  
  
}));
const GroupButtonOptions = (props) => {
  
    return (
            <Wrapper>
                <ButtonSmall   
                onClick={()=> props.changeValue('setquantity')}
                data-index="setquantity">
                Otra menu de botones
                </ButtonSmall>
                <ButtonSmall>Scan loyalty card</ButtonSmall>
                <ButtonSmall>Change unit of measure</ButtonSmall>
                <ButtonSmall>Issue loyalty card</ButtonSmall>
                <ButtonSmall>Line comment</ButtonSmall>
                <ButtonSmall>Return line</ButtonSmall>
                <ButtonLargen>Gift cards</ButtonLargen>
                <ButtonLargen>Transaction options</ButtonLargen>
                <ButtonLargen>Voids</ButtonLargen>
                <ButtonLargen>Tax overrides</ButtonLargen>
            </Wrapper>
    )
};



export default GroupButtonOptions;
