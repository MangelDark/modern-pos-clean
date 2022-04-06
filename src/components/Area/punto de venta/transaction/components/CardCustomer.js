import React,{useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import styles from '../css/cardCustomer.module.css';
// import PanelListCustomer from './ModalGeneric/PanelListCustomer';


const CardContentNoPadding = styled(CardContent)(`
  padding: 5px;
  &:last-child {
    padding-bottom: 0;
  }
`);
const CardHeaderNoPadding =  styled(CardHeader)(`
  padding:0
`)
const ButtonAddCustomer =  styled(Button)(`

    flex-direction: column;
    width: 100%;
    height:100%;
`);


const CustomerInformation = {
  name:"Karen Berg",
  code:"2001",
  loyaltyCard: 55103,
  balance:"$0.00",
  creditLimit:"$1,500.00",
  photo:"https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
}


const GridSubHeader = styled(Grid)(
  `
    display:grid;
    grid-template-columns: repeat(1);
    grid-template-rows: repeat(2,1fr);
    &:last-child {
      padding-bottom: 0;
    }
  `
)

const SubHeader = ({})=>{

   
  return (
    <>  
    
      <GridSubHeader >
      
        <Typography variant="caption" display="block" >
        {CustomerInformation.code}
      </Typography>
    
      <div>
            <PhoneIcon onClick={()=>{alert("Phone")}}></PhoneIcon>
            <EmailIcon onClick={()=>{alert("Email")}}></EmailIcon>
      </div>
      
       
      </GridSubHeader>
     
     
    </>
  )
  
}
const Title = ({setCustomer,customer,})=>{
   
  return (
    <>  
    
      <div className='titulo'>  
          <Typography variant="h6" component="h2">
          {CustomerInformation.name}
          </Typography>
         {/* <span>{CustomerInformation.name}</span> */}
         <IconButton component="span" size="small" onClick={()=> setCustomer(!customer)} >
         <CloseIcon fontSize="small" />
         </IconButton>

      
      </div>
    </>
  )
  
}
const CuerpoCard = ({setCustomer,customer}) =>{
    return (
      <Card sx={{ width: "35%",height:'100%',borderRadius:0 }}>
            <CardHeaderNoPadding
            avatar={
              <Avatar 
              src={CustomerInformation.photo}   
              sx={{ width: 80, height: 80, paddingLeft:'5px' }}
              aria-label="recipe" 
              variant="square">        
              </Avatar>
            }
        
            titleTypographyProps={{color:"#38D74C"}}
            title={ <Title setCustomer={setCustomer} customer={customer} />}
            subheader={<SubHeader/>}     
          />

      <CardContentNoPadding> 
            <div className={styles['container-body-card']}>
              <div className='item-loyalty-card-label'>
              LOYALTY CARD
              </div>
              <div className={styles['item-loyalty-card-text']}>
              {CustomerInformation.loyaltyCard}
              </div>
              <div className={styles['item-balance-card-label']}>
              BALANCE
              </div>
              <div className={styles['item-balance-card-text']}>
              {CustomerInformation.balance}
              </div>
              <div className={styles['item-credit-card-label']}>
              CREDIT LIMIT
              </div>
              <div className={styles['item-credit-card-text']}>
              {CustomerInformation.creditLimit}
              </div>
            </div>
      </CardContentNoPadding>
      </Card>
    )
}
const CardAddCustomer = ({show,setShow}) => {
  return (
    <Card sx={{ width: "35%",borderRadius:0 }}>
    <ButtonAddCustomer onClick={()=> setShow(!show)} >
       <GroupAddIcon sx={{ fontSize: 40 , textAlign: 'center' }} />
       Agregar un cliente
     </ButtonAddCustomer>
   </Card>
  )
}
const CardCustomer = () => {
  const [show,setShow] = useState(false);


  const [customer,setCustomer] = useState(false);

    useEffect(()=>{
      setCustomer(CustomerInformation)
    },[])
  
  
  return (
    <>
      {
        customer ?  <CuerpoCard setCustomer={setCustomer} customer={customer} /> : <CardAddCustomer show={show} setShow={setShow} />
      }

    {/* <PanelListCustomer show={show} setShow={setShow} ></PanelListCustomer>  */}
    </>
 
  );
}
export default CardCustomer;