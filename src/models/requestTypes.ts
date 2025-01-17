import { Request } from "express";

export type RequestWithBody<B> = Request<{}, {}, B>
export type RequestWithQuery<Q> = Request<{}, {}, {}, Q>
export type RequestWithParams<P> = Request<P, {}, {}, {}>