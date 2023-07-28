/* eslint-disable @typescript-eslint/no-unused-vars */
import { signIn } from 'next-auth/react';

export const authDataLogin = async (email:string, password:string) => {
  const result = await signIn('credentials', {
    email: email,
    password: password,
    redirect:true,
    callbackUrl:'/Dashboard',
  });
};