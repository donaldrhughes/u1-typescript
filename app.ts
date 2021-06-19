interface Person {
    name: string,
    age: number
}

const person: Person = {
    name: 'Don',
    age: 43
};

const someObj: object = {
    someKey: 'val'
};

console.log(person.name)

interface Product {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  }

const product: Product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }
  console.log(product)
  