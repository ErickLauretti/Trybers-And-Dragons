import Race from './Race';

class Dwarf extends Race {
  protected static _quantityInstances = 0;

  maxLifePoints = 80;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Dwarf._quantityInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._quantityInstances;
  }
}

export default Dwarf;