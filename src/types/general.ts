import {  User } from '@prisma/client';


// _____________  User Types  _____________
export type TUserRegisterWrite = Omit<User, 'createdAt' | 'updatedAt'>;
export type TloginRead = Omit<User, 'createdAt' | 'updatedAt'>;
export type TloginRequest = Omit<User, 'createdAt' | 'updatedAt' | 'password'>;


export type TUserSchema = Omit<User, 'createdAt' | 'updatedAt'>;
