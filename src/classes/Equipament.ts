import { Character } from './Character';
import { MelleWeapon } from './weapons/MeleeWeapons';

export class Equipment {
  private _weapon: MelleWeapon | null;

  constructor() {
    this._weapon = null;
  }

  get weapon(): MelleWeapon | null {
    return this._weapon;
  }

  equipWeapon(newWeapon: MelleWeapon | null, character: Character) {
    if (character.name != 'Peasant' && character.name != 'Explorer') {
      this._weapon = newWeapon;
    }
  }
}
