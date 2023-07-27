/* eslint-disable import/extensions */
import FormatData from '@/interfaces/dataFormated';
import apiFunction from '../fakeApi';

export const createNewProduct = async (formatData: FormatData) => {
  const response = await apiFunction.post('products', formatData);
};
