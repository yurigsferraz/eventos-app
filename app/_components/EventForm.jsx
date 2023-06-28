'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default function EventForm() {
  const [nome, setNome] = useState("");
  const [tipoEventoId, setTipoEventoId] = useState("");
  const [tipoEventos, setTipoEventos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTipoEventos();
  }, []);

  const fetchTipoEventos = async () => {
    try {
      const response = await axios.get("https://eventos-backend.vercel.app/tipo-evento");
      setTipoEventos(response.data);
    } catch (error) {
      console.error("Erro ao obter os tipos de evento:", error);
      // Trate o erro de forma adequada
    }
  };

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post("https://eventos-backend.vercel.app/events/", {
        nome,
        tipoEventoId: parseInt(tipoEventoId),
      });

      console.log(response.data);
      // Faça algo com a resposta, se necessário
    } catch (error) {
      console.error("Erro na solicitação:", error);
      // Trate o erro de forma adequada
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded shadow">
        <div className="mb-4">
          <label className="block">Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border"
          />
        </div>
        <div className="mb-4">
          <label className="block">Tipo de Evento:</label>
          <select
            value={tipoEventoId}
            onChange={(e) => setTipoEventoId(e.target.value)}
            className="w-full border"
          >
            <option value="">Selecione o tipo de evento</option>
            {tipoEventos.map((tipoEvento) => (
              <option key={tipoEvento.id} value={tipoEvento.id}>
                {tipoEvento.nome}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleClick}
          disabled={isLoading}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}
