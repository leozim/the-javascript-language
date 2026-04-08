const leo = {
    name: 'Leonardo',
    weapon: 'Katana',
    color: 'Blue',
    birthYear: 1995,
    hasChuninLicense: true,

    calcAge: function() {
        this.age = 2026 - this.birthYear;
        return this.age;
    },
    hasLicense: function() {
        this.has = this.hasChuninLicense 
            ? 'I have a license' 
            : 'I do not have a license';
        return this.has;
    }
};

console.log(leo.calcAge());
console.log(leo['calcAge']());

console.log(leo.hasLicense());
console.log(leo['hasLicense']());

console.log(leo['hasLicense'](leo['hasChuninLicense']));
console.log(leo['hasLicense'](false));
