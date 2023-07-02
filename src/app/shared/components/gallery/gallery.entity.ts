/**
 * @param image Required string url or path for that image
 * @param title Required string
 * @param description Required string
 * @param href Required string
 */
export interface IGalleryItem {
  image: string,
  title: string,
  description?: string,
  href?: string,
}

export class GalleryItem implements IGalleryItem {
  image: string = '';
  title: string = '';
  description?: string = '';
  href?: string = '';

  constructor(data: IGalleryItem) {
    if (data) {
      this.image = data.image;
      this.title = data.title;
      this.description = data.description;
      this.href = data.href;
    }
  }
}