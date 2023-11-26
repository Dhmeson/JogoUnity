export class Enemy {
  private life;
  private atk;
  private def;
  private maxLife;
  constructor(life: number, atk: number, def: number) {
    this.life = life;
    this.atk = atk;
    this.def = def;
    this.maxLife = life;
  }
  setLife(value: number) {
    this.life -= value;
  }
  getMaxLife() {
    return this.maxLife;
  }
  getLife() {
    return this.life;
  }

  // Getter para a propriedade life
}
