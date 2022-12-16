import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44317/api/brands/getall"

  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<BrandResponseModel>{ //ürünleri getirme kodu
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
