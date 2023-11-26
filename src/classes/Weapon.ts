import { Enemy } from './Enemy';

export type TypeWeapon = 'MeleeWeapons' | 'Firearms';

export abstract class Weapon {
  public abstract damage: number;
  public abstract name: string;
  attack(enemy: Enemy, damage: number) {}
  restore() {}
  destroy() {}
  upgrade() {}
}
