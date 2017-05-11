import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostlistComponent } from './postlist/postlist.component';
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
    RouterModule.forChild(postRoutes)
  ],
  declarations: [PostlistComponent]
})
export class PostModule { }
