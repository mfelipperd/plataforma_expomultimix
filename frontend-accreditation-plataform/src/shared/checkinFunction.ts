import apiFunction from '../pages/api/fakeApi';

export default function checkinFunction(day: string, iDF: number) {
  let checkinNumber;
  switch (day) {
    case '1':
      checkinNumber = 'checkin1';
      break;
    case '2':
      checkinNumber = 'checkin2';
      break;
    case '3':
      checkinNumber = 'checkin3';
      break;
    default:
      return; // Se day não for 1, 2 ou 3, apenas retornar sem fazer nada.
  }
  
  apiFunction
    .patch(`user/${iDF}`, {
      [checkinNumber]: true,
    })
    .then(() => {
      window.alert('Checkin Realizado com sucesso');
    })
    .catch((error) => {
      // Tratar erros, caso necessário
      console.error(error);
    });
}