const leo = {
    name: 'Leonardo',
    weapon: 'Katana',
    color: 'Blue',
    age: 35
};

console.log(leo); // Output: { name: 'Leonardo', weapon: 'Katana', color: 'Blue', age: 35 }
console.log(leo.name);
console.log(leo['weapon']);

leo.twitter = '@leonardo';
console.log(leo['twitter']);