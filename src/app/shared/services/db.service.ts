import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

import { GalleryItem } from '../components/gallery/gallery.entity';

@Injectable({
  providedIn: 'root'
})
export class DBService {
  private PATH_DB_GALLERY = 'assets/db/db_gallery.json';
  private PATH_IMAGES_EARRINGS = './assets/images/earrings/img_pendiente_';

  constructor(
    private http: HttpClient
  ) { }

  async getEarrings(itemsToGet: number = -1) {
    const listEarrings: GalleryItem[] = await this.getData(this.PATH_DB_GALLERY);
    this.generateImagePath(listEarrings, 'images', this.PATH_IMAGES_EARRINGS);
    return itemsToGet === -1 ? listEarrings : listEarrings.slice(0, itemsToGet);
  }

  generateImagePath(list: any[], param: string, path: string) {
    list.forEach(item => {
      item[param] = item[param].map((img: string) => `${path}${img}`);
    });
  }

  getData(url: string): Promise<any> {
    const path = `${url}`;

    // Do the call
    return new Promise<any>((resolve, reject) => {
      this.http.get<string>(path)
        .pipe(first())
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (error) => {
            // this.errorService.manageError(error);
            reject(error);
          },
        });
    });
  }
}