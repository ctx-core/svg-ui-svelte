<script lang="ts">
	import { keys, unpick } from 'ctx-core/object'
	/** @type {string|null} */
	export let viewBox = null
	/** @type {string|null} */
	export let preserveAspectRatio = null
	/** @type {string|number|null} */
	export let height = null
	/** @type {string|number|null} */
	export let width = null
	/** @type {string|number|null} */
	export let x = null
	/** @type {string|number|null} */
	export let y = null
	export let style = ''
	/** @type {SVGElement|null} */
	export let node = null
	let props
	$: props = unpick($$props, 'class')
	// TODO: Use spread {...props} on node on fix - https://github.com/sveltejs/svelte/issues/2732
	$: {
		props
		if (node) {
			keys(props).forEach($=>node.setAttribute($, props[$]))
		}
	}
</script>

<svelte:options namespace="svg"></svelte:options>

<svg
	bind:this={node}
	xmlns:svg="http://www.w3.org/2000/svg"
	xmlns="http://www.w3.org/2000/svg"
	version="1.2"
	class="Icon {$$props.class||''}"
	{style}
	{viewBox}
	{preserveAspectRatio}
	{height}
	{width}
	{x}
	{y}
>
	<slot></slot>
</svg>

<style>
	:global(.Icon) {
		height: 100%;
		width: 100%;
	}
</style>
