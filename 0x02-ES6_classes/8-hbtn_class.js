export default class HolbertonClass{
    constructor(size,location){
        if(typeof location !== 'string') throw TypeError('location must be a string');
        if(typeof size!== 'number') throw TypeError('size must be a number');
        this._size = size;
        this._location = location;
    }
    //I don't Know how to implement this part
    //   [Symbol.toPrimitive](hint) {
    // if (hint === 'string') return this._location;
    // if (hint === 'number') return this._size;
    // return 42;
    //   }
}