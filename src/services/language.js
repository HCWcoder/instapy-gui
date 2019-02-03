// TODO import from store

class Language {
	_table = null;

	constructor() {
		this._table = this.getTable('en');
	}

	translate = token => {
		const rv = this._table[token];
		if (rv) return rv;
		return token;
	}

	getTable = language => {
		try {
			// TODO make GET request to get new language table
			throw 'no valid response';
		} catch (err) {
			return this.defaultTable;
		}
	}

	defaultTable = {
		sidebar_configuration: 'Configuration',
		sidebar_namespaces: 'Templates',
		sidebar_github: 'GitHub',
		sidebar_login: 'Login',
		sidebar_account: 'ACCOUNT',
		sidebar_features: 'FEATURES',
		sidebar_links: 'LINKS',

		button_save: 'save',
		button_cancel: 'cancel',

		login_username: 'username',
		login_password: 'password',
		login_title: 'Login to Instagram',

		namespaces_title: 'Templates',
		namespaces_description: 'Description',






		notification_error_one_namespace: 'you need at least one template!',

		jobitem_active: 'active',
		jobitem_inactive: 'inactive',

		configuration_namespaces: 'templates',

		new_namespace_title: 'add template',

		namespace_identifier_label: 'identifier',
		namespace_identifier_tooltip: 'allowed characters are a-z, underscore and hyphen',
		namespace_identifier_placeholder: 'following-sports',

		namespace_name_label: 'name',
		namespace_name_tooltip: 'this name will be displayed in your dropdown list',
		namespace_name_placeholder: 'Following by Hashtag Sport',

		namespace_description_label: 'description',
		namespace_description_tooltip: 'any additional info for your template',
		namespace_description_placeholder: 'i need to buy milk'
	};
}

export default new Language().translate;
