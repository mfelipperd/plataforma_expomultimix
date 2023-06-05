import FormatData from '@/interfaces/dataFormated';
import apiFunction from '../fakeApi';

export const editProductApi = async (data: FormatData) => {
  const response = await apiFunction.put(`products/${data.id}`, data);
};
