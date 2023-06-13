import React, { useState } from "react";
import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  Box,
  GridLayout,
  Button,
  DateTimePicker,
  ModalFooter,
} from "@strapi/design-system";
import { TextInput } from "@strapi/design-system";
import eventRequest from "../../../../../../api";
import { useFormik } from "formik";

const EventModal = ({ onClose, value }) => {
  const [state, setState] = useState({
    name: "",
    description: "",
    venue: "",
    image: "",
    ticketPrice: "",
    capacity: "",
    recurrence: "",
    time: "",
  });
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.description) {
      errors.description = "Required";
    }
    if (!values.venue) {
      errors.venue = "Required";
    }
    if (!values.capacity) {
      errors.capacity = "Required";
    }
    if (!values.ticketPrice) {
      errors.ticketPrice = "Required";
    }
    if (!values.recurrence) {
      errors.recurrence = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: state.name,
      description: state.description,
      venue: state.venue,
      image: state.image,
      ticketPrice: state.ticketPrice,
      capacity: state.capacity,
      recurrence: state.recurrence,
      time: state.time,
    },

    validate,
    onSubmit: async (values) => {
      await eventRequest.addEvents(values);
      window.location.reload();
      onClose();
    },
  });

  return (
    <ModalLayout onClose={onClose} labelledBy="title">
      <ModalHeader></ModalHeader>
      <form onSubmit={formik.handleSubmit}>
        <ModalBody style={{ minHeight: "75vh" }} background="neutral100">
          <Box padding={2}>
            <GridLayout>
              <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
                <TextInput
                  placeholder="Name"
                  label="Name"
                  name="name"
                  value={value}
                  onChange={(e) =>
                    setState((oldState) => {
                      return { ...oldState, name: e.target.value };
                    })
                  }
                  onBlur={formik.handleBlur}
                />

                {formik.touched.name && formik.errors.name ? (
                  <div style={{ color: "red" }}>{formik.errors.name}</div>
                ) : null}
              </Box>

              <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
                <TextInput
                  placeholder="Description"
                  label="Description"
                  name="description"
                  onChange={(e) =>
                    setState((oldState) => {
                      return { ...oldState, description: e.target.value };
                    })
                  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.description}
                  </div>
                ) : null}
              </Box>
              <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
                <TextInput
                  placeholder="Venue"
                  label="Venue"
                  name="venue"
                  onChange={(e) =>
                    setState((oldState) => {
                      return { ...oldState, venue: e.target.value };
                    })
                  }
                />
                {formik.touched.venue && formik.errors.venue ? (
                  <div style={{ color: "red" }}>{formik.errors.venue}</div>
                ) : null}
              </Box>
              <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
                <TextInput
                  placeholder="image"
                  label="Image"
                  name="image"
                  onChange={(e) =>
                    setState((oldState) => {
                      return { ...oldState, image: e.target.value };
                    })
                  }
                />
                {formik.touched.image && formik.errors.image ? (
                  <div style={{ color: "red" }}>{formik.errors.image}</div>
                ) : null}
              </Box>
              <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
                <TextInput
                  placeholder="Ticket Price"
                  label="Ticket Price"
                  name="ticketPrice"
                  onChange={(e) =>
                    setState((oldState) => {
                      return { ...oldState, ticketPrice: e.target.value };
                    })
                  }
                />
                {formik.touched.ticketPrice && formik.errors.ticketPrice ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.ticketPrice}
                  </div>
                ) : null}
              </Box>
              <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
                <TextInput
                  placeholder="Capacity"
                  label="Capacity"
                  name="capacity"
                  onChange={(e) =>
                    setState((oldState) => {
                      return { ...oldState, capacity: e.target.value };
                    })
                  }
                />
                {formik.touched.capacity && formik.errors.capacity ? (
                  <div style={{ color: "red" }}>{formik.errors.capacity}</div>
                ) : null}
              </Box>
              <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
                <TextInput
                  placeholder="Recurrence"
                  label="Recurrence"
                  name="recurrence"
                  onChange={(e) =>
                    setState((oldState) => {
                      return { ...oldState, recurrence: e.target.value };
                    })
                  }
                />
                {formik.touched.recurrence && formik.errors.recurrence ? (
                  <div style={{ color: "red" }}>{formik.errors.recurrence}</div>
                ) : null}
              </Box>

              <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
                <DateTimePicker
                  label="Date and Time"
                  locale="en-GB"
                  name="time"
                  onChange={(e) =>
                    setState((oldState) => {
                      return { ...oldState, time: new Date(e) };
                    })
                  }
                />
                {formik.touched.time && formik.errors.time ? (
                  <div style={{ color: "red" }}>{formik.errors.time}</div>
                ) : null}
              </Box>
            </GridLayout>
          </Box>
        </ModalBody>
        <ModalFooter
          startActions={
            <Button onClick={onClose} variant="tertiary">
              Cancel
            </Button>
          }
          endActions={
            <>
              {/* <Button variant="secondary">Add new stuff</Button> */}
              <Button onClick={formik.handleSubmit}>Finish</Button>
            </>
          }
        />
      </form>
    </ModalLayout>
  );
};

export default EventModal;
