import { Enemy } from '../Enemy';
import { Weapon } from '../Weapon';
export type MelleWeaponNames = 'Axe' | 'Sword' | 'Knife';
export class MelleWeapon implements Weapon {
  public damage: number;
  public name: MelleWeaponNames;
  constructor(name: MelleWeaponNames, damage: number) {
    this.name = name;
    this.damage = damage;
  }

  attack(enemy: Enemy): void {
    enemy.setLife(this.damage);
  }
  restore(): void {
    throw new Error('Method not implemented.');
  }
  destroy(): void {
    throw new Error('Method not implemented.');
  }
  upgrade(): void {
    throw new Error('Method not implemented.');
  }
}
