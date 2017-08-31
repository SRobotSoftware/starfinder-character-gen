import { Optional } from '@angular/core';

export class Attribute {
  private RAW_DEFAULT = 10;
  private RAW_MAX = 26;
  private RAW_MIN = 1;
  private _RAW;
  private _NAME;

  constructor(name: string, @Optional() raw?: number) {
    this._NAME = name;
    this._RAW = raw ? this.clampRaw(raw) : this.RAW_DEFAULT;
  }

  private clampRaw(raw) {
    return Math.max(Math.min(raw, this.RAW_MAX), this.RAW_MIN);
  }

  get raw(): number {
    return this._RAW;
  }

  get mod(): number {
      return Math.floor((this.raw - 10) / 2);
    }

  get name(): string {
    return this._NAME;
  }

  add(amount = 1): number {
    this._RAW = this.clampRaw(this._RAW + amount);
    return this._RAW;
  }

  subtract(amount = 1): number {
    this._RAW = this.clampRaw(this._RAW - amount);
    return this._RAW;
  }

  set(amount = this.RAW_DEFAULT): number {
    this._RAW = this.clampRaw(amount);
    return this._RAW;
  }

}
