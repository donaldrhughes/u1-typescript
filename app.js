var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "Author";
})(Role || (Role = {}));
;
var enum1 = {
    role: Role.ADMIN
};
console.log(enum1);
var person = {
    name: 'Don',
    age: 43,
    hobbies: ['Music', 'Games'],
    role_tuple: [2, 'developer']
};
var someObj = {
    someKey: 'val'
};
console.log(person.name);
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log(product);
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge < user.age;
}
var u1 = { name: 'Don', age: 43 };
greet(u1);
console.log(isOlder(u1, 21));
