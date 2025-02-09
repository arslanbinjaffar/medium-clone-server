import * as BlogService from '../services/blog.service';
import { NextFunction, Request, Response } from 'express';
// import { TUserSchema, userSchema } from '../types/zod';
import { sendSuccessResponse, sendUnauthorizedResponse } from '../utils/responseHandler';

export const list = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const blog = await BlogService.getBloglist();

    if (!blog) {
      return sendUnauthorizedResponse(response, 'Credentials Error');
    }
      return sendSuccessResponse(response, blog);
    
  } catch (error: any) {
    next(error);
  }
};


export const create = async (request: Request, response: Response, next: NextFunction) => { 
    try {
        const blog = await BlogService.createBlog(request.body);
        console.log(blog,"blog")
        if (!blog) {
            return sendUnauthorizedResponse(response, 'Credentials Error');
        }
        return sendSuccessResponse(response, blog);
    } catch (error: any) {
        next(error); 
        console.log(error,"error")
    }
}



export const getBlog = async (request: Request, response: Response, next: NextFunction) => { 
    try {
        const blog = await BlogService.getBlogbyID(request.params.id);
        if (!blog) {
            return sendUnauthorizedResponse(response, 'Credentials Error');
        }
        return sendSuccessResponse(response, blog);
    } catch (error) {
        next(error); 
        
    }
}



export const updateBlogbyID = async (request: Request, response: Response, next: NextFunction) => { 
    try {
        const blog = await BlogService.updateBlogbyID(request.params.id,request.body);
        if (!blog) {
            return sendUnauthorizedResponse(response, 'Credentials Error');
        }
        return sendSuccessResponse(response, blog);
    } catch (error) {
        next(error); 
        
    }
}

export const deleteBlogbyID = async (request: Request, response: Response, next: NextFunction) => { 
    try {
        const blog = await BlogService.deleteBlogbyID(request.params.id);
        if (!blog) {
            return sendUnauthorizedResponse(response, 'Credentials Error');
        }
        return sendSuccessResponse(response, blog);
    } catch (error) {
        next(error); 
        
    }
}


