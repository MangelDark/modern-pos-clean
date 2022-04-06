import {  useRef, useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './css/LoginStyle.module.css';
import TecladoNumerico from '../../utils/TecladoNumerico';
import LoginForm from './components/LoginForm';
import MainModal from "../../utils/MainModal";
import Loading from "../../utils/Loading/Loading";

const Login = () => {

  const [account, setAccount] =  useState('');
  const [password,setPassword] =  useState('');
  const [redirect, setRedirect] =  useState(false);
  const [show,setShow] = useState(false);
  const [requestMessage,setRequestMessage] = useState({ message: '', validation: 0 });
  const [selection, setSelection] = useState();
  const [inputSelection,setInputSelection] = useState({data:''});
  const [message,setMessage] = useState({message:'',show:false,color:''});

  const navigate =  useNavigate();
  //ADMIN
  //USER

 
  //useRef ACCOUNT INPUT
  const inputRefAccount = useRef();
  //useRef PASSWORD INPUT
  const inputRefPassword = useRef();


  useEffect(() => {
    if (!selection) return;  // prevent running on start
    const {start, end} = selection;
    inputSelection.data.focus();
    inputSelection.data.setSelectionRange(start, end);
  }, [selection])


  //metodo de auth
  const login = () => {
    localStorage.setItem("user", JSON.stringify({role: "ADMIN"}));
    navigate("/")
  }
  //elimina cada letra del campo seleccionado desde el teclado numerico
  const deletelast =()=>{
    const { value ,name, selectionStart , selectionEnd } = inputSelection.data;
    if(selectionStart !== undefined && selectionEnd !== undefined )
    {
      let tdata = value.split('');
      tdata.splice((selectionStart-1),1);
      let str =  tdata.toString();
      let formateStr = str.replaceAll(',','');
      setSelection({start: selectionStart-1 , end: selectionEnd-1 });
      if(name === 'account'){
        setAccount(formateStr);
      }else if(name === 'current-password'){
        setPassword(formateStr);
      }
    }
}
  //Limpiar el campo seleccionado desde teclado numerico.
  const clear=()=>{
  const { name } = inputSelection.data;
  const value = '';
  setMessage({show:false});
  if(name === 'account'){
    setAccount(value);
  }else if(name === 'current-password'){
    setPassword(value);
  }
}
  //Validar si a precionado el enter
  const listener = async event => {
    if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Tab") {
      event.preventDefault();
      if(account !== ''){

        setShow(true);
        setRequestMessage({ message:'We are processing your request.', validation: 0 });
        setTimeout( async () => {
          await fetch('http://localhost:8888/api/auth/getaccount?value='+account,{
            method:'GET',
            headers:{'Content-Type':'application/json'},
         }).then( async (response) => {

            if (response.status === 200) {

              const content = await response.json();
              setMessage({show: false});
              setAccount(content.accountEmail);
              inputRefPassword.current.focus();
              
              setRequestMessage({ message:'Valid account.', validation: 200 });
              //Este setTimeout cierra el modal que luego
              setTimeout(() => {
                setShow(false);
              }, 1500);
              return content;
            }
            else if(response.status === 400) {
              setMessage({ message: 'Invalid account.', show: true, color: 'red' });
              setRequestMessage({ message:'Invalid account.', validation: 400 });
              setTimeout(() => {
                setShow(false); 
              }, 2000);   

            }
            else{
              // setShow(false);
              throw new Error('There was a problem communicating with the server.');
            }
          })
          .then(response => {})
          .catch((error) => {
            setRequestMessage({ message:'There was a problem communicating with the server.', validation: 400 });
            setTimeout(() => {
              setShow(false); 
            }, 2000);   
            setMessage({
                  message: `There was a problem communicating with the server.`,
                  show: true,
                  color: 'red'
                });
          });
        }, 1500);
     
      }
      else{
        setMessage({ message: 'The field is required', show: true, color: 'red' });
      }
    }
};

  const getUserData =   async () => {
  const response = await fetch('http://localhost:8888/api/auth/account',{
    headers:{'Content-Type':'application/json'},
    credentials:'include',
  });
  const content = await response.json();
  //Almacena en el localstoge la informacion del usuario.
  localStorage.setItem('user',JSON.stringify({ 
        "accountName": content.accountName,
        "accountEmail": content.accountEmail,
        "accountCode":content.accountCode,
        "accountCodeBar":content.accountCodeBar,
        "role": content.role
      }));   
   setTimeout(() => {
    setRedirect(true)
   }, 3000);
        
}
  //Validamos en que campo esta el usuarios digitando
  const handleSelection =  (e) => {
const inputName = e.target.name;
  if( inputName === 'account'){
    setInputSelection({data:inputRefAccount.current});
  }
  else if(inputName === 'current-password'){
    setInputSelection({data:inputRefPassword.current});
  }
}
  //inserta el valor numerico del tecleado al campo seleccionado.
  const handleInput = (e) => {

const { value ,name, selectionStart , selectionEnd } = inputSelection.data;
const numbervalue = e.target.getAttribute('data-value');

if(selectionStart !== undefined && selectionEnd !== undefined )
{
  let tdata = value.split('');
  tdata.splice(selectionEnd,0,numbervalue)
  const str =  tdata.toString();
  const formateStr = str.replaceAll(',','');
  setSelection({start: selectionStart+1 , end: selectionEnd+1 });
  if(name === 'account'){
    setAccount(formateStr);
  }else if(name === 'current-password'){
    setPassword(formateStr);
  }
}
}
  //Request login authetication account.
  const submitForm = async (e) => {
    e.preventDefault();
    setRequestMessage({ message:'We are processing your request.', validation: 0 });
    setShow(true);
    await  fetch('http://localhost:8888/api/auth/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      credentials:'include',
      body:JSON.stringify({
        account,
        password
      })
   }).then((response) => {
      if (response.ok) {
          
          setRequestMessage({ message:'Valid account.', validation: 200 });
          getUserData();
          setTimeout(() => {
            setShow(false);  
            login();
          }, 2000);
        
      }
      else if(response.status == 400){
        
        setRequestMessage({ message:'Invalid Credential.', validation: 400 })   
        setMessage({
          message: 'Invalid Credential',
          show: true,
          color: 'red'
        }); 
        setTimeout(() => {
          setShow(false); 
        }, 2000);  
      }
      else{
        
        throw new Error('There was a problem communicating with the server.');
      }
    }) 
    .then(response => console.log(response))
    .catch((error) => {
     
      setRequestMessage({ message:'There was a problem communicating with the server.', validation: 400 });
      setTimeout(() => {
        setShow(false); 
      }, 2000);   
      setMessage({
            message: `There was a problem communicating with the server.`,
            show: true,
            color: 'red'
          });
    });
}

  return (

    <div className={styles['login']}>
      <div className={styles["container"]}>
      {/* Este es el modal que se mostrar cuando vaya a iniciar sesion y le mostrar un mensaje de si la conexion fue correcta. */}
          <MainModal show={show}>
            <Loading requestMessage={requestMessage} />
          </MainModal>
          <div className={styles["form-login"]}>
              <LoginForm 
                        submitForm={submitForm}
                        message= {message}
                        setAccount={setAccount}
                        setPassword={setPassword}
                        account={account}
                        password={password}
                        listener={listener}
                        inputRefPassword={inputRefPassword}
                        inputRefAccount={inputRefAccount}
                        handleSelection={handleSelection}

              />
          </div>
          <div className={styles["form-teclado"]}>
            <TecladoNumerico  handleInput={handleInput} deletelast ={deletelast} clear ={clear}/>
          </div>
      </div>
    </div>
  )
}

export default Login