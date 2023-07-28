import { useAppSelector } from '../shared/hook';

import style  from '../styles/etiqueta.module.css';
import { useRouter } from 'next/router';

export default function etiqueta() {
  const data = useAppSelector((state) => state.edit.value);
  const router = useRouter();

  if (!data) return (
    <div>
      <h1>
        USUÁRIO NÃO SELECIONADO
      </h1>
      <button type='button' onClick={() => router.push('/Dashboard')}>Dashboard</button>
    </div>
  );

  return (
        <div className={style.impDiv}>
            <h1>{ data.name ? data.name : 'nome' }</h1>
            <h1>{ data.enterpriseName ? data.enterpriseName : 'nome da empresa' }</h1>
            <h2 className={style.h2}>{ data.id ? data.id : '77' }</h2>
            <button type='button' onClick={() => router.push('/Dashboard')}>LISTA</button>
        </div>
  );
}
