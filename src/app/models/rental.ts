import { ResponseModel } from "./responseModel";

export interface Rental extends ResponseModel{
    rentalId:number;
    brandName:string;
    firstName:string;
    lastName:string;
    carId:number;
    customerId:number;
    description:String;
    rentDate:Date;
    returnDate:Date;
}

