export enum BUTTONS {
  dialogAccept = 'BUTTONS.accept',
  dialogCancel = 'BUTTONS.cancel'
}

export interface IValueText {
  value: string;
  text: string;
}

export class ValueText {
  protected static parameters = {
    value: 'value',
    text: 'text',
  };

  value: string;
  text: string;

  constructor(value: string, text: string) {
    this.value = value;
    this.text = text;
  }
}

export enum EDateFormat {
  short = 'ddMMyyyy',
  shortDash = 'dd-MM-yyyy',
  shortSlash = 'dd/MM/yyyy',
  long = 'ddMMyyyyTHH:mm:ss',
  longDash = 'dd-MM-yyyy HH:mm:ss',
  longSlash = 'dd/MM/yyyy HH:mm:ss',
}
