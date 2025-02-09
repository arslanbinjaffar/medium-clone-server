import { TCompleteBlog, TBlogCreateSchema } from './../types/zod';
import { db } from '../utils/db.server';

export const getBloglist = async (): Promise<TBlogCreateSchema[] | null> => {
  return db.blog.findMany({
      include: {
        author: true
    }
  });
};

// export const getUserByID = async (id: string): Promise<TloginRequest | null> => {
//   return db.user.findUnique({
//     where: {
//       id: id,
//     },
//     select: {
//       id: true,
//       fullName: true,
//       username: true,
//       email: true,
//     },
//   });
// };

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
//       fullName: true,
//       username: true,
//       email: true,
//     },
//   });
// };

export const createBlog = async (data: TCompleteBlog): Promise<TBlogCreateSchema | null> => {
    return db.blog.create({
        data: {
            ...data,
        }
    });

}

export const getBlogbyID = async (id:string): Promise<TCompleteBlog | any> => {
    return db.blog.findUnique({
        where: {
            id: id
        },
        include: {
            author:true
        }
    })
}


export const updateBlogbyID = async (id:string,data:any): Promise<TCompleteBlog | any> => {
    return db.blog.update({
        where: {
            id: id
        },
        data: {
            ...data,
        },
    })
}

export const deleteBlogbyID = async (id: string): Promise<TCompleteBlog | any> => { 
    return db.blog.delete({
        where: {
            id: id
        }
    })
}