import { Customer } from "./customer";
import { ResponseModel } from "./responseModel";

export interface CustomerReponseModel extends ResponseModel {
    data:Customer[]
}
