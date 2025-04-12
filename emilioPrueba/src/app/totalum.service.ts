import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TotalumService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}pedidos`).pipe(
      map(response => response.data)  // Extrae solo los productos de la propiedad 'data'
    );
  }

  getClientes(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}clientes`).pipe(
      map(response => response.data)  // Extrae solo los productos de la propiedad 'data'
    );
  }

  // totalum.service.ts

getProductos(): Observable<any[]> {
  return this.http.get<any>(`${this.baseUrl}productos`).pipe(
    map(response => response.data)  // Extrae solo los productos de la propiedad 'data'
  );
}

}
