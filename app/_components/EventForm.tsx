'use client'
import { useState } from 'react';
import axios from 'axios';

export default function EventForm() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [codigo, setCodigo] = useState('');
  const [maxPessoas, setMaxPessoas] = useState(0);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/events', {
        nome,
        descricao,
        codigo,
        max_pessoas: maxPessoas,
        data,
        hora,
        criadorId: 1, // Substitua pelo ID do criador real
        tipoEventoId: 1, // Substitua pelo ID do tipo de evento real
      });

      console.log(response.data);
      // Faça o redirecionamento ou atualize a lista de eventos, conforme necessário

    } catch (error) {
      console.error('Erro ao cadastrar evento:', error);
      // Trate o erro de forma adequada
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded shadow">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block">Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full border" />
        </div>
        <div className="mb-4">
          <label className="block">Descrição:</label>
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} className="w-full border" />
        </div>
        <div className="mb-4">
          <label className="block">Código:</label>
          <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} className="w-full border" />
        </div>
        <div className="mb-4">
          <label className="block">Máxima quantidade de pessoas:</label>
          <input type="number" value={maxPessoas} onChange={(e) => setMaxPessoas(Number(e.target.value))} className="w-full border" />
        </div>
        <div className="mb-4">
          <label className="block">Data:</label>
          <input type="text" value={data} onChange={(e) => setData(e.target.value)} className="w-full border" />
        </div>
        <div className="mb-4">
          <label className="block">Hora:</label>
          <input type="text" value={hora} onChange={(e) => setHora(e.target.value)} className="w-full border" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
