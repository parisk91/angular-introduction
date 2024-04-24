import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {
  http: any;

  constructor(customer: Customer) { 
    return this.http.post<{msg: string}>('${API_URL)/create', customer)
  }
}
