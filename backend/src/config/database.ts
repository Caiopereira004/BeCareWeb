import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/glowup_db';
    const conn = await mongoose.connect(mongoUri);
    console.log(`🍃 MongoDB conectado com sucesso: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Erro ao conectar no MongoDB:', error);
    if (process.env.NODE_ENV !== 'test') {
      process.exit(1);
    }
  }
};

export const disconnectDB = async () => {
  await mongoose.connection.close();
};
