import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubsUserComponent } from './subscription-form/subs-user/subs-user.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';




const appRoutes: Routes = [ 
  { path: '', component: HomeComponent },
  //{ path: 'subsUserList/', component: SubsUserListComponent },
  { path: 'subsUser', component: SubsUserComponent, children: [
    { path: ':id', component: SubsUserComponent  },
  ]  },
  
  { path: 'subscription', component: SubscriptionFormComponent, children:[
    { path: ':id', component: SubsUserComponent  },
  ]}, 
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
