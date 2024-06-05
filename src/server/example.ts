class MakeCoffee {

  private _wondoo;
  private _water;
  private _sugar;
  private _milk;

  constructor(wondoo : string, water : number, sugar : boolean, milk : boolean){
    this._wondoo = wondoo;
    this._water = water;
    this._sugar = sugar;
    this._milk = milk;
  }

  set Wondoo(value : string){
    this._wondoo = value;
  }

  get Wondoo() : string{
    return this._wondoo + "산";
  }

  set Water(value : number){
    this._water = value;
  }

  get Water() : string{
    return this._water + "L";
  }
}

let test = new MakeCoffee("대전", 300, false, true);

console.log(test.Wondoo);
console.log(test.Water);