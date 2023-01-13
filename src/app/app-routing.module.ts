import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { NotAuthGuard } from './auth/not-auth.guard';
import { PageFourComponent } from './pages/page-four/page-four.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-1',
    pathMatch: 'full'
  },
  {
    path: "auth/login",
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'page-1',
    component: PageOneComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-2',
    component: PageTwoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-3',
    component: PageThreeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-4',
    component: PageFourComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-5',
    component: PageTwoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
