import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
  {
    path: 'page-1',
    component: PageOneComponent
  },
  {
    path: 'page-2',
    component: PageTwoComponent
  },
  {
    path: 'page-3',
    component: PageTwoComponent
  },
  {
    path: 'page-4',
    component: PageTwoComponent
  },
  {
    path: 'page-5',
    component: PageTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
