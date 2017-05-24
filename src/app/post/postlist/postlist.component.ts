import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PostlistService} from "./service/postlist.service";
import {Subject} from "rxjs";
import {Post} from "../model/post-model";

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  public maxSize:number = 5;
  public itemsPerPage:number = 2;

  public totalItems: number;
  public currentPage:number = 1;
  public numPages;

  public searchText:string;
  public searchTextStream:Subject<string> = new Subject<string>();
  public postList:Array<Post>;

  constructor(public postListService: PostlistService,
              public activeRoute: ActivatedRoute,
              public router: Router
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params =>{
      console.log('params>'+ JSON.stringify(params));
      this.loadData(this.searchText, this.currentPage);
    });

    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        console.log(this.searchText);
        this.loadData(this.searchText,this.currentPage)
      });

    console.log('post>' + JSON.stringify(this.postList));

  }



  public loadData(searchText:string, page:number) {
    let offset = (this.currentPage-1)*this.itemsPerPage;
    let end = (this.currentPage)*this.itemsPerPage;
    console.log('offset>' + offset);
    console.log('end>' + end);

    return this.postListService.getPostList(searchText,page).subscribe(
      res => {
        this.totalItems = res["total"];
        this.postList = res["items"].slice(offset,end>this.totalItems?this.totalItems:end);
        //this.postList = res["items"];
      },
      err => {
        console.log(err)
      },
      () => {}
    );
  }


  public pageChanged(event:any):void {
    this.router.navigateByUrl("posts/page/" + event.page);
  }

  public searchChanged($event):void {
    this.searchTextStream.next(this.searchText);
  }

  public gotoWrite():void {
    this.router.navigateByUrl("user/write");
  }



}
