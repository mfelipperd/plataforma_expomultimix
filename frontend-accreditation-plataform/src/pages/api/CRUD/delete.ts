import apiFunction from '../fakeApi';

export const deleteDataApi = async (id: string) => {
  const response = await apiFunction.delete(`user/${id}`);
};
