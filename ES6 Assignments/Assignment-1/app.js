
// (1) // ***************//////************//////*****************************

class PersonAccount{
    constructor(firstName, lastName, incomes, expenses,balance){
        this.firstName = firstName,
        this.lastName = lastName,
        this.incomes= incomes,
        this.expenses = expenses
        this.balance = balance
    }

    totalincome(){
     return  this.incomes[0].incomes;
    }
    totalExpense(){
        return this.expenses[0].expenses;
    }
    addIncome(){
        this.balance += 1000;
        return `Income Added : ${this.incomes[0].incomes += 1000}` ;
    
    }
    addExpense(){
        this.balance -= 1000;
        return `Expense Added : ${this.expenses[0].expenses += 1000}` ;
          
    }
    accountBalance(){
        return this.balance;
    }
}

var user1 = new PersonAccount('ali','raza',[{incomes:5000,description:"i have 5000 icome source in month"}],[{expenses:3000,description:'my expenses of a month is 3000 '}],10000)

console.log(user1.totalincome())
console.log(user1.totalExpense())
console.log(user1.addIncome())
console.log(user1.addExpense())
console.log(user1.accountBalance())

console.log(user1)

// (2) // ***************//////************//////*****************************

class Automobiles{
    constructor(name,model,color,type){
        this.name = name;
        this.model = model;
        this.color = color;
        this.type = type;
    }
    start(){
        console.log('car is ready for drive');
    }
    openDors(){
        console.log('door is open');
    }
}


class Car extends Automobiles{
    constructor(name,model,color,type,maxspeed){
        super(name,model,color,type)
        this.maxspeed = maxspeed;
    }
}

class Bus extends Automobiles{
    constructor(name,model,color,type,seats){
        super(name,model,color,type)
        this.seats = seats;
    }
}

class Truck extends Automobiles{
    constructor(name,model,color,type,bodymass){
        super(name,model,color,type)
        this.bodymass = bodymass;
    }
}

const Automobile1 = new Automobiles('Vehicle','2022','allAvailable','expensive');
const Car1 = new Car('civic',2020,'black','1st Class','137mph')
const Bus1 = new Bus('Daewoo Express',2019,'white','2nd Class',30)
const Truck1 = new Truck('Betty',2021,'blue','low Cost','27100 kg')

console.log(Automobile1)
console.log(Car1)
console.log(Truck1)
console.log(Bus1)

Automobile1.start()
Automobile1.openDors()