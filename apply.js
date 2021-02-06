const normalPerson = {
    firstName : 'Rahim',
    lastName : 'Uddin',
    salary : 15000 ,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName : 'Hero',
    lastName : 'Balam',
    salary : 25000 
}

const friendlyPerson = {
    firstName : 'Hero',
    lastName : 'Golam',
    salary : 28000 
}

normalPerson.chargeBill.apply(heroPerson, [900, 45, 55]);
normalPerson.chargeBill.apply(heroPerson, [1000, 45, 55]);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [900, 45, 55]);
normalPerson.chargeBill.apply(friendlyPerson, [1000, 45, 55]);
console.log(friendlyPerson.salary);

console.log(normalPerson.salary);