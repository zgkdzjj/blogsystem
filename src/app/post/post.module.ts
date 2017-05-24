import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule} from '@angular/forms';
import { PaginationModule} from 'ng2-bootstrap';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistService } from './postlist/service/postlist.service'
import { RouterModule} from '@angular/router';
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostDetailService} from "./post-detail/service/post-detail.service";
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';

const postRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path:'page/:page',
    component: PostlistComponent
  },
  {
    path:'page/postdetail/:postId',
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(postRoutes)
  ],
  declarations: [
    PostlistComponent,
    PostDetailComponent,
    PostDetailMainComponent,
  ],
  providers: [
    PostlistService,
    PostDetailService
  ]
})
export class PostModule { }
