interface Person {
    name: string,
    age: number,
    hobbies: string[],
    role_tuple: [number, string]; //Tuple
}

enum Role {
    ADMIN = "Admin",
    READ_ONLY = 100,
    AUTHOR = "Author"
};
const enum1 = {
    role: Role.ADMIN
}
console.log(enum1)
const person: Person = {
    name: 'Don',
    age: 43,
    hobbies: ['Music', 'Games'],
    role_tuple: [2, 'developer']
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
  

  type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge < user.age;
}
const u1: User = { name: 'Don', age: 43 };
greet(u1)
console.log(isOlder(u1, 21))