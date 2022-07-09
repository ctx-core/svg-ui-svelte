/// <reference types="svelte" />
// declare module 'Icon.svelte' {
// 	export { SvelteComponentDev as default } from 'svelte/internal'
// }
import { SvelteComponentTyped } from 'svelte/internal'
export default class Icon extends SvelteComponentTyped<{
	viewBox?:string
	preserveAspectRatio?:string
	height?:string|number
	weight?:string|number
	x?:string|number
	y?:string|number
	style?:string
	node?:SVGElement
}> {}
