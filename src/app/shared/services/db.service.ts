import { Injectable } from '@angular/core';

import { GalleryItem } from '../components/gallery/gallery.entity';

import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DBService {
private PATH_DB_GALLERY = 'assets/db/db_gallery.json';

  constructor(
    private http: HttpClient
  ) { }

  async getEarrings(itemsToGet: number = -1) {
    const listEarrings: GalleryItem[] = await this.getData(this.PATH_DB_GALLERY);
    return itemsToGet === -1 ? listEarrings : listEarrings.slice(0, itemsToGet);
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