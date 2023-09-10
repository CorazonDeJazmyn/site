import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoreService } from './shared/services/core.service';
import { DBService } from './shared/services/db.service';

import { IMAGES } from 'src/assets/images/images';
import { ELINK_ICON_TYPE, ELINK_TYPE, LinkItem, ELINK_HREF } from './shared/components/link/link.entity';

/**
 * To publish this app on Github Pages
 * Source: https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4
 *
 * 1. Install: npm i angular-cli-ghpages - save-dev
 * 2. ng build --configuration production --base-href "https://corazondejazmyn.github.io/site/"
 * 3. ngh -d dist/site || npx angular-cli-ghpages - dir=dist/site
 *
 * Sum up: ng build --configuration production --base-href "https://corazondejazmyn.github.io/site/" && ngh -d dist/site
 *
 * OR
 * 1. npm run publish-generate
 * 2. npm run publish-upload
 * 3. npm run deploy
 * (this one launches a package.json script. Check it out to update any details)
 */

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
    private dbService: DBService,
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
