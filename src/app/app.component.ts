import { Component, OnInit } from '@angular/core';

import { CoreService } from './shared/services/core.service';

import { IMAGES } from 'src/assets/images/images';
import { Router } from '@angular/router';
import { ELINK_ICON_TYPE, ELINK_TYPE, LinkItem, ELINK_HREF } from './shared/components/link/link.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appTitle = CoreService.appTitle;
  imgLogo = IMAGES.imgLogo;
  showMenu = false;

  menuItems: LinkItem[] = [];

  constructor(
    private coreService: CoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.prepareMenu();
  }

  private prepareMenu() {
    this.menuItems.push(
      new LinkItem({
        type: ELINK_TYPE.CARD,
        href: 'home',
        title: 'MENU.home',
        icon: IMAGES.imgLogo,
        iconType: ELINK_ICON_TYPE.IMAGE,
        target: ELINK_HREF.SELF,
        showIconGo: false
      }));

    this.menuItems.push(
      new LinkItem({
        type: ELINK_TYPE.CARD,
        href: 'contact',
        title: 'MENU.contact',
        icon: 'email',
        iconType: ELINK_ICON_TYPE.ICON,
        target: ELINK_HREF.SELF,
        showIconGo: false
      }));

    this.menuItems.push(
      new LinkItem({
        type: ELINK_TYPE.CARD,
        href: 'gallery',
        title: 'MENU.gallery',
        icon: 'photo_library',
        iconType: ELINK_ICON_TYPE.ICON,
        target: ELINK_HREF.SELF,
        showIconGo: false
      }));
  }

  getCurrentPage() {
    const path = this.router.url.replace('/', '').toLowerCase();
    return `MENU.${path === '' ? 'home' : path}`;
  }
}
