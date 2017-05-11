import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Post} from "../../model/post-model";


@Injectable()

export class PostlistService {
  public postlistULR = "mock-data/postlist-mock.json";

  constructor(public http: Http){}

  public getPostList(): Observable<Post[]>{
    let url = this.postlistULR;
    return this.http
                .get(url)
      .map((res: Response) => {
        let result = res.json();
        console.log(result);
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));

  }

}
