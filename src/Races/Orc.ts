import Race from './Race';

class Orc extends Race {
  protected static _quantityInstances = 0;

  maxLifePoints = 74;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Orc._quantityInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._quantityInstances;
  }
}

export default Orc;