import { Equipment } from './Equipament';

export type CharacterName = 'Peasant' | 'Explorer' | 'Warrior' | 'Shooter';
export type TypeDamage = 'Life' | 'Energy';

export class Character extends Equipment {
  private _name: CharacterName;
  private _life: number;
  private _speed: number;
  private _attack: number;
  private _defense: number;
  private _energy: number;
  private max_life: number;
  private max_energy: number;

  constructor(
    name: CharacterName,
    life: number,
    speed: number,
    attack: number,
    defense: number,
    energy: number,
    readonly maxLife: number,
    readonly maxEnergy: number
  ) {
    super();
    this._name = name;
    this._life = life;
    this._speed = speed;
    this._attack = attack;
    this._defense = defense;
    this._energy = energy;
    this.max_life = maxLife;
    this.max_energy = maxEnergy;
  }

  get name(): string {
    return this._name;
  }

  get life(): number {
    return this._life;
  }
  set life(newLife: number) {
    this._life = newLife;
  }
  get speed(): number {
    return this._speed;
  }

  get attack(): number {
    return this._attack;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): number {
    return this._energy;
  }
  set energy(newEnergy: number) {
    this._energy = newEnergy;
  }
  damage(type: TypeDamage, damageValue: number) {
    switch (type) {
      case 'Life':
        this.decrementLife(damageValue);
        break;
      case 'Energy':
        this.decrementEnergy(damageValue);
        break;
      default:
        break;
    }
  }
  decrementLife(newValue: number) {
    this.life -= newValue;
  }
  decrementEnergy(newValue: number) {
    this.energy -= newValue;
  }
  // Add common methods or properties for all characters if needed
}
