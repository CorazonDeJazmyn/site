export interface IGalleryItemIndexed {
  idCard: number,
  currentImageIndex: number,
  totalImagesInCard: number
}

/**
 * @param image Required string url or path for that image
 * @param title Required string
 * @param description Required string
 * @param href Required string
 */
export interface IGalleryItem {
  images: string[],
  title: string,
  description?: string,
  href?: string,
  hide?: boolean
}

export class GalleryItem implements IGalleryItem {
  images: string[] = [];
  title: string = '';
  description?: string = '';
  href?: string = '';
  hide?: boolean = false;

  constructor(data: IGalleryItem) {
    if (data) {
      this.images = data.images;
      this.title = data.title;
      this.description = data.description;
      this.href = data.href;
      this.hide = data.hide;
    }
  }
}