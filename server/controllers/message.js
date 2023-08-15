'use strict';

/**
 *   controller
 */

/**
 * Read the Strapi v4 documentation (https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html) to customize this controller
 */

/* eslint-disable import/no-extraneous-dependencies */

const { createCoreController } = require('@strapi/strapi').factories;
const utils = require('@strapi/utils');
const { sanitize } = utils;

const CONTACT = require('../constants/pluginId');
const MESSAGE = require('../constants/contentType');

const sanitizeOutput = (entity, ctx) => {
	const messageSchema = strapi.getModel('plugin::strapi-plugin-contact-v4.message');

	return sanitize.contentAPI.output(entity, messageSchema, ctx);
};

module.exports = ({
	/**
	 * Count records.
	 *
	 * @return {Number}
	 */
	async count(ctx) {
		return strapi.plugin(CONTACT).service(MESSAGE).count(ctx);
	},

	/**
	 * Retrieve records.
	 *
	 * @return {Array}
	 */
	async find(ctx) {
		const entity = await strapi.plugin(CONTACT).service(MESSAGE).find(ctx.query);
		return sanitizeOutput(entity, ctx);
	},

	/**
	 * Retrieve a record.
	 *
	 * @return {Object}
	 */
	async findOne(ctx) {
		const { id } = ctx.params;
		const entity = await strapi.plugin(CONTACT).service(MESSAGE).findOne(id);

		return sanitizeOutput(entity, ctx);
	},

	/**
	 * Create a record.
	 *
	 * @return {Object}
	 */
	async create(ctx) {
		const entity = await strapi.plugin(CONTACT).service(MESSAGE).create(ctx.request.body);

		return sanitizeOutput(entity, ctx);
	},

	/**
	 * Update a record.
	 *
	 * @return {Object}
	 */
	async update(ctx) {
		const { id } = ctx.params;
		const entity = await strapi.plugin(CONTACT).service(MESSAGE).update(id, ctx.request.body);

		return sanitizeOutput(entity, ctx);
	},

	/**
	 * Delete a record.
	 *
	 * @return {Object}
	 */
	async delete(ctx) {
		const { id } = ctx.params;
		const entity = await strapi.plugin(CONTACT).service(MESSAGE).delete(id);

		return sanitizeOutput(entity, ctx);
	},
});
