import { translate } from "../../utils/translate";
import * as accessor from "./accessors";
import * as aggregated from "./aggregated";
import * as cellFn from "./cells";
import * as filters from "./filters";
import * as sorttype from "./sortType";

export const genrateColumnConfig = configs => {
	let config = [];
	for (let i = 0; i < configs.length; i++) {
		const el = configs[i];
		if (!el.display) continue;

		const _config = {};
		if (el?.button?.length > 0) {
			_config["button"] = el.button;
		}
		if (el.accessor) {
			let _val = null;
			const _accessor = el.accessor;

			if (_accessor.string) _val = _accessor.string;
			else if (_accessor.method) {
				const fn = accessor[_accessor.method];
				_val = fn ? fn : null;
			}

			_config["accessor"] = _val;
		}

		if (el.Cell) {
			const fn = cellFn[el.Cell];
			_config["Cell"] = fn ? fn : null;
		}

		if (el.sortType) {
			let _val = null;
			const _sortType = el.sortType;
			if (_sortType.method) {
				const fn = sorttype[_sortType.method];
				_val = fn ? fn : null;
			}

			_config["sortType"] = _val;
		}

		if (el.disableFilters) {
			let _val = null;

			if (typeof el.disableFilters === "boolean") {
				_val = el.disableFilters;
				_config["disableFilters"] = _val;
			}
		}

		if (el.disableSortBy) _config["disableSortBy"] = el.disableSortBy;

		if (el.Header) _config["Header"] = translate(el.Header);
		if (el.id) _config["id"] = el.id;
		if (el.source) _config["source"] = el.source;
		if (el.Filter) {
			const fn = filters[el.Filter];
			_config["Filter"] = fn ? fn : null;
		}
		if (el.showCellElements) _config["showCellElements"] = el.showCellElements;
		if (el.filters) _config["filters"] = el.filters;
		if (el.canGroupBy) _config["canGroupBy"] = el.canGroupBy;
		if (el.aggregate) _config["aggregate"] = el.aggregate;
		if (el.Aggregated) {
			const fn = aggregated[el.Aggregated];
			_config["Aggregated"] = fn ? fn : null;
		}
		config.push(_config);
	}

	return config;
};
