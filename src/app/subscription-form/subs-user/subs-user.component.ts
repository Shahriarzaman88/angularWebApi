import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subs-user',
  templateUrl: './subs-user.component.html',
  styleUrls: ['./subs-user.component.css']
})
export class SubsUserComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  subsUser: {id: number, firstName: string, lastName: string, email: string, company: string}
  
  
  ngOnInit(): void {
    this.subsUser = {
      id: this.route.snapshot.params['id'],
      firstName: this.route.snapshot.params['firstName'],
      lastName: this.route.snapshot.params['lastName'],
      email: this.route.snapshot.params['email'],
      company: this.route.snapshot.params['company'],

    }
  }

}
