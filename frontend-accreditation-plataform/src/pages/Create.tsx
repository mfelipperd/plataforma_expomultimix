/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/extensions */
'use client';
import {  Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import style from '../styles/page.module.css';
import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';
import { cnpj as cnpjFormat } from 'cpf-cnpj-validator';
import { isValidCNPJ } from 'js-cnpj-validation';
import Image from 'next/image';
import apiFunction from './api/fakeApi';
import { useDispatch } from 'react-redux';
import * as CryptoJS from 'crypto-js';
import { useRouter } from 'next/router';
import { dataOnStore } from '@/slices/editSlic';

export default function Home() {
  const [name, setName] = useState('Nome');
  const [email, setEmail] = useState('Email');
  const [phone, setPhone] = useState('Telefone');
  const [cnpj, setCnpj] = useState('Cnpj');
  const [enterpriseName, setEnterPriseName] = useState('Nome da Empresa');
  const [city, setCity] = useState('Cidade/Estado');
  const [sector, setSector] = useState('Setor');
  const [marketing, setMarketing] = useState('Como soube da feira?');
  const [disabled, setDisabled] = useState(true); 
  const [sucessed, setSucessed] = useState(false);
  const [id, setId] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  function handleChange(e: { target: { checked: any; }; }) {

    const checked = e.target.checked;
    checked ? setDisabled(false) : setDisabled(true);
  }
  
  async function handleSubmit() {

    
    if (!name || name === 'Nome') {
      return setName('');
    }

    const emailValidator = EmailValidator.validate(email);
    if (!emailValidator || !email ) {
      return setEmail('');
    }

    if (phone.length !== 11 || !phone || phone === 'Telefone') {
      return setPhone('');
    }

    const cnpjFormated = cnpjFormat.format(cnpj);
    const isValid = isValidCNPJ(cnpjFormated);
    if (!isValid || !cnpj ) {
      return setCnpj('');
    }

    if (!enterpriseName || enterpriseName === 'Nome da Empresa') {
      return setEnterPriseName('');
    }

    if (!city || city === 'Cidade/Estado') {
      return setCity('');
    }

    if (!sector || sector === 'Setor') {
      return setSector('');
    }

    if (!marketing || marketing === 'Como soube da feira?') {
      return setMarketing('');
    }

    const data = {
      name,
      email, 
      phone, 
      cnpj,
      enterpriseName, 
      city, 
      sector,
      marketing,
    };

    const response = await apiFunction.post('user', data);
    const descriptografado = CryptoJS.AES.decrypt(
      response.data,
      'lipnam12',
    ).toString(CryptoJS.enc.Utf8);
    const result = JSON.parse(descriptografado);
    setId(result.id);
    dispatch(dataOnStore(result));
    setSucessed(true);
  }

  function checkinFunction(day:string) {
    if (day === '1') {
      apiFunction.patch(`user/${id}`, {
        checkin1: true,
      });
      window.alert('Checkin Realizado com sucesso');
    }
    if (day === '2') {
      apiFunction.patch(`user/${id}`, {
        checkin2: true,
      });
      window.alert('Checkin Realizado com sucesso');
    }
    if (day === '3') {
      apiFunction.patch(`user/${id}`, {
        checkin3: true,
      });
      window.alert('Checkin Realizado com sucesso');
    }
    router.push('/etiqueta');
  }

  const link = <a href="https://www.expomultimix.com/">termos de uso</a>;
  const terms = `Sim, eu aceito os ${link}`;

  const form = <div className={style.maxWidth}>
      <Stack
      component="form"
      sx={{
        width: 380,
        height: 750,
      }}
      spacing={1}
      noValidate
      autoComplete="off"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={'white'}                             
      borderRadius={2}
      marginTop={10}
      marginBottom={10}
      >
        <Image src="/logo.png" alt="logo expomm" width={80} height={80} />
        <TextField id="filled-basic" label="Nome" variant="filled" error={!name ? true : false} required={!name ? true : false} onChange={(e) => setName(e.target.value)} />
        <TextField id="filled-basic" label="Email" variant="filled" error={!email ? true : false} required={!email ? true : false} onChange={(e) => setEmail(e.target.value)} type="email"/>
        <TextField id="filled-basic" label="Telefone" variant="filled" error={!phone ? true : false} required={!phone ? true : false} onChange={(e) => setPhone(e.target.value)} type="tel"/>
        <TextField id="filled-basic" label="CNPJ" variant="filled" onChange={(e) => setCnpj(e.target.value)} error={!cnpj ? true : false} required={!cnpj ? true : false} />
        <TextField id="filled-basic" label="Nome da Empresa" variant="filled" error={!enterpriseName ? true : false} required={!enterpriseName ? true : false} onChange={(e) => setEnterPriseName(e.target.value)}/>
        <TextField id="filled-basic" label="Cidade/Estado" variant="filled" error={!email ? true : false} required={!email ? true : false} onChange={(e) => setCity(e.target.value)}/>

      <FormControl sx={{ m: 1, width: 230 }}>
        <InputLabel id="demo-simple-select-label">Setor</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sector}
          label={sector}
          error={!sector ? true : false} required={!sector ? true : false}
          onChange={(e) => setSector(e.target.value as string)}
>
            <MenuItem value={'Utilidades Domesticas'}>Utilidades Domesticas</MenuItem>
            <MenuItem value={'Brinquedos'}>Brinquedos</MenuItem>
            <MenuItem value={'Puericultura'}>Puericultura</MenuItem>
            <MenuItem value={'Festas'}>Festas</MenuItem>
            <MenuItem value={'Descartaveis'}>Descartaveis</MenuItem>
            <MenuItem value={'Variedades'}>Variedades</MenuItem>
            <MenuItem value={'Decoração'}>Decoração</MenuItem>
            <MenuItem value={'Moda'}>Moda</MenuItem>
            <MenuItem value={'Confecções'}>Confecções</MenuItem>
            <MenuItem value={'Calçados'}>Calçados</MenuItem>
            <MenuItem value={'Outro'}>Outro</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 230 }}>
        <InputLabel id="marketing">Como soube da feira?</InputLabel>
        <Select
          labelId="marketing"
          id="marketing"
          value={marketing}
          label="Como soube da feira?"
          error={!marketing ? true : false} required={!marketing ? true : false}
          onChange={(e) => setMarketing(e.target.value as string)}
