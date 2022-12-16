import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';
import { CarResponseModel } from '../models/carResponseModel';
import { ColorReponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44317/api/cars/getall"
  apiUrl2 = "https://localhost:44317/api/colors/getall"
  apiUrl3 = "https://localhost:44317/api/brands/getall"

  constructor(private httpClient:HttpClient) { }
  getCars():Observable<CarResponseModel>{ //ürünleri getirme kodu
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
  getColors():Observable<ColorReponseModel>{ //ürünleri getirme kodu
    return this.httpClient.get<ColorReponseModel>(this.apiUrl2);
  }
  getBrands():Observable<BrandResponseModel>{ //ürünleri getirme kodu
    return this.httpClient.get<BrandResponseModel>(this.apiUrl3);
  }
}
