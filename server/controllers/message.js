'use strict';
/**
 *   controller
 */

/**
 * Read the Strapi v4 documentation (https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html) to customize this controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('plugin::strapi-plugin-contact-v4.message', {
	async count(ctx) {
		ctx.body = strapi.plugin('plugin::strapi-plugin-contact-v4').service('message').count();
	},

	async find(ctx) {
		ctx.body = 'FIND';
		// let entities;
		// if (ctx.query._q) {
		// 	entities = await strapi.plugins[pluginId].services.message.search(ctx.query);
		// } else {
		// 	entities = await strapi.plugins[pluginId].services.message.find(ctx.query);
		// }
		// return entities.map((entity) =>
		// 	sanitizeEntity(entity, {
		// 		model: strapi.plugins[pluginId].models.message,
		// 	}),
		// );
	},

	/**
	 * Retrieve a record.
	 *
	 * @return {Object}
	 */
	async findOne(ctx) {
		ctx.body = 'FIND ONE';

		// const { id } = ctx.params;
		// const entity = await strapi.plugins[pluginId].services.message.findOne({
		// 	id,
		// });
		// return sanitizeEntity(entity, {
		// 	model: strapi.plugins[pluginId].models.message,
		// });
	},

	/**
	 * Create a record.
	 *
	 * @return {Object}
	 */

	async create(ctx) {
		ctx.body = 'CREATE';

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
		ctx.body = 'UPDATE';

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
		ctx.body = 'DELETE';

		// 	const { id } = ctx.params;
		// 	const entity = await strapi.plugins[pluginId].services.message.delete({
		// 		id,
		// 	});
		// 	return sanitizeEntity(entity, {
		// 		model: strapi.plugins[pluginId].models.message,
		// 	});
		// },
	},
});
