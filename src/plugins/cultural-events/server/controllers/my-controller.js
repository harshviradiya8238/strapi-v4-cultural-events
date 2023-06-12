'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('cultural-events')
      .service('myService')
      .getWelcomeMessage();
  },
});
