import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Typography,
  Text,
  Flex,
  IconButton,
} from "@strapi/design-system";
import { Icon } from "@strapi/design-system";

import eventRequest from "../../../../../../api";
import { Eye, Pencil, Trash } from "@strapi/icons";
import { Link } from "react-router-dom/cjs/react-router-dom";
import EventModal from "./EventModal";

const EventTable = ({ events, setEvents }) => {
  async function handleDeleteClick(id) {
    const res = await eventRequest.deleteEvent(id);
    if (res)
      setEvents((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  return (
    <Table>
      <thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Description</Th>
          <Th>Date and Time</Th>
          <Th>Venue</Th>
          <Th>Image</Th>
          <Th>Ticket Price</Th>
          <Th>Capacity</Th>
          <Th>Recurrence</Th>
          <Th>Action</Th>
        </Tr>
      </thead>
      <Tbody>
        {events.length &&
          events.map((event) => (
            <Tr key={event.id}>
              <Td>{event.id}</Td>
              <Td>{event.name}</Td>
              <Td>{event.description}</Td>
              <Td
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100px",
                }}
              >
                {event.time}
              </Td>
              <Td>{event.venue}</Td>
              <Td>{event.image}</Td>
              <Td>{event.ticketPrice}</Td>
              <Td>{event.capacity}</Td>
              <Td>{event.recurrence}</Td>
              <Td>
                <Link to={`/plugins/cultural-events/edit/${event.id}`}>
                  <IconButton label="Edit" icon={<Pencil />} />
                </Link>
                <IconButton
                  label="Delete"
                  icon={<Trash />}
                  onClick={() => handleDeleteClick(event.id)}
                />

                <Link to={`/plugins/cultural-events/view/${event.id}`}>
                  <IconButton label="View" icon={<Eye />} />
                </Link>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};

const EventList = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await eventRequest.getEvents();
      if (res) setEvents(res);
      setLoading(false);
    };
    fetchEvents();
  }, [eventRequest]);

  const handleAddEvent = () => {
    setIsVisible(true);
  };

  return (
    <>
      <>
        <Box maxWidth="1120px" style={{ margin: "16px" }}>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="alpha" style={{ marginBottom: "16px" }}>
              All Events
            </Typography>
            <Button onClick={handleAddEvent}>Add Event</Button>
          </Box>

          <EventTable events={events} setEvents={setEvents} />
          {isVisible && (
            <EventModal
              isVisible={isVisible}
              onClose={() => setIsVisible(false)}
            />
          )}
        </Box>
      </>
    </>
  );
};

export default EventList;
