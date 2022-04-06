import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import styles from  '../css/cardCustomerDetails.module.css';


const CustomerInformation = {
  name:"Karen Berg",
  code:"2001",
  loyaltyCard: 55103,
  balance:"$0.00",
  creditLimit:"$1,500.00",
  photo:"https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
}

const CardContentNoPadding = styled(CardContent)(`
  padding: 5px;
  &:last-child {
    padding-bottom: 0;
  }
`);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const CardCustomerDetails = () => {
  return (
    <Card  sx={{ width: "65%" , borderRadius:0 }}>
    

      <CardContentNoPadding>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={1} md={{flexDirection:'column'}} >
        <Grid item xs={3}>
          <Typography variant='subtitle1'>LINES</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='subtitle1' textAlign={'right'}>$ 1.0</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='subtitle1'>SUBTOTAL</Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography variant='subtitle1' textAlign={'right'}>$ 1.0</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='subtitle1'>DISCOUNTS</Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography variant='subtitle1' textAlign={'right'}>$ 1.0</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='subtitle1'>TAX</Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography variant='subtitle1' textAlign={'right'}>$ 1.0</Typography>
        </Grid>
        <Grid item xs={6}>
        <Item elevation={0} style={{color:'white'}}>VACIO</Item>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='subtitle1'>PAYMENTS</Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography variant='subtitle1' textAlign={'right'}>$ 1.0</Typography>
        </Grid>
        <Grid item xs={12}>
          <Item elevation={0} style={{color:'white'}} >VACIO</Item>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='subtitle1'>TOTAL</Typography>
        </Grid>
   
        <Grid item xs={6}>
        <Typography variant='subtitle1' textAlign={'right'}>$ 1.0</Typography>
        </Grid>
      </Grid>
    </Box>
            {/* <div className={styles['container-body-Details']}>
              <div className={styles['item-lines-label']}><p>LINES</p></div>
              <div className={styles['item-lines-text']}><p>$100.00</p></div>
              <div className={styles['item-subtotal-label']}><p>SUBTOTAL</p></div>
              <div className={styles['item-subtotal-text']}><p>$2500.00</p></div>
              <div className={styles['item-discount-label']}><p>DISCOUNTS</p></div>
              <div className={styles['item-discount-text']}><p>$500.00</p></div>
              <div className={styles['item-tax-label']}><p>TAX</p></div>
              <div className={styles['item-tax-text']}><p>$150000.00</p></div>
              <div className={styles['item-payment-label']}><p>PAYMENTS</p></div>
              <div className={styles['item-payment-text']}><p>$6.00</p></div>
              <div className={styles['item-total-label']}><p>TOTAL</p></div>
              <div className={styles['item-total-text']}><p>$2000.00</p></div>
            </div> */}
       
      </CardContentNoPadding>
  
    </Card>
  );
}

export default CardCustomerDetails;