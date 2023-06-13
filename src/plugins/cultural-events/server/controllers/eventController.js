"use strict";

module.exports = {
  //get all event
  async find(ctx) {
    try {
      return await strapi
        .plugin("cultural-events")
        .service("culturalEventService")
        .find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  // get single events
  async findOne(ctx) {
    try {
      ctx.body = await strapi
        .plugin("cultural-events")
        .service("culturalEventService")
        .findOne(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  // create new event
  async create(ctx) {
    try {
      ctx.body = await strapi
        .plugin("cultural-events")
        .service("culturalEventService")
        .create(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  // update existing event
  async update(ctx) {
    try {
      ctx.body = await strapi
        .plugin("cultural-events")
        .service("culturalEventService")
        .update(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  // delete event
  async deleteEvent(ctx) {
    try {
      ctx.body = await strapi
        .plugin("cultural-events")
        .service("culturalEventService")
        .delete(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
