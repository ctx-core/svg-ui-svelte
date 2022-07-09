import type { Request, Response } from 'express'
export function svg_get_(opts?:get_opts__T):(req:Request, res:Response)=>Promise<void>
export type svg_get__resolve_T = (path:string)=>Promise<string>
export type get__T = (opts?:get_opts__T)=>get_T
export type _get_T = get__T
export type _get_type = get__T
export type get_T = (req:Request, res:Response)=>Promise<void>
export type get_type = get_T
export interface get_opts_type_fn_req__T {
	fn(req:Request, res:Response):Promise<void>
}
export type _get_opts_type_fn_req_T = get_opts_type_fn_req__T
export type _get_opts_type_fn_req_type = get_opts_type_fn_req__T
export interface get_opts__T {
	fn?:(req:Request, res:Response)=>Promise<any>
	resolve?:svg_get__resolve_T
}
export type _get_opts_T = get_opts__T
export type _get_opts_type = get_opts__T
