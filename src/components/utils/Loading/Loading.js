import React from 'react';
import loadingStyle from './css/loading.module.css';
import successStyle from './css/checkSuccess.module.css';
 
const Loading = ({requestMessage}) => {
 
  return (
    <>

        {
          requestMessage.validation == 0 
          ? 
              <div className={loadingStyle["loader"]}>Loading...</div> 
          : requestMessage.validation == 200  
          ?
              <div className={successStyle["wrapper"]}> 
                <svg className={successStyle["checkmark"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className={successStyle["checkmark__circle"]} cx="26" cy="26" r="25" fill="none" />
                  <path className={successStyle["checkmark__check"]} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>
          : requestMessage.validation == 400  
          ?  
              <div className={successStyle["wrapper"]}>
              <div  className={successStyle["checkmark"]}>
                  <img src='images/icons/cancelar/icons8-error.gif' width='60px' height='60px' alt='Error icon'/>
              </div>
              </div>
            : null
        } 
        <div>
          <h2 style={{textAlign:"center",color:'black'}}>{requestMessage.message}</h2>
        </div>
    </>
  )
}

export default Loading