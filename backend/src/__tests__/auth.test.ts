import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../app';
import User from '../models/User';

describe('🧪 Suíte de Testes da API de Autenticação GlowUp (Jest + Supertest)', () => {
  let mongoServer: MongoMemoryServer;

  jest.setTimeout(30000);

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.disconnect();
    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  describe('POST /api/auth/register', () => {
    it('Deve cadastrar um novo usuário e criptografar a senha com Bcrypt', async () => {
      const userData = {
        name: 'Camila Santos',
        email: 'camila@glowup.com',
        password: 'senhaSegura123'
      };

      const res = await request(app)
        .post('/api/auth/register')
        .send(userData);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('token');
      expect(res.body.user.email).toBe(userData.email);

      const dbUser = await User.findOne({ email: userData.email });
      expect(dbUser).not.toBeNull();
      expect(dbUser?.password).not.toBe(userData.password);
      expect(dbUser?.password.startsWith('$2a$') || dbUser?.password.startsWith('$2b$')).toBeTruthy();
    });

    it('Deve retornar erro 400 ao tentar cadastrar o mesmo e-mail duas vezes', async () => {
      const userData = {
        name: 'Camila Santos',
        email: 'camila@glowup.com',
        password: 'senhaSegura123'
      };

      await request(app).post('/api/auth/register').send(userData);
      const res = await request(app).post('/api/auth/register').send(userData);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Este e-mail já está cadastrado!');
    });
  });

  describe('POST /api/auth/login', () => {
    it('Deve realizar o login com sucesso quando as credenciais estiverem corretas', async () => {
      const userData = {
        name: 'Beatriz Costa',
        email: 'beatriz@glowup.com',
        password: 'minhaSenhaForte'
      };

      await request(app).post('/api/auth/register').send(userData);

      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: userData.email,
          password: userData.password
        });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body.user.name).toBe(userData.name);
    });

    it('Deve recusar login com senha incorreta', async () => {
      const userData = {
        name: 'Beatriz Costa',
        email: 'beatriz@glowup.com',
        password: 'minhaSenhaForte'
      };

      await request(app).post('/api/auth/register').send(userData);

      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: userData.email,
          password: 'senhaErrada123'
        });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Senha incorreta!');
    });
  });
});
