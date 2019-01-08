import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http:HttpClient) { }

  getPurchases() {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/purchases',
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  getPurchase(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/purchases/'+ id,
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }



  createPurchase(purchase) {
    let body = JSON.stringify(purchase);
    return this.http.post('/server/api/v1/purchases', body, httpOptions);
  }
}
