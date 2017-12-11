class Point {
  constructor(public x: number, public y: number) { }

  length(o: Point) {
    const width = this.x - o.x;
    const height = this.y - o.y;
    return Math.sqrt(width * width + height * height);
  }

  static origin = new Point(0, 0);
}


class ColoredPoint extends Point implements Colored {
  constructor(x: number, y: number, color: string) {
    super(x, y);
  }
}

interface Colored { color: string; }

const printColor = (c: Colored) => console.log(c.color);

const redPoint = new ColoredPoint(10, 5, 'red');
printColor(redPoint);

const redObject = { color: 'red' };

printColor(redObject);


interface Named {
  name: string;
}
class Person {
  constructor(public name: string) {
  }
}

let p: Named;

// OK, because of structural typing / duck typing
p = new Person('Nico');

const getName = (named: { name: string }) => named.name;
const pName = getName(p);
