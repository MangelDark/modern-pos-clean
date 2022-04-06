import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styles from "styled-components";

import { Typography } from '@mui/material';
   
const Wrapper = styles.div`
 background-color: white;
 display: grid;
 grid-template-columns: repeat(4,1fr);
 grid-template-rows: repeat(5,1fr);
 height:100%;
 padding:10px;

`
  
export default function ComplexGrid() {
  return (
  <Box sx={{width:'70%'}}>
      <Paper sx={{height:'100%'}}>
      <Wrapper className='wrapper'>    
                    <div className='wrapper-item-line'>         
                    <Typography variant='subtitle1' component="h2">LINES</Typography>
                    </div>     
                    <div className='wrapper-item-line-value'>         
                    <Typography variant='subtitle1' textAlign='center' component="h2">$ 10.00</Typography>
                    </div>  
                    <div className='wrapper-item-subtotal'>         
                    <Typography variant='subtitle1' component="h2">SUBTOTAL</Typography>
                    </div>     
                    <div className='wrapper-item-subtotal-value'>         
                    <Typography variant='subtitle1' textAlign='center' component="h2">$ 20.00</Typography>
                    </div>  
                    <div className='wrapper-item-discount'>         
                    <Typography variant='subtitle1' component="h2">DISCOUNT</Typography>
                    </div>     
                    <div className='wrapper-item-discount-value'>         
                    <Typography variant='subtitle1' textAlign='center' component="h2">$ 30.00</Typography>
                    </div>
                    <div className='wrapper-item-tax'>         
                    <Typography variant='subtitle1' component="h2">TAX</Typography>
                    </div>     
                    <div className='wrapper-item-tax-value'>         
                    <Typography variant='subtitle1' textAlign='center' component="h2">$ 40.00</Typography>
                    </div> 
                    <div className='wrapper-item-void'>         
                    <Typography variant='subtitle1' component="h2"></Typography>
                    </div>     
                    <div className='wrapper-item-void-value'>         
                    <Typography variant='subtitle1' textAlign='center' component="h2"></Typography>
                    </div> 
                    <div className='wrapper-item-tax'>         
                    <Typography variant='subtitle1' component="h2">PAYMENT</Typography>
                    </div>     
                    <div className='wrapper-item-tax-value'>         
                    <Typography variant='subtitle1' textAlign='center' component="h2">$ 50.00</Typography>
                    </div> 
                    <div className='wrapper-item-void'>         
                    <Typography variant='subtitle1' component="h2"></Typography>
                    </div>     
                    <div className='wrapper-item-void-value'>         
                    <Typography variant='subtitle1' textAlign='center' component="h2"></Typography>
                    </div> 
                    <div className='wrapper-item-void'>         
                    <Typography variant='subtitle1' component="h2"></Typography>
                    </div>     
                    <div className='wrapper-item-void-value'>         
                    <Typography variant='subtitle1' textAlign='center' component="h2"></Typography>
                    </div> 
                    <div className='wrapper-item-total'>         
                    <Typography variant='subtitle1' component="h2">TOTAL</Typography>
                    </div>     
                    <div className='wrapper-item-void-void'>         
                    <Typography variant='subtitle1' textAlign='center' component="h2"></Typography>
                    </div> 
                    <div className='wrapper-item-void'>         
                    <Typography variant='subtitle1' component="h2"></Typography>
                    </div>     
                    <div className='wrapper-item-total-value'>         
                    <Typography variant='subtitle1' textAlign='center' component="h2">$ 50.00</Typography>
                    </div> 
            </Wrapper>
      </Paper>
  </Box>

    
    

    
  );
}
