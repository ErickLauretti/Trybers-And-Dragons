import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _strength: number;
  protected _lifePoints: number;

  constructor() {
    this._strength = 63;
    this._lifePoints = 85;
  }

  get strength(): number {
    return this._strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const hp = this._lifePoints - attackPoints;
    if (hp <= 0) {
      this._lifePoints = -1;
    }

    this._lifePoints = hp;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;