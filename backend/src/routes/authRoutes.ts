import { Router } from 'express';
import { register, login } from '../controllers/authController';

const router = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Realiza o cadastro de um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso e senha hash criada com Bcrypt
 *       400:
 *         description: E-mail já existente ou dados inválidos
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Realiza o login de um usuário cadastrado
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Login autorizado com retorno do token JWT
 *       400:
 *         description: Senha incorreta
 *       404:
 *         description: Usuário não encontrado
 */
router.post('/login', login);

export default router;
