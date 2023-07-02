import { Component, Input } from '@angular/core';
import { GalleryItem } from './gallery.entity';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() set setItems(items: GalleryItem[]) {
    this.galleryItems = items;
  }
  @Input() set setShowMoreLink(showMoreLink: boolean) {
    this.showMoreLink = showMoreLink;
  }

  galleryItems: GalleryItem[] = [];
  showMoreLink: boolean = false;
}