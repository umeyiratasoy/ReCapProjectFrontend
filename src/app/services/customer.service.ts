import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerReponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44317/api/customers/getall"

  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<CustomerReponseModel>{ //ürünleri getirme kodu
    return this.httpClient.get<CustomerReponseModel>(this.apiUrl);
  }
}
