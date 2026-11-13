import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GlowUp API — Documentação do TCC',
      version: '1.0.0',
      description: 'Documentação da API RESTful de Autenticação e Gestão do GlowUp (Node.js, Express, TypeScript e MongoDB).',
      contact: {
        name: 'Equipe GlowUp TCC',
        email: 'suporte@glowup-beauty.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Servidor Local de Desenvolvimento'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        UserInput: {
          type: 'object',
          required: ['name', 'email', 'password'],
          properties: {
            name: { type: 'string', example: 'Maria Silva' },
            email: { type: 'string', example: 'maria@email.com' },
            password: { type: 'string', example: 'senha123' }
          }
        },
        LoginInput: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: { type: 'string', example: 'maria@email.com' },
            password: { type: 'string', example: 'senha123' }
          }
        },
        AuthResponse: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Autenticado com sucesso!' },
            token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR...' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string', example: '6617a2b9f1d2e3456789abcd' },
                name: { type: 'string', example: 'Maria Silva' },
                email: { type: 'string', example: 'maria@email.com' },
                skinType: { type: 'string', example: 'Mista' },
                goal: { type: 'string', example: 'Luminosidade' },
                mood: { type: 'string', example: '✨ Radiante' }
              }
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts']
};

export const swaggerSpec = swaggerJSDoc(options);
