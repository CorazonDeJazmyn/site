import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { GalleryItem } from '../components/gallery/gallery.entity';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(
    private http: HttpClient
  ) { }

  getEarrings(itemsToGet: number = -1) {
    const listEarrings: GalleryItem[] = [];

    listEarrings.push(new GalleryItem({
      image: '../../../assets/images/img_pendiente_colibri.jpg',
      title: 'Colibri',
      description: 'El colibrí es ideal para rostros pequeños y finos. Con un diseño original pero sencillo, puedes elegir los colores del cuerpo y las alas.'
    }));
    listEarrings.push(new GalleryItem({
      image: '../../../assets/images/img_pendiente_lobo.jpg',
      title: 'Lobo',
      description: 'El lobo feliz. Invoca al espíritu del lobo que llevas dentro, es dulce, pero también tiene garra y desgarra... cuando es necesario.'
    }));
    listEarrings.push(new GalleryItem({
      image: '../../../assets/images/img_pendiente_luna.jpg',
      title: 'Luna',
      description: 'La luna en sus diferentes fases. Prueba con diferentes colores para crear tu propio diseño.'
    }));
    listEarrings.push(new GalleryItem({
      image: '../../../assets/images/img_pendiente_mandala.jpg',
      title: 'Mandala',
      description: 'Lo puedes pedir con o sin tiras, y en los colores que más te gusten.'
    }));
    listEarrings.push(new GalleryItem({
      image: '../../../assets/images/img_pendiente_rainbow.jpg',
      title: 'Rainbow',
      description: 'Ideales para acudir a un encuentro LGTBI+ o a un rainbow.'
    }));

    return itemsToGet === -1 ? listEarrings : listEarrings.slice(0, itemsToGet);
  }

  getData(): Promise<any> {
    const path = ``;

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