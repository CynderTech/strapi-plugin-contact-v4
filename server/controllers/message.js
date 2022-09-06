/* eslint-disable import/no-extraneous-dependencies */

/**
 *   controller
 */

/**
 * Read the Strapi v4 documentation (https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html) to customize this controller
 */
 const { createCoreController } = require('@strapi/strapi').factories;
 const pluginId = require('../../admin/src/pluginId');
 
 module.exports = createCoreController('plugin::strapi-plugin-contact-v4.message', ({ strapi }) => ({
	 /**
		* Count records.
		*
		* @return {Number}
		*/
	 async count(ctx) {
		 // if (ctx.query._q) {
		 // 	return strapi.plugin(pluginId).service('message').countSearch(ctx.query);
		 // }
		 return strapi.plugin(pluginId).service('message').count(ctx);
	 },
 
	 /**
		* Retrieve records.
		*
		* @return {Array}
		*/
	 async find(ctx) {
		 return strapi.plugin(pluginId).service('message').find(ctx.query);
	 },
 
	 /**
		* Retrieve a record.
		*
		* @return {Object}
		*/
	 async findOne(ctx) {
		 const { id } = ctx.params;
		 ctx.body = await strapi.plugin(pluginId).service('message').findOne(id);
	 },
 
	 /**
		* Create a record.
		*
		* @return {Object}
		*/
	 async create(ctx) {
		 const data = ctx.request.body;
		 ctx.body = await strapi.plugin(pluginId).service('message').create(data);
		 // let entity;
		 // if (ctx.is('multipart')) {
		 // 	const { data, files } = parseMultipartData(ctx);
		 // 	entity = await strapi.plugins[pluginId].services.message.create(data, {
		 // 		files,
		 // 	});
		 // } else {
		 // 	entity = await strapi.plugins[pluginId].services.message.create(ctx.request.body);
		 // }
		 // return sanitizeEntity(entity, {
		 // 	model: strapi.plugins[pluginId].models.message,
		 // });
	 },
 
	 /**
		* Update a record.
		*
		* @return {Object}
		*/
	 async update(ctx) {
		 const { id } = ctx.params;
		 const data = ctx.request.body;
		 ctx.body = await strapi.plugin(pluginId).service('message').update(id, data);
		 // const { id } = ctx.params;
		 // let entity;
		 // if (ctx.is('multipart')) {
		 // 	const { data, files } = parseMultipartData(ctx);
		 // 	entity = await strapi.plugins[pluginId].services.message.update({ id }, data, {
		 // 		files,
		 // 	});
		 // } else {
		 // 	entity = await strapi.plugins[pluginId].services.message.update(
		 // 		{ id },
		 // 		ctx.request.body,
		 // 	);
		 // }
		 // return sanitizeEntity(entity, {
		 // 	model: strapi.plugins[pluginId].models.message,
		 // });
	 },
 
	 /**
		* Delete a record.
		*
		* @return {Object}
		*/
	 async delete(ctx) {
		 const { id } = ctx.params;
		 ctx.body = await strapi.plugin(pluginId).service('message').delete(id);
	 },
 }));
 