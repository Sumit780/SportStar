import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiHandleService {
id: number;
  constructor(private httpClient: HttpClient) { }

  getData(url) {
    return this.httpClient.get<any>(url);
  }

  get(x: number){
this.id = x;
  }
}
