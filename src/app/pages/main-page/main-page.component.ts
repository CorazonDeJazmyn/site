import { Component, OnInit } from '@angular/core';

import { GalleryItem } from 'src/app/shared/components/gallery/gallery.entity';

import { DBService } from 'src/app/shared/services/db.service';

import { IMAGES } from 'src/assets/images/images';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private GALLERY_ITEMS_TO_SHOW = 3;
  listEarrings: GalleryItem[] = [];
  welcomeBackImage = IMAGES.imgWelcomeBack;

  constructor(
    private dbService: DBService
  ) { }

  async ngOnInit(): Promise<void> {
    this.listEarrings = await this.dbService.getEarrings(this.GALLERY_ITEMS_TO_SHOW);
  }
}