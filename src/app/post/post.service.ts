import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, User } from './post.type';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _posts: BehaviorSubject<Post[] | null> = new BehaviorSubject(null);
  private _post: BehaviorSubject<Post | null> = new BehaviorSubject(null);

  constructor(private _http: HttpClient) { }

  // Get the posts data
  get posts$(): Observable<Post[]>{
    return this._posts.asObservable();
  }

  // Get the post item
  get post$(): Observable<Post>{
    return this._post.asObservable();
  }

  /**
   * get the post item
   * @param id 
   * @returns 
   */
  getPostItem(id: number): Observable<Post>{
    return this._http.get <Post>(`${environment.appUrl}/posts/${id}`).pipe(
      tap((response) =>{
        this._post.next(response);
      })
    )
  }

  /**
   * get the posts
   * @returns 
   */
  getPosts(): Observable<Post[]>{
    return this._http.get <Post[]>(`${environment.appUrl}/posts`).pipe(
      tap((response: Post[]) =>{
        const postTab = response;
        
        this._posts.next(postTab.slice(0, 20));
      })
    )
  }

  getPostOwners(id: number) {
    return this._http.get <User>(`${environment.appUrl}/users/${id}`)
  }
}

