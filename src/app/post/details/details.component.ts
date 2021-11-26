import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostService } from '../post.service';
import { Post, User } from '../post.type';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post$: Observable<Post>
  user$: Observable<User>

  constructor(private _postService: PostService) { 
    this.post$ = this._postService.post$
  }

  ngOnInit(): void {
    this._postService.post$.subscribe(
      (post: Post) => {
        this._postService.getPostOwners(post.userId).subscribe(
          (user: User) => {
            this.user$ = of(user);
          }
        )
      }
    )
  }

}
