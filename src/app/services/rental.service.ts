import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44317/api/rentals/"

  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>{ //ürünleri getirme kodu
    let newPath = this.apiUrl + "getrentaldetails"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  checkRulesForAdding(rental:Rental):Observable<ResponseModel>{
    let newUrl = this.apiUrl + "rulesforadding"
    return this.httpClient.post<ResponseModel>(newUrl, rental);
  }
}
