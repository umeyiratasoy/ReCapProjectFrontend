import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44317/api/rentals/getall"

  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<RentalResponseModel>{ //ürünleri getirme kodu
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
