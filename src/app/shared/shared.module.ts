import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

import { PipesModule } from './pipes/pipes.module';

import { LinkModule } from './components/link/link.module';
import { GalleryModule } from './components/gallery/gallery.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    PipesModule,
    LinkModule,
    GalleryModule
  ],
  exports: [
    LinkModule,
    GalleryModule
  ]
})
export class SharedModule { }