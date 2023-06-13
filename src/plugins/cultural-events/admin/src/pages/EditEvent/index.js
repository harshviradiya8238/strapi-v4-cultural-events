import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  DateTimePicker,
  Grid,
  GridLayout,
  ModalBody,
  TextInput,
  Typography,
} from "@strapi/design-system";
import eventRequest from "../../../../../../api";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const history = useHistory();

  const [data, setData] = useState();
  useEffect(() => {
    const viewEvent = async () => {
      const res = await eventRequest.viewEvent(id);
      if (res) setData(res);
    };
    viewEvent();
  }, [id]);

  const [datevalue, setdateValue] = React.useState(new Date());

  const handleDateChange = (newValue) => {
    setdateValue(newValue);
  };
  const [state, setState] = useState({
    name: "",
    description: "",
    venue: "",
    image: "",
    ticketPrice: "",
    capacity: "",
    recurrence: "",
    time: new Date(),
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
    if (!values.image) {
      errors.image = "Required";
    }
    if (!values.recurrence) {
      errors.recurrence = "Required";
    }

    return errors;
  };

  useEffect(() => {
    if (data) {
      setState({
        name: data?.name,
        description: data?.description,
        venue: data?.venue,
        image: data?.image,
        ticketPrice: data?.ticketPrice,
        capacity: data?.capacity,
        recurrence: data?.recurrence,
        time: data?.time ? new Date(data?.time) : new Date(),
      });
    }
  }, [data]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: state,
    validate,
    onSubmit: async (values) => {
      await eventRequest.updateEvent(id, values);
      history.push("/plugins/cultural-events");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box padding={8} background="neutral100">
        <GridLayout>
          <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
            <TextInput
              placeholder="This is a content placeholder"
              label="Name"
              name="name"
              value={formik?.values?.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
          </Box>

          <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
            <TextInput
              placeholder="This is a content placeholder"
              label="Description"
              name="description"
              value={formik?.values?.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <div style={{ color: "red" }}>{formik.errors.description}</div>
            ) : null}
          </Box>

          <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
            <TextInput
              placeholder="This is a content placeholder"
              label="Venue"
              name="venue"
              value={formik?.values?.venue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.venue && formik.errors.venue ? (
              <div style={{ color: "red" }}>{formik.errors.venue}</div>
            ) : null}
          </Box>
          <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
            <TextInput
              placeholder="This is a content placeholder"
              label="Image"
              name="image"
              value={formik?.values?.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.image && formik.errors.image ? (
              <div style={{ color: "red" }}>{formik.errors.image}</div>
            ) : null}
          </Box>
          <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
            <TextInput
              placeholder="This is a content placeholder"
              label="Ticket Price"
              name="ticketPrice"
              value={formik?.values?.ticketPrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.ticketPrice && formik.errors.ticketPrice ? (
              <div style={{ color: "red" }}>{formik.errors.ticketPrice}</div>
            ) : null}
          </Box>
          <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
            <TextInput
              placeholder="This is a content placeholder"
              label="Capacity"
              name="capacity"
              value={formik?.values?.capacity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.capacity && formik.errors.capacity ? (
              <div style={{ color: "red" }}>{formik.errors.capacity}</div>
            ) : null}
          </Box>
          <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
            <TextInput
              placeholder="This is a content placeholder"
              label="Recurrence"
              name="recurrence"
              value={formik?.values?.recurrence}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.recurrence && formik.errors.recurrence ? (
              <div style={{ color: "red" }}>{formik.errors.recurrence}</div>
            ) : null}
          </Box>
          <Box padding={2} hasRadius style={{ cursor: "pointer" }}>
            {state?.time?.toString()}
            <DateTimePicker
              label="Date and Time"
              locale="en-GB"
              name="date"
              initialDate={state?.time}
              onChange={(e) => {
                handleDateChange(new Date(e));
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.time && formik.errors.time ? (
              <div style={{ color: "red" }}>{formik.errors.time}</div>
            ) : null}
          </Box>
        </GridLayout>
        <Box style={{ display: "flex", justifyContent: "end" }}>
          <Button style={{ margin: "10px" }}>Cancel</Button>
          <Button
            style={{ margin: "10px" }}
            type="submit"
            onClick={formik.handleSubmit}
          >
            Save
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default EditEvent;
