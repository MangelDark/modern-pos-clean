import { React} from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PublicIcon from '@mui/icons-material/Public';
import PaymentsIcon from '@mui/icons-material/Payments';
import styles from 'styled-components';
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

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      color: "white",
      margin:'5px',
      height:'50px',
      
  }));

  const Wrapper =  styles.div`

  display:grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: 1fr;
  gap:5px;
  height:100%;

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


const GroupButtonPayments = (props) => {
  
    return (
      <Wrapper>             
                <ButtonSmall>
                <PaymentsIcon ></PaymentsIcon>   
                </ButtonSmall>
                <ButtonSmall>
                <CreditCardIcon ></CreditCardIcon>
                </ButtonSmall>
                <ButtonSmall>
                <PauseCircleOutlineIcon ></PauseCircleOutlineIcon>
                </ButtonSmall>
                <ButtonSmall>
                <PublicIcon ></PublicIcon> 
                </ButtonSmall>     
            </Wrapper>
                )
};

export default GroupButtonPayments;
