import React from 'react'
import styled from 'styled-components';


const Modal =styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.6);
z-index: 1;
display: ${props => props.show ? "block" : "none"}
`;

const Section = styled.section`
position: fixed;
background: white;
width: 30%;
height: auto;
top:50%;
left: 50%;
transform: translate(-50%,-50%);
padding-bottom: 20px;
` ;



const MainModal = ({ show,children}) => {
    const showHideClassName = show ? 'block':'none';

   console.log(show);

  return (
    <Modal show ={show}>
        <Section>
            {children}
        </Section>
    </Modal>
  )
}

export default MainModal;