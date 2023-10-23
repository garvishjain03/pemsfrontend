export const subMenugenrate = (config, permissionData) => {
	if (!Array.isArray(config)) return [];
	if (config.length < 1) return [];

	const _configCopy = [];
	for (let i = 0; i < config.length; i++) {
		const _config = { ...config[i] };
		if (_config.subMenu) {
			const _subMenu = subMenugenrate(_config.subMenu, permissionData);

			_config["subMenu"] = _subMenu;
			_configCopy.push(_config);
		}
		if (permissionData[_config.key]?.pageVisible) _configCopy.push(_config);
	}
	return _configCopy;
};

export const itemShowOrNot = config => {
	if (!Array.isArray(config)) return false;
	if (config.length < 1) return false;

	const _some = config.some(item => {
		if (item.subMenu) return item.subMenu.length > 0;
		return true;
	});

	return _some;
};
