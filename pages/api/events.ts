import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, descricao, codigo, max_pessoas, data, hora, criadorId, tipoEventoId } = req.body;

    try {
      const evento = await prisma.evento.create({
        data: {
          nome,
          descricao,
          codigo,
          max_pessoas,
          data,
          hora,
          criadorId,
          tipoEventoId,
        },
      });

      res.status(200).json({ message: 'Evento cadastrado com sucesso', evento });
    } catch (error) {
      console.error('Erro ao cadastrar evento:', error);
      res.status(500).json({ message: 'Erro ao cadastrar o evento' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
