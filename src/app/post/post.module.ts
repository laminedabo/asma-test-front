import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import {MatCardModule} from '@angular/material/card';
import { PostComponent } from './post.component';
import { PostRoutes } from './post.routing';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(PostRoutes)
  ]
})
export class PostModule { }
