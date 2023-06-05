import { useAppSelector } from "./hook";
import style  from '../styles/etiqueta.module.css'
import { useRouter } from "next/router";

export default function etiqueta() {
    const data = useAppSelector((state) => state.edit.value)
    const router = useRouter()

    return(
        <div className={style.impDiv}>
            <script src="https://www.dymo.com/JavaScript/DYMO.Label.Framework.latest.js"></script>
            <h1>{data.name}</h1>
            <h1>{data.enterpriseName}</h1>
            <h2 className={style.h2}>{data.id}</h2>
            <button type='button' onClick={() => router.push('/Dashboard')}>LISTA</button>
        </div>
    )
};
