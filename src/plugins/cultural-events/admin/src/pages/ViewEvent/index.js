import React, { useEffect, useState } from "react";
import {
  Box,
  DateTimePicker,
  Grid,
  GridLayout,
  ModalBody,
  TextInput,
  Typography,
} from "@strapi/design-system";
import eventRequest from "../../../../../../api";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const ViewEvent = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  useEffect(() => {
    const viewEvent = async () => {
      const res = await eventRequest.viewEvent(id);
      if (res) setData(res);
    };
    viewEvent();
  }, [id]);

  return (
    <Box padding={8} background="neutral100">
      <GridLayout>
        <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
          <TextInput
            placeholder="This is a content placeholder"
            label="Name"
            name="name"
            disabled
            value={data?.name}
          />
        </Box>

        <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
          <TextInput
            placeholder="This is a content placeholder"
            label="Description"
            name="description"
            value={data?.description}
            disabled
          />
        </Box>
        <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
          <TextInput
            placeholder="This is a content placeholder"
            label="Venue"
            name="venue"
            disabled
            value={data?.venue}
          />
        </Box>
        <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
          <TextInput
            placeholder="This is a content placeholder"
            label="Image"
            name="image"
            disabled
            value={data?.image}
          />
        </Box>
        <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
          <TextInput
            placeholder="This is a content placeholder"
            label="Ticket Price"
            name="ticketPrice"
            disabled
            value={data?.ticketPrice}
          />
        </Box>
        <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
          <TextInput
            placeholder="This is a content placeholder"
            label="Capacity"
            name="capacity"
            disabled
            value={data?.capacity}
          />
        </Box>
        <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
          <TextInput
            placeholder="This is a content placeholder"
            label="Recurrence"
            name="recurrence"
            disabled
            value={data?.recurrence}
          />
        </Box>
        <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
          <TextInput
            label="Date and Time"
            locale="en-GB"
            name="date"
            disabled
            value={data?.time}
          />
        </Box>
      </GridLayout>
    </Box>
  );
};

export default ViewEvent;
