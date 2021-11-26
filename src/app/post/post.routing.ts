import { Route } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post.component';
import { PostItemResolver, PostResolver } from './post.resolver.service';

export const PostRoutes: Route[] = [
    {
        path     : '',
        component: PostComponent,
        children : [
            {
                path     : '',
                component: ListComponent,
                resolve  : {
                    PostResolver
                }
            },
            {
                path         : ':id',
                component    : DetailsComponent,
                resolve: {
                    PostItemResolver
                }
            }
        ]
    }
];
