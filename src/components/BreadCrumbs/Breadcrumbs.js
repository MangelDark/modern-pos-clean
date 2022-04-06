import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';


const BreadcrumbStyled = styled(Breadcrumbs)(({theme})=>{

})
const Breadcrumb = () => {
  return (
    <BreadcrumbStyled separator=" " sx={{fontSize:'23px'}} aria-label="breadcrumb" paddingBottom="5px">
            <Link underline="hover" color="text.primary" href="#">Lines</Link>
            <Link underline="hover" color="inherit" href="#">Payments</Link>     
    </BreadcrumbStyled>
  );
};

export default Breadcrumb;
