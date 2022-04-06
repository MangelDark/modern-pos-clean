import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import AlarmIcon from '@mui/icons-material/Alarm';


const GroupButtonVertical = () => {
  return (
    <Box sx={{ display:'flex', flexDirection: "column"}} >
      <Grid container sx={{gap:'10px'}} >

      <Grid item xs={4} sm={12}  >
        <ItemGroupBottom elevation={0} >
          <ButtonsFour  >
          <Box display='flex' width='100%' alignItems='center' flexDirection="column" >
          <AlarmIcon  sx={{ marginBottom:'5px'}}  />
           ACTIONS  
         </Box>
          </ButtonsFour>
          </ItemGroupBottom>
        </Grid>
        <Grid item xs={4} sm={12}>
        <ItemGroupBottom elevation={0} >
          <ButtonsFour>
          <Box display='flex' alignItems='center' flexDirection="column">
 <AlarmIcon  sx={{ marginBottom:'5px'}}  />          ORDERS
         </Box>
          </ButtonsFour>
          </ItemGroupBottom>
        </Grid>
        <Grid item xs={4} sm={12}>
        <ItemGroupBottom elevation={0} >
          <ButtonsFour>
          <Box display='flex' alignItems='center' flexDirection="column">
          <AlarmIcon  sx={{ marginBottom:'5px'}}  />
          DISCOUNTS
         </Box>
          </ButtonsFour>
          </ItemGroupBottom>
        </Grid>
        <Grid item xs={4} sm={12}>
        <ItemGroupBottom elevation={0} >
          <ButtonsFour>
          <Box display='flex' alignItems='center' flexDirection="column">
          <AlarmIcon  sx={{ marginBottom:'5px'}}  />
          PRODUCTS
         </Box>
          </ButtonsFour>
          </ItemGroupBottom>
        </Grid>
        <Grid item xs={4} sm={12}>
        <ItemGroupBottom elevation={0} >
          <ButtonsFour>
          <Box display='flex' alignItems='center' flexDirection="column">
          <AlarmIcon  sx={{ marginBottom:'5px'}}  />
          UPSELL
         </Box>
        
          </ButtonsFour>
          </ItemGroupBottom>
        </Grid>
        <Grid item xs={4} sm={12}>
        <ItemGroupBottom elevation={0} >
          <ButtonsFour>
          <Box display='flex' alignItems='center' flexDirection="column">
          <AlarmIcon  sx={{ marginBottom:'5px'}}  />
          NUMPAD
         </Box>
          </ButtonsFour>
          </ItemGroupBottom>
        </Grid>
      </Grid>
    </Box>
  );
}


const ButtonsFour =  styled(Button)(({theme})=>({
    width:'100%',
    height:'100%',
    color:'#26282A',
    fontSize:'11px',
    
    borderRadius:'0px',
    textTransform:'none',
    "&:hover":{
      backgroundColor: 'gray'
    },
    
  }));
  
    const ItemGroupBottom = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      color: "white",
     
     
    
      
    }));
  


    export default GroupButtonVertical;