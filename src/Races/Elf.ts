import Race from './Race';

class Elf extends Race {
  protected static _quantityInstances = 0;

  maxLifePoints = 99;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Elf._quantityInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._quantityInstances;
  }
}

export default Elf;