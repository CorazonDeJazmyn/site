import { Component, Input } from '@angular/core';

import { CoreService } from '../../services/core.service';

import { GalleryItem, IGalleryItemIndexed } from './gallery.entity';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() set setItems(items: GalleryItem[]) {
    this.galleryItems = this.coreService.sort(items, 'title');
    this.generateIndexedImages();
  }

  @Input() set setShowMoreLink(showMoreLink: boolean) {
    this.showMoreLink = showMoreLink;
  }

  galleryItems: GalleryItem[] = [];
  showMoreLink: boolean = false;

  _galleryIndexed: IGalleryItemIndexed[] = [];

  constructor(
    private coreService: CoreService
  ) { }

  private generateIndexedImages() {
    this._galleryIndexed = [];
    let index = 0;
    this.galleryItems.forEach(gi => {
      this._galleryIndexed.push({
        idCard: index,
        currentImageIndex: 0,
        totalImagesInCard: this.getTotalImagesInCard(gi)
      });
      index++;
    });
  }

  private getItemGalleryIndexedById(idCard: number) {
    return this._galleryIndexed.find(gi => gi.idCard === idCard);
  }

  private getTotalImagesInCard(gi: GalleryItem) {
    let counter = 0;
    gi.images.forEach(img => {
      counter += this.coreService.doesFileExist(img) === true ? 1 : 0;
    });
    return counter > 0 ? --counter : counter;
  }

  onClickedButtonSlide(idCard: number, slideIndex: number = 1) {
    const itemGalleryIndexed = this.getItemGalleryIndexedById(idCard);
    if (itemGalleryIndexed) {
      let _totalImagesInCard = itemGalleryIndexed.totalImagesInCard;
      if (_totalImagesInCard > 1) {
        let _currentImageIndex = itemGalleryIndexed.currentImageIndex;
        if (slideIndex < 0) {
          _currentImageIndex = _currentImageIndex <= 0 ? _totalImagesInCard : --_currentImageIndex;
        } else {
          _currentImageIndex = _currentImageIndex < _totalImagesInCard ? ++_currentImageIndex : 0;
        }
        itemGalleryIndexed.currentImageIndex = _currentImageIndex;
      }
    }
  }

  getCurrentImage(item: GalleryItem, idCard: number) {
    const itemGalleryIndexed = this.getItemGalleryIndexedById(idCard);
    return item.images[itemGalleryIndexed ? itemGalleryIndexed.currentImageIndex : 0];
  }

  shouldShowSlideButtons(idCard: number) {
    const item = this.getItemGalleryIndexedById(idCard);
    return item && item.totalImagesInCard > 1;
  }
}