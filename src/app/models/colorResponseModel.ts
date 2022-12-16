import { Color } from "./color";
import { ResponseModel } from "./responseModel";

export interface ColorReponseModel extends ResponseModel {
    data:Color[]
}