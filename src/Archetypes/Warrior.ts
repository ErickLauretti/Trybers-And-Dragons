import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  protected static _quantityInstances = 0;
  protected _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._quantityInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._quantityInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;