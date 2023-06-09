import apiFunction from '@/pages/api/fakeApi';
const zero = 0;
const checkEmailExists = async (email: string): Promise<boolean> => {
  const response = await apiFunction.get(`users?email=${email}`);
  if (response.data.length === 0) return false;
  return true;
};

const checkPasswordIdCorrect = async (password: string): Promise<boolean> => {
  const response = await apiFunction.get(`users?senha=${password}`);
  if (response.data.length === 0) return false;
  return true;
};

export { checkEmailExists, checkPasswordIdCorrect };
