import React from "react";

const EventViewer = () => {
  // Simulando dados de eventos
  const events = [
    {
      id: 1,
      name: "Evento 1",
      description: "Descrição do Evento 1",
      code: "EVNT1",
      maxAttendees: 50,
      date: "2023-06-30",
      time: "10:00",
    },
    {
      id: 2,
      name: "Evento 2",
      description: "Descrição do Evento 2",
      code: "EVNT2",
      maxAttendees: 100,
      date: "2023-07-05",
      time: "14:30",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Eventos Cadastrados</h1>
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-8 mb-4 rounded shadow"
          >
            <h2 className="text-xl font-bold">{event.name}</h2>
            <p className="text-gray-600">Descrição: {event.description}</p>
            <p className="text-gray-600">Código: {event.code}</p>
            <p className="text-gray-600">
              Máxima Quantidade de Pessoas: {event.maxAttendees}
            </p>
            <p className="text-gray-600">Data: {event.date}</p>
            <p className="text-gray-600">Horário: {event.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventViewer;
