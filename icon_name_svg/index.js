import { find } from 'ctx-core/array'
import { not_found__throw } from 'ctx-core/error'
import { assign } from 'ctx-core/object'
import getOuterHTML from 'dom-serializer'
import fs from 'node:fs'
import { DomHandler, Parser } from 'htmlparser2'
import resolve from 'resolve'
import { promisify } from 'util'
const resolve_async = promisify(resolve)
/** @typedef {import('./index.d.ts').get_opts__T} */
/**
 * Returns a `get` http handler that processes the svelte component whose path
 * is returned from `opts.resolve`.
 * @param {get_opts__T} [opts]
 */
export function svg_get_(opts = {}) {
	const { fn } = opts
	const resolve = opts.resolve || resolve_async
	if (typeof resolve !== 'function') throw new Error('opts.resolve must be a function')
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	return async function get(req, res) {
		res.setHeader('Content-Type', 'image/svg+xml')
		const { icon_name } = req.params
		const { style } = req.query
		if (fn) await fn(req, res)
		let svg = ''
		const handler = new DomHandler((error, dom)=>{
			if (error) {
				throw error
			} else {
				const maybe_node = find(/** @type {Element[]} */(dom), node=>node.name === 'icon')
				if (!maybe_node) {
					not_found__throw()
				}
				const node = /** @type {Element} */(maybe_node)
				node.name = 'svg'
				const { attribs } = node
				assign(attribs, {
					xmlns: 'http://www.w3.org/2000/svg',
					style: /** @type {string} */(style),
				})
				delete attribs['{...$$props}']
				svg = getOuterHTML([node])
			}
		})
		const parser = new Parser(handler)
		const icon_path = /** @type {string} */(await resolve(icon_name))
		parser.write((await fs.promises.readFile(icon_path)).toString())
		parser.end()
		res.end(svg)
	}
}
