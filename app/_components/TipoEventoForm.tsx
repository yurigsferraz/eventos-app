'use client'
import { useState, useEffect } from "react";
import axios from "axios";

export default function TipoEventoForm() {
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [tipoEventos, setTipoEventos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTipoEventos();
  }, []);

  const fetchTipoEventos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tipo-evento");
      setTipoEventos(response.data);
    } catch (error) {
      console.error("Erro ao buscar tipoEventos:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/tipo-evento", {
        nome,
        codigo,
      });

      console.log(response.data);
      setNome("");
      setCodigo("");
      fetchTipoEventos();
    } catch (error) {
      console.error("Erro ao cadastrar tipoEvento:", error);
    }
  };

  const handleDelete = async (tipoEventoId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/tipo-evento/${tipoEventoId}`);
      console.log(response.data);
      fetchTipoEventos();
    } catch (error) {
      console.error("Erro ao excluir tipoEvento:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded shadow">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
            <label className="block">Código:</label>
            <input
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              className="w-full border"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Enviando..." : "Cadastrar"}
          </button>
        </form>

        <ul className="mt-4">
          {tipoEventos.map((tipoEvento) => (
            <li
              key={tipoEvento.id}
              className="flex items-center justify-between py-2 border-b"
            >
              <div>
                {tipoEvento.nome} - {tipoEvento.codigo}
              </div>
              <button
                onClick={() => handleDelete(tipoEvento.id)}
                className="text-red-500"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
