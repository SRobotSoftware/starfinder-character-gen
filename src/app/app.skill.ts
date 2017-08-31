import { Optional } from '@angular/core';
import { Attribute } from './app.attribute';

export class Skill {
  private RANKS_DEFAULT = 0;
  private RANKS_MAX = 100;
  private RANKS_MIN = 0;
  private _RANKS = 0;
  private _MISC = 0;
  private _REQUIRES_TRAINED = false;
  private _ARMOR_PENALTY = false;
  private _CLASS_SKILL = false;
  private _NAME: string;
  private _ATTRIBUTE: Attribute;

  constructor(
    name: string,
    attribute: Attribute,
    @Optional() hasArmorPenalty?: boolean,
    @Optional() requiresTraining?: boolean,
    @Optional() classSkill?: boolean,
    @Optional() initialRanks?: number,
  ) {
    this._NAME = name;
    this._ATTRIBUTE = attribute;
    this._ARMOR_PENALTY = hasArmorPenalty;
    this._REQUIRES_TRAINED = requiresTraining;
    this._CLASS_SKILL = classSkill;
    this._RANKS = initialRanks ? this.clampRANKS(initialRanks) : this.RANKS_DEFAULT;
  }

  private clampRANKS(RANKS) {
    return Math.max(Math.min(RANKS, this.RANKS_MAX), this.RANKS_MIN);
  }

  get ranks(): number {
    return this._RANKS;
  }

  get misc(): number {
    return this._MISC;
  }

  get name(): string {
    return this._NAME;
  }

  get total(): number {
    if ((this._REQUIRES_TRAINED && this._RANKS > 0) || !this._REQUIRES_TRAINED) {
      return this._RANKS + this._MISC + this._ATTRIBUTE.mod + (this._CLASS_SKILL ? 3 : 0);
    }
    return 0;
  }

  get attribute(): Attribute {
    return this._ATTRIBUTE;
  }

  get classSkill(): boolean {
    return this._CLASS_SKILL;
  }

  get requiresTraining(): boolean {
    return this._REQUIRES_TRAINED;
  }

  set requiresTraining(doesRequireTraining) {
    this._REQUIRES_TRAINED = doesRequireTraining;
  }

  get hasPenalty(): boolean {
    return this._ARMOR_PENALTY;
  }

  addRanks(amount = 1): number {
    this._RANKS = this.clampRANKS(this._RANKS + amount);
    return this._RANKS;
  }

  subtractRanks(amount = 1): number {
    this._RANKS = this.clampRANKS(this._RANKS - amount);
    return this._RANKS;
  }

  addMisc(amount = 1): number {
    return this._MISC += amount;
  }

  subtractMisc(amount = 1): number {
    return this._MISC -= amount;
  }

  setRanks(amount = this.RANKS_DEFAULT): number {
    this._RANKS = this.clampRANKS(amount);
    return this._RANKS;
  }

  setMisc(amount = 0): number {
    return this._MISC = amount;
  }

  setClassSkill(isClassSkill = false): boolean {
    return this._CLASS_SKILL = isClassSkill;
  }

}
