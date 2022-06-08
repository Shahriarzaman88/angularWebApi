import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SubscriptionDetailService } from '../../shared/subscription-detail.service';
import { HomeComponent } from 'src/app/home/home.component';


@Component({
  selector: 'app-subs-user',
  templateUrl: './subs-user.component.html',
  styleUrls: ['./subs-user.component.css']
})
export class SubsUserComponent implements OnInit {

  constructor( private route: ActivatedRoute, public service: SubscriptionDetailService ) { }

  subsUser: {id: number, firstName: string, lastName: string, email: string, company: string}
  
  
  ngOnInit(): void {
    //this.subsUser = {
      //id: this.route.snapshot.params['id'],
     // firstName: this.route.snapshot.params['firstName'],
     // lastName: this.route.snapshot.params['lastName'],
     // email: this.route.snapshot.params['email'],
      //company: this.route.snapshot.params['company'],

    //}
    //this.getUser();
  }

login(){
  this.route.root;
}

  getUser(form: NgForm){
    
    this.service.getSubscriptionForm("subsUser").subscribe(

      (res) => {
        console.log("Submitted successfully to database");
        console.log(this.subsUser);
      },
      (err) => {
        console.log("Error");
      }

      //(res) => {
        //this.subsUser = res["body"]
        //console.log("Submitted successfully to database");
      //},
      //(err) => {
        //console.log("Error");
      //}
      
    )
  }

}
