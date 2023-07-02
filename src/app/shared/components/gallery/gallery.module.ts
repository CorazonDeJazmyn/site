import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

import { PipesModule } from '../../pipes/pipes.module';

import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    PipesModule,
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }