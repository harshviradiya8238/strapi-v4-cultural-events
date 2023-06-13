"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany(
      "plugin::cultural-events.event",
      query
    );
  },
  async findOne(id) {
    return await strapi.entityService.findOne(
      "plugin::cultural-events.event",
      id
    );
  },

  async delete(id) {
    return await strapi.entityService.delete(
      "plugin::cultural-events.event",
      id
    );
  },

  async create(data) {
    return await strapi.entityService.create(
      "plugin::cultural-events.event",
      data
    );
  },

  async update(id, data) {
    await strapi.entityService.update(
      "plugin::cultural-events.event",
      id,
      data
    );
    return await strapi.entityService.findMany("plugin::cultural-events.event");
  },
});
