import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageFourComponent } from './pages/page-four/page-four.component';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
