import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
