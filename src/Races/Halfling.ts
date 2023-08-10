import Race from './Race';

class Halfling extends Race {
  protected static _quantityInstances = 0;

  maxLifePoints = 60;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Halfling._quantityInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._quantityInstances;
  }
}

export default Halfling;