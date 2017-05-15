import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule} from '@angular/forms';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistService } from './postlist/service/postlist.service'
import { RouterModule} from '@angular/router';

const postRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path:'page/:page',
    component: PostlistComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(postRoutes)
  ],
  declarations: [PostlistComponent],
  providers: [
    PostlistService
  ]
})
export class PostModule { }
