import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnimboxComponent } from './animbox.component';
import { MouseComponent } from './mouse.component';
import { FadeBlockComponent } from './fadeblock.component';

import { HomeComponent } from './routes/home.component';
import { BasicComponent } from './routes/basic.component';
import { ContainedComponent } from './routes/contained.component';
import { AdvancedComponent } from './routes/advanced.component';

const animationRoutes:Routes = [
  {
    path: 'animation-home',
    component: HomeComponent,
    data: {
      animation: {
        value: 'home',
      }
    }
  },
  {
    path: 'animation-basics',
    component: BasicComponent,
    data: {
      animation: {
        value: 'basics',
      }
    }
  },
  {
    path: 'animation-contained',
    component: ContainedComponent,
    data: {
      animation: {
        value: 'contained',
      }
    }
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent,
    data: {
      animation: {
        value: 'advanced',
      }
    }
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full',
    data: {
      animation: {
        value: 'home',
      }
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AnimboxComponent,
    MouseComponent,
    FadeBlockComponent,
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
