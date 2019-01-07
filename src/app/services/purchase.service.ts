import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http:HttpClient) { }

  getPurchases() {
    return this.http.get('/server/api/v1/purchases/')
  }

  getPurchase(id: number) {
    return this.http.get('/server/api/v1/purchases/'+ id)
  }

  createPurchase(purchase) {
    let body = JSON.stringify(purchase);
    return this.http.post('/server/api/v1/purchases', body, httpOptions)
  }
}
