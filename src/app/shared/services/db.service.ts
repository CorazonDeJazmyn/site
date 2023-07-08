import { Injectable } from '@angular/core';

import { GalleryItem } from '../components/gallery/gallery.entity';

import dbGallery from '../../../assets/db/db_gallery.json';

@Injectable({
  providedIn: 'root'
})
export class DBService {
  constructor() { }

  getEarrings(itemsToGet: number = -1) {
    const listEarrings: GalleryItem[] = dbGallery;
    return itemsToGet === -1 ? listEarrings : listEarrings.slice(0, itemsToGet);
  }
}