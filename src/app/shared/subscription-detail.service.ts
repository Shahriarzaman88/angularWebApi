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


  readonly baseUrl = 'https://localhost:7271/api/';


  postSubscriptionForm(url){
    return this.http.post(this.baseUrl + url, this.formData);
    console.log(this.formData);
    console.log("posting");
  }

  getSubscriptionForm(url){
    
    return this.http.get(this.baseUrl + url);
  }
  

}
