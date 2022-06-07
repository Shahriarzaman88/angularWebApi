import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SubsUserComponent } from './subscription-form/subs-user/subs-user.component'



@NgModule({
  declarations: [
    AppComponent,
    SubscriptionFormComponent,
    HomeComponent,
    SubsUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
