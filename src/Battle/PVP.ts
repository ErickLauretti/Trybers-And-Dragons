import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _fighter: Fighter;
  private _enemy: Fighter;

  constructor(fighter: Fighter, enemy: Fighter) {
    super(fighter);
    this._fighter = fighter;
    this._enemy = enemy;
  }

  fight(): number {
    return this.luta(this._fighter, this._enemy);
  }

  luta(fighter: Fighter, enemy: Fighter): number {
    fighter.attack(enemy);
    if (enemy.lifePoints === -1) {
      return 1;
    }
    enemy.attack(fighter);
    if (fighter.lifePoints === -1) {
      return -1;
    }
    return this.luta(fighter, enemy);
  }
}

export default PVP;