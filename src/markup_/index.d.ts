// export type markup_fn_T =
export function markup_(builder_opts?:markup_builder_opts__T):markup_T
export interface markup_builder_opts__T {
	match_?:(opts:match_opts__T)=>string
}
export type _markup_builder_opts_T = markup_builder_opts__T
export type _markup_builder_opts_type = markup_builder_opts__T
export interface match_opts__T {
	filename:string
	content:string
}
export type _match_opts_T = match_opts__T
export type _match_opts_type = match_opts__T
export interface markup_fn_return__T {
	code:any
	map:null
}
export type _markup_fn_return_T = markup_fn_return__T
export type _markup_fn_return_type = markup_fn_return__T
export type markup_T = (opts:match_opts__T)=>Promise<markup_fn_return__T|undefined>
export type markup_type = markup_T
