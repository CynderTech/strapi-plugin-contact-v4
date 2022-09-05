'use strict';

/**
 *  service.
 */

const { createCoreService } = require('@strapi/strapi').factories;
 
module.exports = createCoreService('plugin::strapi-plugin-contact-v4.message', {
async count() {
    return await strapi.query('plugin::strapi-plugin-contact-v4.message').count();
  },
});