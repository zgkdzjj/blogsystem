import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {RouterModule,Router} from '@angular/router';
import {HomeComponent} from "./home.component";
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';


const homeRoutes = [
  {
    path:'',
    component:HomeComponent,
    children:[{
      path:'list',
      loadChildren:'../post/post.module#PostModule'
    }]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)

  ],
  declarations: [HomeComponent, OnlineContactComponent, SocialChannelComponent]
})
export class HomeModule { }
