import { Component, Input } from '@angular/core';

import { ELINK_HREF, ELINK_ICON_TYPE, ELINK_TYPE, LinkItem } from './link.entity';
import { IMAGES } from 'src/assets/images/images';

import { CoreService } from '../../services/core.service';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  /**
 * @param setItem Requires a LinkItem model:
 * 
 * [REQUIRED]
 * @param type Choose which type of link to create: ELINK_TYPE
 * @param href Specify the url to go: string
 * @param label Specify the label (text or title) to show: string
 * 
 * [OPTIONAL]
 * @param icon Specify the path/name to the image/icon: string
 * @param iconType Choose the type of icon to show: ELINK_ICON_TYPE (default: 'ico')
 * @param target Choose the target: ELINK_HREF (default: '_blank')
 */
  @Input() set setItem(linkItem: LinkItem) {
    // Set required params
    this.type = linkItem.type;
    this.href = linkItem.href;
    this.title = this.translate.instant(linkItem.title);
    // Set optional params
    this.tooltip = this.coreService.isNullOrEmpty(linkItem.tooltip) ? this.title : this.translate.instant(linkItem.tooltip);
    this.icon = linkItem.icon;
    this.iconType = linkItem.iconType;
    this.target = linkItem.target;
    this.showIconGo = linkItem.showIconGo;
    // Set internal params
    this.isTypeCard = this.type === ELINK_TYPE.CARD;
    this.isTypeCircle = this.type === ELINK_TYPE.CIRCLE;
    this.isTypeBadge = this.type === ELINK_TYPE.BADGE;
  }

  // REQUIRED
  private type: string = ELINK_TYPE.CIRCLE;
  href: string = '';
  title: string = '';

  // OPTIONAL
  tooltip: string = '';
  icon?: string = '';
  iconType?: string = ELINK_ICON_TYPE.ICON;
  target?: string = ELINK_HREF.BLANK;
  showIconGo?: boolean = false;

  // INTERNAL
  isTypeCard = this.type === ELINK_TYPE.CARD;
  isTypeCircle = this.type === ELINK_TYPE.CIRCLE;
  isTypeBadge = this.type === ELINK_TYPE.BADGE;
  svgGoTo = IMAGES.svgGoTo;

  constructor(
    private coreService: CoreService,
    private translate: TranslateService
  ) { }

  isCurrentPage(href: string): boolean {
    const currentFullPage = window.location.hash;
    return currentFullPage.includes(`/${href}`);
  }
}