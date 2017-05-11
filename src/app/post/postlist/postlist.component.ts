import { Component, OnInit } from '@angular/core';
import {PostlistService} from "./service/postlist.service";

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  public totalNumber: number;

  constructor(public postListService: PostlistService) { }

  ngOnInit() {
    this.loadData();
    console.log('totalNumber>' + this.totalNumber);
  }

  public loadData() {
    return this.postListService.getPostList().subscribe(
      res => {
        this.totalNumber = res["total"];
      },
      err => {
        console.log(err)
      }
    );
  }

}
