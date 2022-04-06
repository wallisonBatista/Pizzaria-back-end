import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

const router = Router();

// ROTAS USER
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

//chamando o middleware e depois chamando a rota
router.get('/me', isAuthenticated, new DetailUserController().handle)

// Rotas Category
router.post("/category", isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

export { router };