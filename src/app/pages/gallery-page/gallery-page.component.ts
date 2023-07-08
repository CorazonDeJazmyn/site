import { Component } from '@angular/core';

import { GalleryItem } from 'src/app/shared/components/gallery/gallery.entity';

import { DBService } from '../../shared/services/db.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
  listEarrings: GalleryItem[] = [];

  constructor(
    private dbService: DBService
  ) { }

  async ngOnInit(): Promise<void> {
    this.listEarrings = await this.dbService.getEarrings();
  }
}