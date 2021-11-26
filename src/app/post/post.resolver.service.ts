import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<any> {

  constructor(private _postService: PostService) { }

  resolve(): Observable<any>|Promise<any>|any {
      return this._postService.getPosts();
  }

}


@Injectable({
  providedIn: 'root'
})
export class PostItemResolver implements Resolve<any> {

  constructor(private _postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {
    
    return this._postService.getPostItem(+route.paramMap.get('id'));
  }
  
}