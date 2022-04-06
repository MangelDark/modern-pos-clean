import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';


const LoginForm = ({
  submitForm,
  message,
  setAccount,
  setPassword,
  account,
  password,
  listener,
  inputRefPassword,
  inputRefAccount,
  handleSelection

}) => {
  
const classes =  useStyles();
  return (
    <> 
            <Typography  components='h1' variant='h3' className={classes.tipografia} >Sing in</Typography>
            <form className={classes.form} onSubmit={submitForm}>  
            <div  className={classes.inputTextGrounp}>
            <label className={classes.labelGround}>Account</label>  
            <input
                placeholder='Account'           
                onChange={((e)=> setAccount(e.target.value))}
                className={classes.inputText}      
                required
                name="account"
                value={account}
                onKeyDown={listener}
                ref={inputRefAccount}
                onSelect={ (e)=> handleSelection(e)}
               
            />
                {
                 message.show && <span className={classes.errorMessage} style={{color:`${message.color}`}}>{message.message}</span>
                }
            </div> 
            <div  className={classes.inputTextGrounp}>
            <label className={classes.labelGround}>Password</label>  
            <input
                placeholder='Password'
                type='password'
                name="current-password"
                onChange={((e)=> setPassword(e.target.value))}
                className={classes.inputText}
                required
                value={password}
                ref={inputRefPassword}
                onSelect={ (e)=> handleSelection(e)}
            />
               
            </div>
                {/* Usamos un grid para alinear el boton a lado derecho del formulario*/}
                <Grid container justifyContent='flex-end' alignContent='flex-end'  className={classes.button}>
                    
                    <Button 
                        variant='contained'
                        color='success'                                 
                        type='submit'
                                >
                    Sign in
                    </Button>        
                </Grid> 
            </form>
           
    </>
  )
}

const useStyles = makeStyles( (theme,colorErrorMessage) => ({
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
      height:'22.5%'
    },
    subtitulo:{
      marginTop: theme.spacing(3)
    },
    errorMessage:{
     
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
  
export default LoginForm