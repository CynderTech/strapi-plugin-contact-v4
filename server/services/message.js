module.exports = ({ strapi }) => ({
	getWelcomeMessage() {
		return 'Welcome to Strapi 🚀';
	},
	async count() {
		return await strapi.query('plugin::strapi-plugin-contact-v4.message').count();
	},
});
