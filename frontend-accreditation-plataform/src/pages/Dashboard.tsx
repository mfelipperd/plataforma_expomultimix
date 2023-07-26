import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from '../styles/dashboard.module.css'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';
import Divider from '@mui/material/Divider';
import { useRouter } from 'next/router';
import apiFunction from "./api/fakeApi";
import { useDispatch } from "react-redux";
import { dataOnStore } from "@/slices/editSlic";
import { useSession } from "next-auth/react";
import TopBar from "@/components/TopBar";
import LogOut from "@/components/Logout";
import { deleteDataApi } from "./api/CRUD/delete";
import columnsDataGrid from "@/shared/columnsDataGrid";
import * as CryptoJS from 'crypto-js';


export default function Home() {
    const router = useRouter()
    const {data: session} = useSession();
    const [disabledButton, setDisabled] = useState(true)
    const [rows, setRows] = useState<any>([])
    const [id, setId] = useState('')
    const dispatch = useDispatch()

    const selectedRow = (data:any) => {
      dispatch(dataOnStore(data))
      setDisabled(false)
      if(data.id){
        setId(data.id);
      }
    }

    const fetchData = async() => {
      const data: any = await apiFunction.get("user");
      const descriptografado = CryptoJS.AES.decrypt(
        data.data,
        'lipnam12',
      ).toString(CryptoJS.enc.Utf8);
      setRows(JSON.parse(descriptografado));
    } 

    const deleteRow = async() => {
      deleteDataApi(id);
      fetchData()
    }
    useEffect(()=> {
      fetchData()
    }, [])
    if(!session) {
      return (
        <>
            <TopBar />
          <div className={styles.dashboard}>
            <Box sx={{
                width: 1000,
                height: 550,
                backgroundColor: "#f6f5f4",
                borderRadius: 2, 
                display: 'flex',
                flexDirection:"column",
                alignItems: 'center',
                justifyContent: 'center',
          }}>
              <Stack spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem />}>
                <Button variant="outlined" onClick={() => router.push('/Create')}>Criação</Button>
                <Button variant="outlined" onClick={() => router.push('/Edit')}disabled={disabledButton}>Edição</Button>
                <Button variant="outlined" type="submit" onClick={deleteRow}disabled={ false
                   /*disabledButton*/}>Deletar</Button>
                <Button variant="outlined" onClick={() => router.push('/checkin')} disabled={disabledButton}>Checkin</Button>
              </Stack>
              <Box sx={{ 
                  height: 400,
                  width: '90%',
                  marginTop: 5,
                  }}>
                <DataGrid
                  rows={rows}
                  columns={columnsDataGrid}
                  pageSize={10}
                  rowsPerPageOptions={[5]}  
                  onRowClick={e => selectedRow(e.row)}
                  components={{
                    Toolbar: GridToolbar,
                  }}
                  
                />
              </Box>
            </Box>
          </div>
        </>
      )
    } else {
      return <LogOut />
    }
  }