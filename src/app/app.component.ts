import { Component } from '@angular/core';
import { Attribute } from './app.attribute';
import { Skill } from './app.skill';
import { Theme } from './app.theme';
import { Race } from './app.race';
import { Class, SaveProgression, BABProgression } from './app.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _race;
  _theme;
  _class;
  _ATTRIBUTE_MINIMUM =  8;
  attributes = {
    STR: new Attribute('STR'),
    DEX: new Attribute('DEX'),
    CON: new Attribute('CON'),
    INT: new Attribute('INT'),
    WIS: new Attribute('WIS'),
    CHA: new Attribute('CHA'),
  };
  skills = {
    acrobatics: new Skill('Acrobatics', this.attributes.DEX, true),
    athletics: new Skill('Athletics', this.attributes.STR, true),
    bluff: new Skill('Bluff', this.attributes.CHA),
    computers: new Skill('Computers', this.attributes.INT, false, true),
    culture: new Skill('Culture', this.attributes.INT, false, true),
    diplomacy: new Skill('Diplomacy', this.attributes.CHA),
    disguise: new Skill('Disguise', this.attributes.CHA),
    engineering: new Skill('Engineering', this.attributes.INT, false, true),
    intimidate: new Skill('Intimidate', this.attributes.CHA),
    lifeScience: new Skill('Life Science', this.attributes.INT, false, true),
    medicine: new Skill('Medicine', this.attributes.INT, false, true),
    mysticism: new Skill('Mysticism', this.attributes.WIS, false, true),
    perception: new Skill('Perception', this.attributes.WIS),
    physicalScience: new Skill('Physical Science', this.attributes.INT, false, true),
    piloting: new Skill('Piloting', this.attributes.DEX),
    senseMotive: new Skill('Sense Motive', this.attributes.WIS),
    sleightOfHand: new Skill('Sleight of Hand', this.attributes.DEX, true, true),
    stealth: new Skill('Stealth', this.attributes.DEX, true),
    survival: new Skill('Survival', this.attributes.WIS),
  };
  themes = {
    acePilot: new Theme('Ace Pilot', this.attributes.DEX),
    bountyHunter: new Theme('Bounty Hunter', this.attributes.CON),
    icon: new Theme('Icon', this.attributes.CHA),
    mercenary: new Theme('Mercenary', this.attributes.STR),
    outlaw: new Theme('Outlaw', this.attributes.DEX),
    priest: new Theme('Priest', this.attributes.WIS),
    scholar: new Theme('Scholar', this.attributes.INT),
    spacefarer: new Theme('Spacefarer', this.attributes.CON),
    xenoseeker: new Theme('Xenoseeker', this.attributes.CHA),
    // themeless: new Theme('Themeless', this.attributes.STR),
  };
  races = {
    android: new Race('Android', 2, [this.attributes.DEX, this.attributes.INT], this.attributes.CHA),
    human: new Race('Human', 4, [this.attributes.STR, this.attributes.DEX]),
    kasatha: new Race('Kasatha', 4, [this.attributes.STR, this.attributes.WIS], this.attributes.INT),
    damaya: new Race('Lashunta (Damaya)', 4, [this.attributes.INT, this.attributes.CHA], this.attributes.CON),
    korasha: new Race('Lashunta (Korasha)', 4, [this.attributes.STR, this.attributes.CHA], this.attributes.WIS),
    shirren: new Race('Shirren', 6, [this.attributes.CON, this.attributes.WIS], this.attributes.CHA),
    vesk: new Race('Vesk', 6, [this.attributes.STR, this.attributes.CON], this.attributes.INT),
    ysoki: new Race('Ysoki', 2, [this.attributes.DEX, this.attributes.INT], this.attributes.STR),
  };
  classes = {
    envoy: new Class({
      name: 'Envoy',
      keyAttribute: this.attributes.CHA,
      bab: BABProgression.partial,
      saves: {
        fortitude: SaveProgression.weak,
        reflex: SaveProgression.strong,
        will: SaveProgression.strong,
      },
      stamina: 6,
      hp: 6,
      ranksPerLevel: 8,
      skills: [
        this.skills.acrobatics,
        this.skills.athletics,
        this.skills.bluff,
        this.skills.computers,
        this.skills.culture,
        this.skills.diplomacy,
        this.skills.disguise,
        this.skills.engineering,
        this.skills.intimidate,
        this.skills.medicine,
        this.skills.perception,
        this.skills.piloting,
        this.skills.senseMotive,
        this.skills.sleightOfHand,
        this.skills.stealth,
      ],
    }),
    mechanic: new Class({
      name: 'Mechanic',
      keyAttribute: this.attributes.INT,
      bab: BABProgression.partial,
      saves: {
        fortitude: SaveProgression.strong,
        reflex: SaveProgression.strong,
        will: SaveProgression.weak,
      },
      stamina: 6,
      hp: 6,
      ranksPerLevel: 4,
      skills: [
        this.skills.athletics,
        this.skills.computers,
        this.skills.engineering,
        this.skills.medicine,
        this.skills.perception,
        this.skills.physicalScience,
        this.skills.piloting,
      ],
    }),
    mystic: new Class({
      name: 'Mystic',
      keyAttribute: this.attributes.WIS,
      bab: BABProgression.partial,
      saves: {
        fortitude: SaveProgression.weak,
        reflex: SaveProgression.weak,
        will: SaveProgression.strong,
      },
      stamina: 6,
      hp: 6,
      ranksPerLevel: 6,
      skills: [
        this.skills.bluff,
        this.skills.culture,
        this.skills.diplomacy,
        this.skills.disguise,
        this.skills.intimidate,
        this.skills.lifeScience,
        this.skills.medicine,
        this.skills.mysticism,
        this.skills.perception,
        this.skills.senseMotive,
        this.skills.survival,
      ],
    }),
    operative: new Class({
      name: 'Operative',
      keyAttribute: this.attributes.DEX,
      bab: BABProgression.partial,
      saves: {
        fortitude: SaveProgression.weak,
        reflex: SaveProgression.strong,
        will: SaveProgression.strong,
      },
      stamina: 6,
      hp: 6,
      ranksPerLevel: 8,
      skills: [
        this.skills.acrobatics,
        this.skills.athletics,
        this.skills.bluff,
        this.skills.computers,
        this.skills.culture,
        this.skills.disguise,
        this.skills.engineering,
        this.skills.intimidate,
        this.skills.medicine,
        this.skills.perception,
        this.skills.piloting,
        this.skills.senseMotive,
        this.skills.sleightOfHand,
        this.skills.stealth,
        this.skills.survival,
      ],
    }),
    solarian: new Class({
      name: 'Solarian',
      keyAttribute: this.attributes.CHA,
      bab: BABProgression.full,
      saves: {
        fortitude: SaveProgression.strong,
        reflex: SaveProgression.weak,
        will: SaveProgression.strong,
      },
      stamina: 7,
      hp: 7,
      ranksPerLevel: 4,
      skills: [
        this.skills.acrobatics,
        this.skills.athletics,
        this.skills.diplomacy,
        this.skills.intimidate,
        this.skills.mysticism,
        this.skills.perception,
        this.skills.physicalScience,
        this.skills.senseMotive,
        this.skills.stealth,
      ],
    }),
    soldier: new Class({
      name: 'Soldier',
      keyAttribute: this.attributes.STR,
      bab: BABProgression.full,
      saves: {
        fortitude: SaveProgression.strong,
        reflex: SaveProgression.weak,
        will: SaveProgression.strong,
      },
      stamina: 7,
      hp: 7,
      ranksPerLevel: 4,
      skills: [
        this.skills.acrobatics,
        this.skills.athletics,
        this.skills.engineering,
        this.skills.intimidate,
        this.skills.medicine,
        this.skills.piloting,
        this.skills.survival,
      ],
    }),
    technomancer: new Class({
      name: 'Technomancer',
      keyAttribute: this.attributes.INT,
      bab: BABProgression.partial,
      saves: {
        fortitude: SaveProgression.weak,
        reflex: SaveProgression.weak,
        will: SaveProgression.strong,
      },
      stamina: 5,
      hp: 5,
      ranksPerLevel: 4,
      skills: [
        this.skills.computers,
        this.skills.engineering,
        this.skills.lifeScience,
        this.skills.mysticism,
        this.skills.physicalScience,
        this.skills.piloting,
        this.skills.sleightOfHand,
      ],
    }),
  };
  attributeKeys = Object.keys(this.attributes);
  skillKeys = Object.keys(this.skills);
  themeKeys = Object.keys(this.themes);
  raceKeys = Object.keys(this.races);
  classKeys = Object.keys(this.classes);
  pointBuyPool = {
    _POOL_MAX: 10,
    _BUY_MAX: 18,
    _BUY_MIN: this._ATTRIBUTE_MINIMUM,

    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,

    remaining: () => this.pointBuyPool._POOL_MAX - Object
      .keys(this.pointBuyPool)
      .filter(key => this.attributeKeys.includes(key))
      .map(key => this.pointBuyPool[key])
      .reduce((total, val) => total += val),
    spend: attribute => {
      if (attribute.raw < this.pointBuyPool._BUY_MAX && this.pointBuyPool.remaining()) {
        attribute.add();
        if ((attribute.raw > 10 +
          (this._race ? this._race.supplements.map(attr => attr.name).includes(attribute.name) ? 2 : 0 : 0) +
          (this._theme ? this._theme.attribute.name === attribute.name ? 1 : 0 : 0))
          || (this._race && this._race.detriment.name === attribute.name)) {
          this.pointBuyPool[attribute.name] += 1;
        }
      }
    },
    refund: attribute => {
      if (attribute.raw > this.pointBuyPool._BUY_MIN) {
        attribute.subtract();
        if (this.pointBuyPool[attribute.name]) {
          this.pointBuyPool[attribute.name] -= 1;
        }
      }
    },
    reset: () => {
      Object
        .keys(this.pointBuyPool)
        .filter(key => this.attributeKeys.includes(key))
        .forEach(key => this.pointBuyPool[key] = 0);
    },
  };

  rankBuyPool = {
    remaining: () => (this._class ? this._class.ranksPerLevel : 0) -
    parseInt(this.skillKeys.reduce((total, key) => total += this.skills[key].ranks), 10),
  };

  selectTheme(theme): void {
    this.resetAttributes();
    if (this._race) {
      this._race.apply();
    }
    this._theme = theme;
    this._theme.apply();
    if (this._class) {
      this._class.apply();
    }
    this.resetSkills();
  }

  selectRace(race): void {
    this.resetAttributes();
    this._race = race;
    this._race.apply();
    if (this._theme) {
      this._theme.apply();
    }
    if (this._class) {
      this._class.apply();
    }
    this.resetSkills();
  }

  selectClass(selection): void {
    this.resetAttributes();
    if (this._race) {
      this._race.apply();
    }
    if (this._theme) {
      this._theme.apply();
    }
    this._class = selection;
    this.resetSkills();
    this.skillKeys.forEach(key => this.skills[key].setClassSkill());
    this._class.apply();
  }

  displayRaceAttributes(race): string[] {
    return race.attributes
      .map((attribute, index, arr) => {
        if (arr.length > 2 && (index === arr.length - 1)) {
          return `${attribute.name} - 2`;
        }
        return `${attribute.name} + 2`;
      })
      .join(' ');
  }

  displayClassSkills(thisClass): string[] {
    return thisClass.skills
      .map(skill => skill.name)
      .join(', ');
  }

  displayResolve(): number {
    return Math.max(Math.max(Math.floor(1 / 2), 1) + this._class.keyAttribute.mod, 1);
  }

  displayBAB(): number {
    return this._class.bab[0];
  }

  displayFortitude(): number {
    return this._class.saves.fortitude[0];
  }

  displayReflex(): number {
    return this._class.saves.reflex[0];
  }

  displayWill(): number {
    return this._class.saves.will[0];
  }

  resetAttributes(): void {
    this.pointBuyPool.reset();
    this.attributeKeys.forEach(key => this.attributes[key].set());
  }

  resetTheme(): void {
    this._theme = undefined;
  }

  resetRace(): void {
    this._race = undefined;
  }

  resetClass(): void {
    this._class = undefined;
  }

  resetSkills(): void {
    this.skillKeys.forEach(key => this.skills[key].setRanks());
  }

  resetCharacter(): void {
    this.resetAttributes();
    this.resetTheme();
    this.resetRace();
    this.resetClass();
  }

  ranksRemaining = () => (this._class ? this._class.ranksPerLevel + this.attributes.INT.mod : 0) -
    this.skillKeys.reduce((total, key) => total += this.skills[key].ranks, 0)

}
