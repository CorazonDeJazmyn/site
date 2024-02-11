import { Component, OnInit } from '@angular/core';

import { ELINK_HREF, ELINK_ICON_TYPE, ELINK_TYPE, LinkItem } from 'src/app/shared/components/link/link.entity';
import { IMAGES } from 'src/assets/images/images';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  linkInstagram!: LinkItem;

  constructor() { }

  ngOnInit(): void {
    this.linkInstagram = new LinkItem({
      type: ELINK_TYPE.CARD,
      href: 'https://www.instagram.com/corazondejazmyn',
      tooltip: '@corazondejazmyn',
      icon: IMAGES.QR_Instagram,
      iconType: ELINK_ICON_TYPE.IMAGE,
      target: ELINK_HREF.BLANK,
      showBig: true
    });
  }
}