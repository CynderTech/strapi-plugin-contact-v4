'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('contact')
      .service('myService')
      .getWelcomeMessage();
  },
};
