import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44317/api/customers/getall"

  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<ListResponseModel<Customer>>{ //ürünleri getirme kodu
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
