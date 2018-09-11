// Answer These Questions:
//
// - What are essential classes? Cookie, PeanutButter, ChocolateChip
// - What attributes will each class have? name, time
// - What interface will each class provide? bake time
// - How will the classes interact with each other? inherit from Cookie class
// - Which classes will inherit from others, if any?PeanutButter, ChocolateChip
//
//
// Your code here

class Cookie {
    constructor(name, time) {
      this._name = name;
      this._time = time || 5;
    }

    bake() {
      for (var i = 5; i < 30; i = i + 5) {
        if (i < this._time -5) {
          console.log(`${this._name}, pada menit ke ${i} : mentah`);
        } else if (i === this._time - 5) {
          console.log(`${this._name}, pada menit ke ${i} : hampir matang`);
        } else if (i === this._time) {
          console.log(`${this._name}, pada menit ke ${i} : matang`);
        } else if (i > this._time) {
          console.log(`${this._name}, pada menit ke ${i} : hangus`);
        }
      }
    }
}

class PeanutButter extends Cookie {
  constructor(name, time) {
    super('Kue kacang', 20);
  }
}

class ChocolateChip extends Cookie {
  constructor(name, time) {
    super('Kue cokelat', 15);
  }
}

let kueKacang = new PeanutButter()
kueKacang.bake();
console.log('\n');
let kueCoklat = new ChocolateChip()
kueCoklat.bake();
