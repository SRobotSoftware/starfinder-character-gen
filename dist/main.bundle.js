webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.attribute.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attribute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var Attribute = (function () {
    function Attribute(name, raw) {
        this.RAW_DEFAULT = 10;
        this.RAW_MAX = 26;
        this.RAW_MIN = 1;
        this._NAME = name;
        this._RAW = raw ? this.clampRaw(raw) : this.RAW_DEFAULT;
    }
    Attribute.prototype.clampRaw = function (raw) {
        return Math.max(Math.min(raw, this.RAW_MAX), this.RAW_MIN);
    };
    Object.defineProperty(Attribute.prototype, "raw", {
        get: function () {
            return this._RAW;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "mod", {
        get: function () {
            return Math.floor((this.raw - 10) / 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "name", {
        get: function () {
            return this._NAME;
        },
        enumerable: true,
        configurable: true
    });
    Attribute.prototype.add = function (amount) {
        if (amount === void 0) { amount = 1; }
        this._RAW = this.clampRaw(this._RAW + amount);
        return this._RAW;
    };
    Attribute.prototype.subtract = function (amount) {
        if (amount === void 0) { amount = 1; }
        this._RAW = this.clampRaw(this._RAW - amount);
        return this._RAW;
    };
    Attribute.prototype.set = function (amount) {
        if (amount === void 0) { amount = this.RAW_DEFAULT; }
        this._RAW = this.clampRaw(amount);
        return this._RAW;
    };
    return Attribute;
}());
Attribute = __decorate([
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
    __metadata("design:paramtypes", [String, Number])
], Attribute);

//# sourceMappingURL=app.attribute.js.map

/***/ }),

/***/ "../../../../../src/app/app.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SaveProgression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BABProgression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Class; });
var SaveProgression = {
    weak: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    strong: [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
};
var BABProgression = {
    partial: [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
    full: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
};
var Class = (function () {
    function Class(config) {
        this._NAME = config.name;
        this._KEY_ATTRIBUTE = config.keyAttribute;
        this._BAB = config.bab;
        this._SAVES = config.saves;
        this._SKILLS = config.skills;
        this._RANKS_PER_LEVEL = config.ranksPerLevel,
            this._HP = config.hp,
            this._STAMINA = config.stamina;
    }
    Object.defineProperty(Class.prototype, "name", {
        get: function () {
            return this._NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "skills", {
        get: function () {
            return this._SKILLS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "stamina", {
        get: function () {
            return this._STAMINA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "hp", {
        get: function () {
            return this._HP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "ranksPerLevel", {
        get: function () {
            return this._RANKS_PER_LEVEL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "keyAttribute", {
        get: function () {
            return this._KEY_ATTRIBUTE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "bab", {
        get: function () {
            return this._BAB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "saves", {
        get: function () {
            return this._SAVES;
        },
        enumerable: true,
        configurable: true
    });
    Class.prototype.apply = function () {
        this._SKILLS.forEach(function (skill) { return skill.setClassSkill(true); });
    };
    return Class;
}());

//# sourceMappingURL=app.class.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\r\n  height: 80vh;\r\n  position: relative !important;\r\n}\r\n\r\n.menu-toggle {\r\n  position: absolute !important;\r\n  right: 20px;\r\n  bottom: 10px;\r\n  z-index: 1;\r\n}\r\n\r\n.main-content {\r\n  overflow-y: scroll;\r\n  position: absolute !important;\r\n}\r\n\r\ntr:nth-child(odd) {\r\n  background-color: rgba(173, 216, 230, 0.25);\r\n}\r\n\r\nbutton:disabled {\r\n  background-color: rgba(240, 128, 128, 0.25);\r\n}\r\n\r\n.complete {\r\n  background-color: rgba(144, 238, 144, 0.25);\r\n}\r\nmd-card-content {\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>\r\n    Starfinder Character Creator\r\n  </h1>\r\n  <md-sidenav-container class=\"main\">\r\n    <md-sidenav #sidenav mode=\"over\">\r\n      <md-list>\r\n        <md-list-item>\r\n          <a href=\"#races\">\r\n            <button md-button (click)=\"sidenav.close()\">Races</button>\r\n          </a>\r\n        </md-list-item>\r\n        <md-list-item>\r\n          <a href=\"#themes\">\r\n            <button md-button (click)=\"sidenav.close()\">Themes</button>\r\n          </a>\r\n        </md-list-item>\r\n        <md-list-item>\r\n          <a href=\"#classes\">\r\n            <button md-button (click)=\"sidenav.close()\">Classes</button>\r\n          </a>\r\n        </md-list-item>\r\n        <md-list-item>\r\n          <a href=\"#attributes\">\r\n            <button md-button (click)=\"sidenav.close()\">Attributes</button>\r\n          </a>\r\n        </md-list-item>\r\n        <md-list-item>\r\n          <a href=\"#skills\">\r\n            <button md-button (click)=\"sidenav.close()\">Skills</button>\r\n          </a>\r\n        </md-list-item>\r\n        <md-list-item>\r\n          <a href=\"#summary\">\r\n            <button md-button (click)=\"sidenav.close()\">Summary</button>\r\n          </a>\r\n        </md-list-item>\r\n        <md-list-item>\r\n          <button md-button (click)=\"sidenav.toggle()\">Close</button>\r\n        </md-list-item>\r\n      </md-list>\r\n    </md-sidenav>\r\n    <md-card class=\"main-content\">\r\n      <md-card class=\"races\" [ngClass]=\"{complete: _race}\">\r\n        <md-card-title><a name=\"races\">Races</a></md-card-title>\r\n        <md-card-content>\r\n          <table>\r\n            <tr>\r\n              <th>Race</th>\r\n              <th>Attributes</th>\r\n              <th>HP</th>\r\n              <th>Action</th>\r\n            </tr>\r\n            <tr *ngFor=\"let race of raceKeys\">\r\n              <td>{{ races[race].name }}</td>\r\n              <td>{{ displayRaceAttributes(races[race]) }}</td>\r\n              <td>{{ races[race].hp }}</td>\r\n              <td>\r\n                <button\r\n                  md-button\r\n                  [disabled]=\"_race && _race.name === races[race].name\"\r\n                  (click)=\"selectRace(races[race])\"\r\n                >Select</button>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </md-card-content>\r\n      </md-card>\r\n      <md-card class=\"themes\" [ngClass]=\"{complete: _theme}\">\r\n        <md-card-title><a name=\"themes\">Themes</a></md-card-title>\r\n        <md-card-content>\r\n          <table>\r\n            <tr>\r\n              <th>Theme</th>\r\n              <th>Attribute</th>\r\n              <th>Action</th>\r\n            </tr>\r\n            <tr *ngFor=\"let theme of themeKeys\">\r\n              <td>{{ themes[theme].name }}</td>\r\n              <td>{{ themes[theme].attribute.name }}+1</td>\r\n              <td>\r\n                <button\r\n                  md-button\r\n                  [disabled]=\"_theme && _theme.name === themes[theme].name\"\r\n                  (click)=\"selectTheme(themes[theme])\"\r\n                >Select</button>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </md-card-content>\r\n      </md-card>\r\n      <md-card class=\"classes\" [ngClass]=\"{complete: _class}\">\r\n        <md-card-title><a name=\"classes\">Classes</a></md-card-title>\r\n        <md-card-content>\r\n          <table>\r\n            <tr>\r\n              <th>Class</th>\r\n              <th>Skills</th>\r\n              <th>Action</th>\r\n            </tr>\r\n            <tr *ngFor=\"let thisClass of classKeys\">\r\n              <td>{{ classes[thisClass].name }}</td>\r\n              <td>{{ displayClassSkills(classes[thisClass]) }}</td>\r\n              <td>\r\n                <button\r\n                  md-button\r\n                  [disabled]=\"_class && _class.name === classes[thisClass].name\"\r\n                  (click)=\"selectClass(classes[thisClass])\"\r\n                >Select</button>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </md-card-content>\r\n      </md-card>\r\n      <md-card class=\"attributes\" [ngClass]=\"{complete: pointBuyPool.remaining() === 0}\">\r\n        <md-card-title><a name=\"attributes\">Attributes</a></md-card-title>\r\n        <md-card-content>\r\n          <div>Point Buy Pool Remaining: {{ pointBuyPool.remaining() }}</div>\r\n          <table>\r\n            <tr>\r\n              <th>Attribute</th>\r\n              <th>Raw</th>\r\n              <th>Mod</th>\r\n              <th>Modify</th>\r\n              <th>Point Buy</th>\r\n            </tr>\r\n            <tr *ngFor=\"let attr of attributeKeys\">\r\n              <td>{{ attributes[attr].name }}</td>\r\n              <td>{{ attributes[attr].raw }}</td>\r\n              <td>{{ attributes[attr].mod }}</td>\r\n              <td>\r\n                <button md-button [disabled]=\"!pointBuyPool.remaining() || attributes[attr].raw >= 18\" (click)=\"pointBuyPool.spend(attributes[attr])\" >++</button>\r\n                <button md-button [disabled]=\"attributes[attr].raw <= _ATTRIBUTE_MINIMUM\" (click)=\"pointBuyPool.refund(attributes[attr])\" >--</button>\r\n              </td>\r\n              <td>{{ pointBuyPool[attr] }}</td>\r\n            </tr>\r\n          </table>\r\n        </md-card-content>\r\n      </md-card>\r\n      <md-card class=\"skills\" [ngClass]=\"{complete: _class && ranksRemaining() === 0}\">\r\n        <md-card-title><a name=\"skills\">Skills</a></md-card-title>\r\n        <md-card-content>\r\n          <div>Skill Ranks Remaining: {{ ranksRemaining() }}</div>\r\n          <table>\r\n            <tr>\r\n              <th>Skill</th>\r\n              <th>Class Skill</th>\r\n              <th>Total</th>\r\n              <th>Attribute</th>\r\n              <th>Mod</th>\r\n              <th>Ranks</th>\r\n              <th>Misc</th>\r\n              <th>Modify</th>\r\n            </tr>\r\n            <tr *ngFor=\"let skill of skillKeys\">\r\n              <td>{{ skills[skill].name }}\r\n                <span *ngIf=\"skills[skill].hasPenalty\">&#42;</span>\r\n                <span *ngIf=\"skills[skill].requiresTraining\">&#877;</span>\r\n              </td>\r\n              <td>{{ skills[skill].classSkill ? '&#10003;' : '&#10007;' }}</td>\r\n              <td>{{ skills[skill].total }}</td>\r\n              <td>{{ skills[skill].attribute.name }}</td>\r\n              <td>{{ skills[skill].attribute.mod }}</td>\r\n              <td>{{ skills[skill].ranks }}</td>\r\n              <td>{{ skills[skill].misc }}</td>\r\n              <td>\r\n                <button md-button [disabled]=\"!ranksRemaining() || skills[skill].ranks >= _level\" (click)=\"skills[skill].addRanks()\">++</button>\r\n                <button md-button [disabled]=\"skills[skill].ranks <= 0\" (click)=\"skills[skill].subtractRanks()\">--</button>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n          <div>\r\n            <div>&#42; Has Armor Penalty</div>\r\n            <div>&#877; Requires Training</div>\r\n          </div>\r\n        </md-card-content>\r\n      </md-card>\r\n      <md-card class=\"characterSummary\" [ngClass]=\"{complete: _race && _theme && _class && pointBuyPool.remaining() === 0 && ranksRemaining() === 0}\">\r\n        <md-card-title><a name=\"summary\">Character Summary</a></md-card-title>\r\n        <md-card-content>\r\n          <table *ngIf=\"this._class\">\r\n            <tr>\r\n              <th>Stamina</th>\r\n              <th>HP</th>\r\n              <th>Resolve</th>\r\n              <th>BAB</th>\r\n              <th>Fortitude</th>\r\n              <th>Reflex</th>\r\n              <th>Will</th>\r\n            </tr>\r\n            <tr>\r\n              <td>{{ _class.stamina + attributes.CON.mod }}</td>\r\n              <td>{{ _class.hp + _class.hp + attributes.CON.mod }}</td>\r\n              <td>{{ displayResolve() }}</td>\r\n              <td>{{ displayBAB() }}</td>\r\n              <td>{{ displayFortitude() }}</td>\r\n              <td>{{ displayReflex() }}</td>\r\n              <td>{{ displayWill() }}</td>\r\n            </tr>\r\n          </table>\r\n        </md-card-content>\r\n      </md-card>\r\n    </md-card>\r\n  </md-sidenav-container>\r\n  <button class=\"menu-toggle\" md-button (click)=\"sidenav.toggle()\">Menu</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_attribute__ = __webpack_require__("../../../../../src/app/app.attribute.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_skill__ = __webpack_require__("../../../../../src/app/app.skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_theme__ = __webpack_require__("../../../../../src/app/app.theme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_race__ = __webpack_require__("../../../../../src/app/app.race.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_class__ = __webpack_require__("../../../../../src/app/app.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this._level = 1;
        this._ATTRIBUTE_MINIMUM = 8;
        this.attributes = {
            STR: new __WEBPACK_IMPORTED_MODULE_1__app_attribute__["a" /* Attribute */]('STR'),
            DEX: new __WEBPACK_IMPORTED_MODULE_1__app_attribute__["a" /* Attribute */]('DEX'),
            CON: new __WEBPACK_IMPORTED_MODULE_1__app_attribute__["a" /* Attribute */]('CON'),
            INT: new __WEBPACK_IMPORTED_MODULE_1__app_attribute__["a" /* Attribute */]('INT'),
            WIS: new __WEBPACK_IMPORTED_MODULE_1__app_attribute__["a" /* Attribute */]('WIS'),
            CHA: new __WEBPACK_IMPORTED_MODULE_1__app_attribute__["a" /* Attribute */]('CHA'),
        };
        this.skills = {
            acrobatics: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Acrobatics', this.attributes.DEX, true),
            athletics: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Athletics', this.attributes.STR, true),
            bluff: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Bluff', this.attributes.CHA),
            computers: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Computers', this.attributes.INT, false, true),
            culture: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Culture', this.attributes.INT, false, true),
            diplomacy: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Diplomacy', this.attributes.CHA),
            disguise: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Disguise', this.attributes.CHA),
            engineering: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Engineering', this.attributes.INT, false, true),
            intimidate: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Intimidate', this.attributes.CHA),
            lifeScience: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Life Science', this.attributes.INT, false, true),
            medicine: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Medicine', this.attributes.INT, false, true),
            mysticism: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Mysticism', this.attributes.WIS, false, true),
            perception: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Perception', this.attributes.WIS),
            physicalScience: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Physical Science', this.attributes.INT, false, true),
            piloting: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Piloting', this.attributes.DEX),
            senseMotive: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Sense Motive', this.attributes.WIS),
            sleightOfHand: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Sleight of Hand', this.attributes.DEX, true, true),
            stealth: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Stealth', this.attributes.DEX, true),
            survival: new __WEBPACK_IMPORTED_MODULE_2__app_skill__["a" /* Skill */]('Survival', this.attributes.WIS),
        };
        this.themes = {
            acePilot: new __WEBPACK_IMPORTED_MODULE_3__app_theme__["a" /* Theme */]('Ace Pilot', this.attributes.DEX),
            bountyHunter: new __WEBPACK_IMPORTED_MODULE_3__app_theme__["a" /* Theme */]('Bounty Hunter', this.attributes.CON),
            icon: new __WEBPACK_IMPORTED_MODULE_3__app_theme__["a" /* Theme */]('Icon', this.attributes.CHA),
            mercenary: new __WEBPACK_IMPORTED_MODULE_3__app_theme__["a" /* Theme */]('Mercenary', this.attributes.STR),
            outlaw: new __WEBPACK_IMPORTED_MODULE_3__app_theme__["a" /* Theme */]('Outlaw', this.attributes.DEX),
            priest: new __WEBPACK_IMPORTED_MODULE_3__app_theme__["a" /* Theme */]('Priest', this.attributes.WIS),
            scholar: new __WEBPACK_IMPORTED_MODULE_3__app_theme__["a" /* Theme */]('Scholar', this.attributes.INT),
            spacefarer: new __WEBPACK_IMPORTED_MODULE_3__app_theme__["a" /* Theme */]('Spacefarer', this.attributes.CON),
            xenoseeker: new __WEBPACK_IMPORTED_MODULE_3__app_theme__["a" /* Theme */]('Xenoseeker', this.attributes.CHA),
        };
        this.races = {
            android: new __WEBPACK_IMPORTED_MODULE_4__app_race__["a" /* Race */]('Android', 2, [this.attributes.DEX, this.attributes.INT], this.attributes.CHA),
            human: new __WEBPACK_IMPORTED_MODULE_4__app_race__["a" /* Race */]('Human', 4, [this.attributes.STR, this.attributes.DEX]),
            kasatha: new __WEBPACK_IMPORTED_MODULE_4__app_race__["a" /* Race */]('Kasatha', 4, [this.attributes.STR, this.attributes.WIS], this.attributes.INT),
            damaya: new __WEBPACK_IMPORTED_MODULE_4__app_race__["a" /* Race */]('Lashunta (Damaya)', 4, [this.attributes.INT, this.attributes.CHA], this.attributes.CON),
            korasha: new __WEBPACK_IMPORTED_MODULE_4__app_race__["a" /* Race */]('Lashunta (Korasha)', 4, [this.attributes.STR, this.attributes.CHA], this.attributes.WIS),
            shirren: new __WEBPACK_IMPORTED_MODULE_4__app_race__["a" /* Race */]('Shirren', 6, [this.attributes.CON, this.attributes.WIS], this.attributes.CHA),
            vesk: new __WEBPACK_IMPORTED_MODULE_4__app_race__["a" /* Race */]('Vesk', 6, [this.attributes.STR, this.attributes.CON], this.attributes.INT),
            ysoki: new __WEBPACK_IMPORTED_MODULE_4__app_race__["a" /* Race */]('Ysoki', 2, [this.attributes.DEX, this.attributes.INT], this.attributes.STR),
        };
        this.classes = {
            envoy: new __WEBPACK_IMPORTED_MODULE_5__app_class__["b" /* Class */]({
                name: 'Envoy',
                keyAttribute: this.attributes.CHA,
                bab: __WEBPACK_IMPORTED_MODULE_5__app_class__["a" /* BABProgression */].partial,
                saves: {
                    fortitude: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].weak,
                    reflex: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
                    will: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
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
            mechanic: new __WEBPACK_IMPORTED_MODULE_5__app_class__["b" /* Class */]({
                name: 'Mechanic',
                keyAttribute: this.attributes.INT,
                bab: __WEBPACK_IMPORTED_MODULE_5__app_class__["a" /* BABProgression */].partial,
                saves: {
                    fortitude: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
                    reflex: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
                    will: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].weak,
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
            mystic: new __WEBPACK_IMPORTED_MODULE_5__app_class__["b" /* Class */]({
                name: 'Mystic',
                keyAttribute: this.attributes.WIS,
                bab: __WEBPACK_IMPORTED_MODULE_5__app_class__["a" /* BABProgression */].partial,
                saves: {
                    fortitude: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].weak,
                    reflex: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].weak,
                    will: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
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
            operative: new __WEBPACK_IMPORTED_MODULE_5__app_class__["b" /* Class */]({
                name: 'Operative',
                keyAttribute: this.attributes.DEX,
                bab: __WEBPACK_IMPORTED_MODULE_5__app_class__["a" /* BABProgression */].partial,
                saves: {
                    fortitude: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].weak,
                    reflex: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
                    will: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
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
            solarian: new __WEBPACK_IMPORTED_MODULE_5__app_class__["b" /* Class */]({
                name: 'Solarian',
                keyAttribute: this.attributes.CHA,
                bab: __WEBPACK_IMPORTED_MODULE_5__app_class__["a" /* BABProgression */].full,
                saves: {
                    fortitude: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
                    reflex: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].weak,
                    will: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
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
            soldier: new __WEBPACK_IMPORTED_MODULE_5__app_class__["b" /* Class */]({
                name: 'Soldier',
                keyAttribute: this.attributes.STR,
                bab: __WEBPACK_IMPORTED_MODULE_5__app_class__["a" /* BABProgression */].full,
                saves: {
                    fortitude: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
                    reflex: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].weak,
                    will: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
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
            technomancer: new __WEBPACK_IMPORTED_MODULE_5__app_class__["b" /* Class */]({
                name: 'Technomancer',
                keyAttribute: this.attributes.INT,
                bab: __WEBPACK_IMPORTED_MODULE_5__app_class__["a" /* BABProgression */].partial,
                saves: {
                    fortitude: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].weak,
                    reflex: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].weak,
                    will: __WEBPACK_IMPORTED_MODULE_5__app_class__["c" /* SaveProgression */].strong,
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
        this.attributeKeys = Object.keys(this.attributes);
        this.skillKeys = Object.keys(this.skills);
        this.themeKeys = Object.keys(this.themes);
        this.raceKeys = Object.keys(this.races);
        this.classKeys = Object.keys(this.classes);
        this.pointBuyPool = {
            _POOL_MAX: 10,
            _BUY_MAX: 18,
            _BUY_MIN: this._ATTRIBUTE_MINIMUM,
            STR: 0,
            DEX: 0,
            CON: 0,
            INT: 0,
            WIS: 0,
            CHA: 0,
            remaining: function () { return _this.pointBuyPool._POOL_MAX - Object
                .keys(_this.pointBuyPool)
                .filter(function (key) { return _this.attributeKeys.includes(key); })
                .map(function (key) { return _this.pointBuyPool[key]; })
                .reduce(function (total, val) { return total += val; }); },
            spend: function (attribute) {
                if (attribute.raw < _this.pointBuyPool._BUY_MAX && _this.pointBuyPool.remaining()) {
                    attribute.add();
                    if ((attribute.raw > 10 +
                        (_this._race ? _this._race.supplements.map(function (attr) { return attr.name; }).includes(attribute.name) ? 2 : 0 : 0) +
                        (_this._theme ? _this._theme.attribute.name === attribute.name ? 1 : 0 : 0))
                        || (_this._race && _this._race.detriment.name === attribute.name)) {
                        _this.pointBuyPool[attribute.name] += 1;
                    }
                }
            },
            refund: function (attribute) {
                if (attribute.raw > _this.pointBuyPool._BUY_MIN) {
                    attribute.subtract();
                    if (_this.pointBuyPool[attribute.name]) {
                        _this.pointBuyPool[attribute.name] -= 1;
                    }
                }
            },
            reset: function () {
                Object
                    .keys(_this.pointBuyPool)
                    .filter(function (key) { return _this.attributeKeys.includes(key); })
                    .forEach(function (key) { return _this.pointBuyPool[key] = 0; });
            },
        };
        this.rankBuyPool = {
            remaining: function () { return (_this._class ? _this._class.ranksPerLevel : 0) -
                parseInt(_this.skillKeys.reduce(function (total, key) { return total += _this.skills[key].ranks; }), 10); },
        };
        this.ranksRemaining = function () { return (_this._class ? _this._class.ranksPerLevel + _this.attributes.INT.mod : 0) -
            _this.skillKeys.reduce(function (total, key) { return total += _this.skills[key].ranks; }, 0); };
    }
    AppComponent.prototype.selectTheme = function (theme) {
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
    };
    AppComponent.prototype.selectRace = function (race) {
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
    };
    AppComponent.prototype.selectClass = function (selection) {
        var _this = this;
        this.resetAttributes();
        if (this._race) {
            this._race.apply();
        }
        if (this._theme) {
            this._theme.apply();
        }
        this._class = selection;
        this.resetSkills();
        this.skillKeys.forEach(function (key) { return _this.skills[key].setClassSkill(); });
        this._class.apply();
    };
    AppComponent.prototype.displayRaceAttributes = function (race) {
        return race.attributes
            .map(function (attribute, index, arr) {
            if (arr.length > 2 && (index === arr.length - 1)) {
                return attribute.name + " - 2";
            }
            return attribute.name + " + 2";
        })
            .join(' ');
    };
    AppComponent.prototype.displayClassSkills = function (thisClass) {
        return thisClass.skills
            .map(function (skill) { return skill.name; })
            .join(', ');
    };
    AppComponent.prototype.displayResolve = function () {
        return Math.max(Math.max(Math.floor(1 / 2), 1) + this._class.keyAttribute.mod, 1);
    };
    AppComponent.prototype.displayBAB = function () {
        return this._class.bab[this._level - 1];
    };
    AppComponent.prototype.displayFortitude = function () {
        return this._class.saves.fortitude[this._level - 1];
    };
    AppComponent.prototype.displayReflex = function () {
        return this._class.saves.reflex[this._level - 1];
    };
    AppComponent.prototype.displayWill = function () {
        return this._class.saves.will[this._level - 1];
    };
    AppComponent.prototype.resetAttributes = function () {
        var _this = this;
        this.pointBuyPool.reset();
        this.attributeKeys.forEach(function (key) { return _this.attributes[key].set(); });
    };
    AppComponent.prototype.resetTheme = function () {
        this._theme = undefined;
    };
    AppComponent.prototype.resetRace = function () {
        this._race = undefined;
    };
    AppComponent.prototype.resetClass = function () {
        this._class = undefined;
    };
    AppComponent.prototype.resetSkills = function () {
        var _this = this;
        this.skillKeys.forEach(function (key) { return _this.skills[key].setRanks(); });
    };
    AppComponent.prototype.resetCharacter = function () {
        this.resetAttributes();
        this.resetTheme();
        this.resetRace();
        this.resetClass();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdGridListModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.race.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Race; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_attribute__ = __webpack_require__("../../../../../src/app/app.attribute.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var Race = (function () {
    function Race(name, hp, increasedAttributes, decreasedAttribute) {
        this._NAME = name;
        this._HP = hp;
        this._ATTRIBUTES = increasedAttributes;
        this._NEG_ATTRIBUTE = decreasedAttribute;
    }
    Object.defineProperty(Race.prototype, "name", {
        get: function () {
            return this._NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Race.prototype, "hp", {
        get: function () {
            return this._HP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Race.prototype, "attributes", {
        get: function () {
            return this._NEG_ATTRIBUTE ?
                this._ATTRIBUTES.concat(this._NEG_ATTRIBUTE) :
                this._ATTRIBUTES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Race.prototype, "detriment", {
        get: function () {
            return this._NEG_ATTRIBUTE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Race.prototype, "supplements", {
        get: function () {
            return this._ATTRIBUTES;
        },
        enumerable: true,
        configurable: true
    });
    Race.prototype.apply = function () {
        this._ATTRIBUTES.forEach(function (attribute) { return attribute.add(2); });
        if (this._NEG_ATTRIBUTE) {
            this._NEG_ATTRIBUTE.subtract(2);
        }
    };
    return Race;
}());
Race = __decorate([
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
    __metadata("design:paramtypes", [String, Number, Array, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_attribute__["a" /* Attribute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_attribute__["a" /* Attribute */]) === "function" && _a || Object])
], Race);

var _a;
//# sourceMappingURL=app.race.js.map

/***/ }),

/***/ "../../../../../src/app/app.skill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skill; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var Skill = (function () {
    function Skill(name, attribute, hasArmorPenalty, requiresTraining, classSkill, initialRanks) {
        this.RANKS_DEFAULT = 0;
        this.RANKS_MAX = 100;
        this.RANKS_MIN = 0;
        this._RANKS = 0;
        this._MISC = 0;
        this._REQUIRES_TRAINED = false;
        this._ARMOR_PENALTY = false;
        this._CLASS_SKILL = false;
        this._NAME = name;
        this._ATTRIBUTE = attribute;
        this._ARMOR_PENALTY = hasArmorPenalty;
        this._REQUIRES_TRAINED = requiresTraining;
        this._CLASS_SKILL = classSkill;
        this._RANKS = initialRanks ? this.clampRANKS(initialRanks) : this.RANKS_DEFAULT;
    }
    Skill.prototype.clampRANKS = function (RANKS) {
        return Math.max(Math.min(RANKS, this.RANKS_MAX), this.RANKS_MIN);
    };
    Object.defineProperty(Skill.prototype, "ranks", {
        get: function () {
            return this._RANKS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "misc", {
        get: function () {
            return this._MISC;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "name", {
        get: function () {
            return this._NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "total", {
        get: function () {
            if ((this._REQUIRES_TRAINED && this._RANKS > 0) || !this._REQUIRES_TRAINED) {
                return this._RANKS + this._MISC + this._ATTRIBUTE.mod + (this._CLASS_SKILL ? 3 : 0);
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "attribute", {
        get: function () {
            return this._ATTRIBUTE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "classSkill", {
        get: function () {
            return this._CLASS_SKILL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "requiresTraining", {
        get: function () {
            return this._REQUIRES_TRAINED;
        },
        set: function (doesRequireTraining) {
            this._REQUIRES_TRAINED = doesRequireTraining;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "hasPenalty", {
        get: function () {
            return this._ARMOR_PENALTY;
        },
        enumerable: true,
        configurable: true
    });
    Skill.prototype.addRanks = function (amount) {
        if (amount === void 0) { amount = 1; }
        this._RANKS = this.clampRANKS(this._RANKS + amount);
        return this._RANKS;
    };
    Skill.prototype.subtractRanks = function (amount) {
        if (amount === void 0) { amount = 1; }
        this._RANKS = this.clampRANKS(this._RANKS - amount);
        return this._RANKS;
    };
    Skill.prototype.addMisc = function (amount) {
        if (amount === void 0) { amount = 1; }
        return this._MISC += amount;
    };
    Skill.prototype.subtractMisc = function (amount) {
        if (amount === void 0) { amount = 1; }
        return this._MISC -= amount;
    };
    Skill.prototype.setRanks = function (amount) {
        if (amount === void 0) { amount = this.RANKS_DEFAULT; }
        this._RANKS = this.clampRANKS(amount);
        return this._RANKS;
    };
    Skill.prototype.setMisc = function (amount) {
        if (amount === void 0) { amount = 0; }
        return this._MISC = amount;
    };
    Skill.prototype.setClassSkill = function (isClassSkill) {
        if (isClassSkill === void 0) { isClassSkill = false; }
        return this._CLASS_SKILL = isClassSkill;
    };
    return Skill;
}());
Skill = __decorate([
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
    __metadata("design:paramtypes", [String, typeof (_a = typeof Attribute !== "undefined" && Attribute) === "function" && _a || Object, Boolean, Boolean, Boolean, Number])
], Skill);

var _a;
//# sourceMappingURL=app.skill.js.map

/***/ }),

/***/ "../../../../../src/app/app.theme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theme; });
var Theme = (function () {
    function Theme(name, attribute) {
        this._NAME = name;
        this._ATTRIBUTE = attribute;
    }
    Object.defineProperty(Theme.prototype, "name", {
        get: function () {
            return this._NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Theme.prototype, "attribute", {
        get: function () {
            return this._ATTRIBUTE;
        },
        enumerable: true,
        configurable: true
    });
    Theme.prototype.apply = function () {
        this._ATTRIBUTE.add(1);
        return this._ATTRIBUTE.name;
    };
    return Theme;
}());

//# sourceMappingURL=app.theme.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map