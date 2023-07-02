import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  // PUBLIC
  public static appTitle = 'Corazón de Jazmyn';
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
}