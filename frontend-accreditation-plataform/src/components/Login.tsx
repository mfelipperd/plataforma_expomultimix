/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from '../styles/login.module.css';
import Button from '@mui/material/Button';
import { checkPasswordIdCorrect, checkEmailExists }  from '../middlewares/loginMiddleware';
import * as EmailValidator from 'email-validator';
//import apiFunction from '../pages/api/fakeApi';
import { authDataLogin } from '@/middlewares/authMiddleware';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState(false);

  const handleSubmit = async () => {
  //   const emailExists = await checkEmailExists(email);
  //   if (!emailExists) { 
  //     setError(true);
  //     return window.alert('Crie uma conta clicando em registrar.');
  //   }
  //   const passwordCheck = await checkPasswordIdCorrect(password);
  //   if (!passwordCheck) {
  //     setError(true);
  //     return window.alert('Senha incorreta!');
  //   }
  //   await authDataLogin(email, password);
    router.push('/Dashboard');
  };

  // const handleRegister = async (email:string, password:string) => {
  //   const isEmailValid = EmailValidator.validate(email);
  //   if (!isEmailValid) return window.alert('Digite um email válido.');
  //   if (password.length < 6) return window.alert('A senha deve conter pelo menos 6 caracteres.');
  //   // const response = await apiFunction.post('users', { email, senha:password });
  //   await authDataLogin(email, password);
  // };

  return (
    <div className={styles.login}>
        <Box sx={{
          width: 300,
          height: 400,
          backgroundColor: '#f6f5f4',
          display: 'flex',
          alignItems:'center',
          justifyContent: 'center', 
          flexDirection: 'column',
          borderRadius: 2, 

        }}>
        <h1>Login</h1>
                <Box sx={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent: 'space-around',
                  marginTop: 2,
                  width:250,

                }}>
                    <Button variant="outlined" onClick={() => { handleSubmit(); }}>Entrar</Button>
                </Box>
                
        </Box>
    </div>
  );
};

export default Login;
