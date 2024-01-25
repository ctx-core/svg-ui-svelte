export const markup = markup_()
export { markup as markup__markdown }
/** @typedef {import('domhandler').NodeWithChildren} */
/**
 * Returns a svg preprocessor for svelte-rollup.
 */
export const markup_ = (
	/** @type {markup_builder_opts__T} */builder_opts = {}
)=>{
	const {
		match_ = ({ filename })=>extname(filename) === '.svg',
	} = builder_opts
	return async (/** @type {match_opts__T} */opts)=>{
		if (!match_(opts)) return
		const { content } = opts
		let code
		const handler = new DomHandler((error, dom_a)=>{
			if (error) throw error
			const dom0 = /** @type {NodeWithChildren} */(dom_a[0])
			/** @type {Element} */
			const { attribs } = dom0
			const attribs_txt =
				map(
					keys(attribs),
					key=>`${key}=${JSON.stringify(attribs[key])}`).join(' ')
			code = `
<script context="module">
export async function preload({ params, query }) {
	return Object.assign({}, query, params)
}
</script>
<script>
let svg_node
$: {
	Object.keys($$props).forEach(
		prop => svg_node && svg_node.setAttribute(prop, $$props[prop]))
}
</script>
<svelte:options namespace="svg"></svelte:options>
<svg bind:this={svg_node} ${attribs_txt}>${getInnerHTML(dom0)}</svg>
				`.trim()
		})
		const parser = new Parser(handler)
		parser.write(content.slice(content.indexOf('<svg')))
		parser.end()
		return /** @type {markup_fn_return__T} */({
			code,
			map: null,
		})
	}
}
export { markup_ as _markup }
/**
 * @param {NodeWithChildren} node
 * @param {import('dom-serializer').DomSerializerOptions}[options]
 * @returns {*|string}
 */
function getInnerHTML(node, options) {
	return hasChildren(node)
		? node.children.map(function(node) {
			return getOuterHTML(node, options)
		}).join('')
		: ''
}
