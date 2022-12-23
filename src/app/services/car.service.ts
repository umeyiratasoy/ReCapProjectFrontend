import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44317/api/cars/";
  

  // apiUrl2 = "https://localhost:44317/api/colors/getall"
  // apiUrl3 = "https://localhost:44317/api/brands/getall"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetailDto>>{ //ürünleri getirme kodu
    let newPath = this.apiUrl + "getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  // getCars():Observable<CarResponseModel>{ //ürünleri getirme kodu
  //   return this.httpClient.get<CarResponseModel>(this.apiUrl);
  // }
  // getColors():Observable<ColorReponseModel>{ //ürünleri getirme kodu
  //   return this.httpClient.get<ColorReponseModel>(this.apiUrl2);
  // }
  // getBrands():Observable<BrandResponseModel>{ //ürünleri getirme kodu
  //   return this.httpClient.get<BrandResponseModel>(this.apiUrl3);
  // }  

  getCarsByBrandId(brandId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColorId(colorId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "getcarsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarById(id:number): Observable<SingleResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "getcardetailsbyid?id="+id
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath);
  }
  


}
