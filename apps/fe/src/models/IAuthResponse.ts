import { IResponse } from "./IResponse";

interface IAuth {
  token: string;
}

export type IAuthResponse = IResponse<IAuth>;
