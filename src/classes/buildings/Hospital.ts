import { Building } from '../Building';
import { Character } from '../Character';
import { ActionBuilding } from './ActionBuilding';

export class Hospital extends Building implements ActionBuilding {
  slot: Character | null = null;
  constructor() {
    super('Hospital', 'Recovers energy and life for units');
  }
  add(character: Character): void {
    this.slot = character;
  }
  execute(): void {
    this.recoverStatus();
  }
  recoverStatus() {
    if (!this.slot) throw new Error('Charracter is missing.');
    this.slot.life = this.slot.maxLife;
    this.slot.energy = this.slot.maxEnergy;
    this.clearSlot();
  }
  clearSlot() {
    this.slot = null;
  }

  // Add methods or properties specific to Hospital if needed
}
