import { Attribute } from './app.attribute';
import { Skill } from './app.skill';

export interface SaveObject {
  fortitude: Array<number>;
  reflex: Array<number>;
  will: Array<number>;
}

export const SaveProgression = {
  weak: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
  strong: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
};

export const BABProgression = {
  partial: [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
  full: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
};

export interface ClassConfiguration {
  name: string;
  keyAttribute: Attribute;
  bab: Array<number>;
  saves: SaveObject;
  stamina: number;
  hp: number;
  ranksPerLevel: number;
  skills: Skill[];
}

export class Class {
  private _NAME;
  private _STAMINA;
  private _HP;
  private _SKILLS;
  private _RANKS_PER_LEVEL;
  private _KEY_ATTRIBUTE;
  private _SAVES;
  private _BAB;

  constructor(config: ClassConfiguration) {
    this._NAME = config.name;
    this._KEY_ATTRIBUTE = config.keyAttribute;
    this._BAB = config.bab;
    this._SAVES = config.saves;
    this._SKILLS = config.skills;
    this._RANKS_PER_LEVEL = config.ranksPerLevel,
    this._HP = config.hp,
    this._STAMINA = config.stamina;
  }

  get name(): string {
    return this._NAME;
  }

  get skills(): Skill[] {
    return this._SKILLS;
  }

  get stamina(): number {
    return this._STAMINA;
  }

  get hp(): number {
    return this._HP;
  }

  get ranksPerLevel(): number {
    return this._RANKS_PER_LEVEL;
  }

  get keyAttribute(): Attribute {
    return this._KEY_ATTRIBUTE;
  }

  get bab(): Array<number> {
    return this._BAB;
  }

  get saves(): Object {
    return this._SAVES;
  }

  apply(): void {
    this._SKILLS.forEach(skill => skill.setClassSkill(true));
  }

}
