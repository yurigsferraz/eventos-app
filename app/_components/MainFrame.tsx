import React from "react";

const MainFrame = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Opções de Eventos</h1>
        <div className="flex flex-col gap-4">
          <a
            href="/cadastro"
            className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded"
          >
            Cadastrar Eventos
          </a>
          <a
            href="/visualizar"
            className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded"
          >
            Visualizar Meus Eventos
          </a><a
            href="/tipo"
            className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded"
          >
            Cadastrar Tipos de Eventos
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainFrame;
