import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubscriptionDetail } from './subscription-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionDetailService {
  Id: any;

  constructor(private http:HttpClient) { }

  formData: SubscriptionDetail = new SubscriptionDetail();


  readonly baseUrl = 'https://localhost:7271/api/subscriptions';


  postSubscriptionForm(){
    return this.http.post(this.baseUrl, this.formData);
    console.log("posting");
  }

  getSubscriptionForm(){
    
    return this.http.get(this.baseUrl, );
  }
  

}
