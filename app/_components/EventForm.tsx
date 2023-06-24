'use client'

import React, { useState } from "react";

const EventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventCode, setEventCode] = useState("");
  const [maxAttendees, setMaxAttendees] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode realizar as ações desejadas com os dados do formulário
    // Por exemplo, enviar uma solicitação para o servidor para salvar o evento

    // Resetar os campos do formulário
    setEventName("");
    setEventDescription("");
    setEventCode("");
    setMaxAttendees("");
    setEventDate("");
    setEventTime("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded shadow">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="eventName" className="text-lg font-bold mb-2">
          Nome do Evento
        </label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="eventDescription" className="text-lg font-bold mb-2">
          Descrição do Evento
        </label>
        <textarea
          id="eventDescription"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          className="w-full border rounded py-2 px-3"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="eventCode" className="text-lg font-bold mb-2">
          Código do Evento
        </label>
        <input
          type="text"
          id="eventCode"
          value={eventCode}
          onChange={(e) => setEventCode(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="maxAttendees" className="text-lg font-bold mb-2">
          Máxima Quantidade de Pessoas
        </label>
        <input
          type="number"
          id="maxAttendees"
          value={maxAttendees}
          onChange={(e) => setMaxAttendees(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="eventDate" className="text-lg font-bold mb-2">
          Data do Evento
        </label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="eventTime" className="text-lg font-bold mb-2">
          Horário do Evento
        </label>
        <input
          type="time"
          id="eventTime"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Cadastrar Evento
      </button>
            </form>
        </div>
    </div>
  );
};

export default EventForm;
