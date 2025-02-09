import express from 'express';
import * as BlogController from '../controllers/blog.controller';
// import { protectAuth } from '../middleware/auth-middleware';
// import { protectAuth } from '../middleware/auth-middleware';
const router = express.Router();

// Acess : public
// POST : login
// Params body : username , password
// router.post('/create', AuthController.validateLoginData, AuthController.login);

// Acess : Private
// POST : logout

router.get('/list',  BlogController.list);
router.post('/create', BlogController.create);
router.patch('/update/:id', BlogController.updateBlogbyID);
router.delete('/delete/:id', BlogController.deleteBlogbyID);

router.get('/:id',BlogController.getBlog);






export default router;
