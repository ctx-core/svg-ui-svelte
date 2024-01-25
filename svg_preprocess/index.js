import { markup_ } from '../markup/index.js'
export function svg_preprocess_(builder_opts = {}) {
	const markup = markup_(builder_opts)
	return { markup, }
}
export {
	svg_preprocess_ as _svg_preprocess,
}
