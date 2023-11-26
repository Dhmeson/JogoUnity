type BuildingName = 'Barracks' | 'Hospital' | 'Arsenal' | 'Center';
export class Building {
  private _name: BuildingName;
  private _function: string;
  private _level: number;

  constructor(name: BuildingName, func: string) {
    this._name = name;
    this._function = func;
    this._level = 1;
  }

  get name(): string {
    return this._name;
  }

  get func(): string {
    return this._function;
  }

  get level(): number {
    return this._level;
  }

  set level(newLevel: number) {
    this._level = newLevel;
  }

  upgrade(): void {
    this._level++;
    console.log(`${this._name} upgraded to level ${this._level}`);
  }
}
