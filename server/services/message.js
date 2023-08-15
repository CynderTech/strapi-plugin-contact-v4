'use strict';

/**
 *   service
 */

/**
 * Read the documentation (https://docs.strapi.io/developer-docs/latest/development/backend-customization/services.html)
 * to customize this service
 */

/* eslint-disable import/no-extraneous-dependencies */


module.exports = ({
	/**
	 * Promise to count records
	 *
	 * @return {Promise}
	 */
	async count(params) {
		return strapi.query('plugin::strapi-plugin-contact-v4.message').count(params);
	},

	/**
	 * Promise to fetch all records
	 *
	 * @return {Promise}
	 */
	async find(query) {
		return strapi.entityService.findMany('plugin::strapi-plugin-contact-v4.message', query);
	},

	/**
	 * Promise to fetch one record
	 *
	 * @return {Promise}
	 */
	async findOne(params) {
		return strapi.entityService.findOne('plugin::strapi-plugin-contact-v4.message', params);
	},

	/**
	 * Promise to add record
	 *
	 * @return {Promise}
	 */
	async create(data) {
		return strapi.entityService.create('plugin::strapi-plugin-contact-v4.message', {
			data,
		});
	},

	/**
	 * Promise to edit record
	 *
	 * @return {Promise}
	 */
	async update(id, data) {
		return strapi.entityService.update('plugin::strapi-plugin-contact-v4.message', id, {
			data,
		});
	},

	// /**
	//  * Promise to delete a record
	//  *
	//  * @return {Promise}
	//  */
	async delete(id) {
		return strapi.entityService.delete('plugin::strapi-plugin-contact-v4.message', id);
	},
});
