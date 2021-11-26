import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';

export const routes: Routes = [

  {path: '', pathMatch : 'full', redirectTo: 'app/posts'},
  
  {
    path: 'app',
    children: [
      {path: 'posts', loadChildren: () => import('src/app/post/post.module').then(m => m.PostModule)},
    ]
}];
