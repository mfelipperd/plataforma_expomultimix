import { useAppSelector } from '../shared/hook';

import style  from '../styles/etiqueta.module.css';
import { useRouter } from 'next/router';

export default function etiqueta() {
  let data = useAppSelector((state) => state.edit.value);
  const router = useRouter();
  if (!data) {
    return data = {
      name:'não disponivel',
      enterpriseName: 'não disponivel',
      id:0,
    };
  }
  const { name, enterpriseName, id }  = data;

  return (
        <div className={style.impDiv}>
            <script src="https://www.dymo.com/JavaScript/DYMO.Label.Framework.latest.js"></script>
            <h1>{ name }</h1>
            <h1>{ enterpriseName }</h1>
            <h2 className={style.h2}>{ id }</h2>
            <button type='button' onClick={() => router.push('/Dashboard')}>LISTA</button>
        </div>
  );
}
