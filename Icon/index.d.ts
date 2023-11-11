/// <reference types="svelte" />
// declare module 'Icon.svelte' {
// 	export { SvelteComponentDev as default } from 'svelte/internal'
// }
import { SvelteComponent } from 'svelte'
export default class Icon extends SvelteComponent<{
	viewBox?:string
	preserveAspectRatio?:string
	height?:string|number
	weight?:string|number
	x?:string|number
	y?:string|number
	style?:string
	node?:SVGElement
}> {
}
