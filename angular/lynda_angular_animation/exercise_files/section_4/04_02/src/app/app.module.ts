import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnimboxComponent } from './animbox.component';
import { MouseComponent } from './mouse.component';

import { HomeComponent } from './routes/home.component';
import { BasicComponent } from './routes/basic.component';
import { ContainedComponent } from './routes/contained.component';
import { AdvancedComponent } from './routes/advanced.component';

const animationRoutes:Routes = [
  {
    path: 'animation-home',
    component: HomeComponent
  },
  {
    path: 'animation-basics',
    component: BasicComponent
  },
  {
    path: 'animation-contained',
    component: ContainedComponent
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AnimboxComponent,
    MouseComponent,
    HomeComponent,
    BasicComponent,
    ContainedComponent,
    AdvancedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
