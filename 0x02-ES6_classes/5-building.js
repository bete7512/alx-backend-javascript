export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw TypeError('sqft must be a number');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number' && this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') throw Error('Class extending Building must override evacuationWarningMessage');
    this._sqft = sqft;
  }
}
