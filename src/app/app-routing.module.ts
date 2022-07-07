import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MapsComponent } from './modules/maps/maps.component';
import { PostsComponent } from './modules/posts/posts.component';
import { TransportComponent } from './modules/transport/transport.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    },
    {
      path: 'transport',
      component: TransportComponent
    },
    {
      path: 'maps',
      component: MapsComponent
    }
  ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
