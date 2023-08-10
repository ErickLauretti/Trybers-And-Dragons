import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  protected static _quantityInstances = 0;
  protected _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._quantityInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._quantityInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;