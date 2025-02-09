import express from 'express';
import * as AuthController from '../controllers/auth.controller';
import { protectAuth } from '../middleware/auth-middleware';
const router = express.Router();

// Acess : public
// POST : login
// Params body : username , password
router.post('/login', AuthController.login);

router.post('/register', AuthController.createUser);

router.get('/users', AuthController.getUsers);


// Acess : Private
// POST : logout

router.post('/logout', protectAuth, AuthController.logout);

export default router;
