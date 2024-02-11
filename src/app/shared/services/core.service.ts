import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  // PUBLIC
  public static appTitle = 'Corazón de Jazmyn';
  public static socialInstagram = 'https://www.instagram.com/corazondejazmyn';
  private userLanguage: string = '';

  // LANGUAGE

  setUserLanguage(userLang: string): void {
    this.userLanguage = userLang;
  }

  // TEXT AND ITEMS

  isNullOrEmpty = (val: string | null | undefined) => val === undefined || val === null || val === '';
  isNullOrEmptyList = (list: string | any[]) => !list || list.length === 0;
  isString = (str: string | string[]) => typeof str === 'string' || str instanceof String;
  isBoolean = (boo: any) => typeof boo === 'boolean' || boo instanceof Boolean;
  isNumber = (num: any) => typeof num === 'number' || num instanceof Number || (this.isString(num) && !isNaN(num));

  // LISTS

  sort(list: any[], orderColumn: string) {
    if (list && list.length > 0 && !this.isNullOrEmpty(orderColumn)) {
      list = list.sort(function (a, b) {
        if (a[orderColumn] > b[orderColumn]) {
          return 1;
        }
        if (a[orderColumn] < b[orderColumn]) {
          return -1;
        }
        return 0;
      });
    }
    return list;
  }

  // FILE CHECKS

  doesFileExist(urlToFile: string | URL) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('HEAD', urlToFile, false);
      xhr.send();
      return xhr.status.toString() !== '404';
    } catch (error) {
      return false;
    }
  }
}