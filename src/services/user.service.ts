// import { TuserUpdateSchema } from './../types/zod';
import { db } from '../utils/db.server';
import {  TUserRegisterWrite } from '../types/general';
import { hashPassword } from '../utils/bcryptHandler';


export const getUserByEmail = async (email: string): Promise<any | null> => {
  return db.user.findFirst({
    where: {
      email: email,
    },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });
};

export const getUserByID = async (id: string): Promise<any | null> => {
  return db.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      email: true,
    },
  });
};
export const getUsers = async (): Promise<any | null> => {
  return db.user.findMany();
};
// export const updateUserByID = async (
//   id: string,
//   data: TuserUpdateSchema
// ): Promise<Omit<TloginRequest, 'id'> | null> => {
//   return db.user.update({
//     where: {
//       id: id,
//     },
//     data: data,
//     select: {
//       email: true,
//     },
//   });
// };



export const createUser = async (data: TUserRegisterWrite): Promise<TUserRegisterWrite | null> => {
  const hashedPassword = await hashPassword(data.password);
  
  return db.user.create({
    data: {
      ...data,
      password: hashedPassword
    },
  });
 }