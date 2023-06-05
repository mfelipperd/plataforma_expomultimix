import { Button, Container, Stack } from "@mui/material";
import { useAppSelector } from "./hook";
import apiFunction from "./api/fakeApi";
import { useRouter } from "next/router";


export default function Checkin() {
    const router = useRouter()
    const data = useAppSelector((state) => state.edit.value)

    function checkinFunction(day:string){
        if(day === '1'){
            apiFunction.patch(`user/${data.id}`,{
            checkin1: true
        })
        window.alert('Checkin Realizado com sucesso')
        }
        if(day === '2'){
        apiFunction.patch(`user/${data.id}`,{
            checkin2: true
        })
        window.alert('Checkin Realizado com sucesso')
        }
        if(day === '3'){
            apiFunction.patch(`user/${data.id}`,{
            checkin3: true
        })
        window.alert('Checkin Realizado com sucesso')
        }
        router.push('/etiqueta')
    }

    return(
        <Container
        maxWidth="xl"
        sx={{
            height:'100vh',
            display:'flex',
            alignItems: 'center',
            justifyContent:'center',
            flexDirection:'column'

        }}>
            <Stack
            sx={{
                display:'felx',
                flexDirection: 'column',
                width:'50%',
                height:100,
                alignContent:'center',
                justifyContent:'center',
                textAlign:"center"
                }}
            >
                <h1>{data.name}</h1>
                <h2>{data.id}</h2>
            </Stack>
            
            <Stack sx={{
                flexDirection: 'row',
                width:'50%',
                alignContent:'center',
                justifyContent:'space-between'
                }}>
                <Button variant="outlined" onClick={()=>checkinFunction('1')}>Fazer Checkin dia 1</Button>
                <Button variant="outlined" onClick={()=>checkinFunction('2')}>Fazer Checkin dia 2</Button>
                <Button variant="outlined" onClick={()=>checkinFunction('3')}>Fazer Checkin dia 3</Button>
            </Stack>
        </Container>
    )
}