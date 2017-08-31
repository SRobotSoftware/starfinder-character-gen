import { Optional } from '@angular/core';
import { Attribute } from './app.attribute';

export class Race {
  private _NAME;
  private _ATTRIBUTES;
  private _NEG_ATTRIBUTE;
  private _HP;

  constructor(name: string, hp: number, increasedAttributes: Attribute[], @Optional() decreasedAttribute?: Attribute) {
    this._NAME = name;
    this._HP = hp;
    this._ATTRIBUTES = increasedAttributes;
    this._NEG_ATTRIBUTE = decreasedAttribute;
  }

  get name(): string {
    return this._NAME;
  }

  get hp(): number {
    return this._HP;
  }

  get attributes(): Attribute[] {
    return this._NEG_ATTRIBUTE ?
      this._ATTRIBUTES.concat(this._NEG_ATTRIBUTE) :
      this._ATTRIBUTES;
  }

  get detriment(): Attribute {
    return this._NEG_ATTRIBUTE;
  }

  get supplements(): Attribute[] {
    return this._ATTRIBUTES;
  }

  apply(): void {
    this._ATTRIBUTES.forEach(attribute => attribute.add(2));
    if (this._NEG_ATTRIBUTE) {
      this._NEG_ATTRIBUTE.subtract(2);
    }
  }

}
