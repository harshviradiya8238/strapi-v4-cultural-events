import { request } from "@strapi/helper-plugin";

const eventRequest = {
  getEvents: async () => {
    return await request("/cultural-events/event", { method: "GET" });
  },
  addEvents: async (data) => {
    return await request("/cultural-events/addevent", {
      method: "POST",
      body: { data },
    });
  },
  viewEvent: async (id) => {
    return await request(`/cultural-events/event/${id}`, { method: "GET" });
  },
  deleteEvent: async (id) => {
    return await request(`/cultural-events/event/${id}`, { method: "DELETE" });
  },
  updateEvent: async (id, data) => {
    return await request(`/cultural-events/event/${id}`, {
      method: "PUT",
      body: { data },
    });
  },
};

export default eventRequest;
