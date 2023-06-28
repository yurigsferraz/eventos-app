"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-4 my-4 w-64">
      <div className="mb-4 ">
        <p className="text-xl font-bold">Nome:</p>
        <p className="text-gray-600">{event.nome}</p>
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold">Tipo:</p>
        <p className="text-gray-600">{event.tipoEvento.nome}</p>
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold">Código:</p>
        <p className="text-gray-600">{event.tipoEvento.codigo}</p>
      </div>
      
    </div>
  );
};

const EventViewer = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/events/');
      setEvents(response.data);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };

  return (
    <div className="flex justify-center items-start h-screen bg-blue-500">
      <div className="max-w-6xl flex flex-wrap justify-center items-start mx-auto">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventViewer;

