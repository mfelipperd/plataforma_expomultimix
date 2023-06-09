import React, { useState } from 'react';
import Head from 'next/head'
import type {} from '@mui/x-date-pickers/themeAugmentation';
import FormDyna from '@/components/form';
import { useAppSelector } from './hook';
import DataCreate from '@/interfaces/dataCreate';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { editProductApi } from './api/CRUD/edit';
import { formatDataFunction } from '@/middlewares/formtData';



export default function Home() {
  const {data: session} = useSession();
  const router = useRouter()
  const data = useAppSelector((state) => state.edit.value)

  function FormatDate(data:string) {
    var day  = data.split("/")[0];
    var month  = data.split("/")[1];
    var year  = data.split("/")[2];
  
    return year + '-' + ("0"+month).slice(-2) + '-' + ("0"+day).slice(-2);
  }

  const values = {
    name: data.name,
    fabricationData: FormatDate(data.fabricationDate),
    pericive: data.perecive,
    validate: data.validate,
    price: data.price
  }

  const editFunction = async (values: DataCreate) => {
    editProductApi(formatDataFunction(values, data.id)); 
    router.push('/Dashboard')
  } 

  const editForm = <>
  <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <FormDyna 
    title="EDITAR PRODUTOS"
    btnName="editar"
    func={ editFunction }
    values={ values }
    />
</>
  if(data){
    return editForm
  } else {
    return router.push('/Dashboard')
  }
}