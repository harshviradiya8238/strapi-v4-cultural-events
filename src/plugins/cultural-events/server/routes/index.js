module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "GET",
    path: "/event",
    handler: "eventController.find",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/event/:id",
    handler: "eventController.findOne",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "POST",
    path: "/addevent",
    handler: "eventController.create",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/event/:id",
    handler: "eventController.update",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "DELETE",
    path: "/event/:id",
    handler: "eventController.deleteEvent",
    config: {
      policies: [],
      auth: false,
    },
  },
];