>
            <MenuItem value={'google'}>Google</MenuItem>
            <MenuItem value={'facebook'}>Facebook</MenuItem>
            <MenuItem value={'instagram'}>Instagram</MenuItem>
            <MenuItem value={'whatsapp'}>Whatsapp</MenuItem>
            <MenuItem value={'outros'}>Outros</MenuItem>
        </Select>
      </FormControl>
      <Stack
      sx={{
        width: 240,
        height: 90,
      }}
      > 
        <label htmlFor="checkbox">
        <input type="checkbox" onChange={(e) => handleChange(e)}/>
        Sim, eu aceito os
        <a href="https://www.expomultimix.com/pol%C3%ADtica-de-privacidade/" target="_blank"> Termos de uso</a>
        </label>
        <Button variant="contained" onClick={handleSubmit} disabled={disabled} > Cadastrar</Button>
      </Stack>
      </Stack>
    </div>;
  const sucess = <div className={style.maxWidth}>
<Stack
component="form"
sx={{
  width: 380,
  height: 670,
}}
spacing={1}
noValidate
autoComplete="off"
display="flex"
alignItems="center"
justifyContent="center"
bgcolor={'white'}                             
borderRadius={2}
marginTop={10}
marginBottom={10}
>
  <Stack
  sx={{
    width: 320,
  }}
  >
  </Stack>
  <Stack
  display={'flex'}
  alignItems={'center'}
  justifyContent={'space-evenly'}
  flexDirection={'row'}
  width={250}
  paddingBottom={5}
  >
  </Stack>
  <h1>Inscrição confirmada</h1>
  <Button variant="outlined" onClick={()=>checkinFunction('1')}>Fazer Checkin dia 1</Button>
                <Button variant="outlined" onClick={()=>checkinFunction('2')}>Fazer Checkin dia 2</Button>
                <Button variant="outlined" onClick={()=>checkinFunction('3')}>Fazer Checkin dia 3</Button>
</Stack>
</div>;
  return sucessed ? sucess : form;
}
