import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  protected _monsters: SimpleFighter[];
  protected _fighter: Fighter;

  constructor(fighter: Fighter, monsters: SimpleFighter[]) {
    super(fighter);
    this._monsters = monsters;
    this._fighter = fighter;
  }

  fight(): number {
    while (
      this._fighter.lifePoints > 0
      && this._monsters.every((e) => e.lifePoints > 0)
    ) {
      this._monsters.forEach((e) => {
        e.attack(this._fighter);
        this._fighter.attack(e);
      });
    }
    return super.fight();
  }
}

export default PVE;