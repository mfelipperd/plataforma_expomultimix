import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import  styles  from '../styles/checkinMobile.module.css';
import checkinFunction from '../shared/checkinFunction';

export default function Home() {
  const [id, setId] = useState<number>(0);


  return (
    <div className={styles.main}>
    <Stack
    sx={{
      width: '350px',
      height: '350px',
      display:'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'space-around',
      alignItems:'center',
      background:'white',
      borderRadius:'12px',
    
    }}
    >   
      <TextField
      type='number'
        id="filled-basic"
        label="ID do Participante"
        variant="filled"
        onChange={(e) => (setId(parseInt(e.target.value)))}
      />
    <Stack sx={{
      flexDirection: 'column',
      alignContent:'center',
      justifyContent:'space-around',
      width:'90%',
      height: '40%',
    }}>
                <Button variant="outlined" onClick={()=>checkinFunction('1', id)}>Checkin dia 1</Button>
                <Button variant="outlined" onClick={()=>checkinFunction('2', id)}>Checkin dia 2</Button>
                <Button variant="outlined" onClick={()=>checkinFunction('3', id)}>Checkin dia 3</Button>
            </Stack> 
    </Stack>
    </div>
  );
}
