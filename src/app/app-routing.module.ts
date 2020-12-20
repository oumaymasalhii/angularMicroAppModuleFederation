import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";

const routes: Routes = [
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  }, {
    path: '**',
    component: EmptyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
