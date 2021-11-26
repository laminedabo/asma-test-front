import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PostService } from '../post.service';
import { Post } from '../post.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts$: Observable<Post[]>
  searchVal = "";

  constructor(private _postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.posts$ = this._postService.posts$
  }

  searchPost(){
    if(Number.isInteger(+this.searchVal.trim())) {
      this._postService.getPostItem(+this.searchVal.trim()).subscribe(
        (post: Post) => {
          this.router.navigateByUrl(`app/posts/${post.id}`)
        }
      )
    }
    
  }

}
