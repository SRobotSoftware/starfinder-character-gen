import { Attribute } from './app.attribute';

export class Theme {
  private _NAME;
  private _ATTRIBUTE;

  constructor(name: string, attribute: Attribute) {
    this._NAME = name;
    this._ATTRIBUTE = attribute;
  }

  get name(): string {
    return this._NAME;
  }

  get attribute(): Attribute {
    return this._ATTRIBUTE;
  }

  apply(): string {
    this._ATTRIBUTE.add(1);
    return this._ATTRIBUTE.name;
  }

}
