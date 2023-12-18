import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayemtserviceService {

  BaseUrl='http://localhost:8080/user'
  constructor(private http:HttpClient) { }

  public createpayment(amount:any){
   return this.http.get(`${this.BaseUrl}/createTransaction/`+amount)
  }
}
