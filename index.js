function Owner(name, age) {
    this.name = name;
    this.age = age;
    this.infoPerson = function() {
        console.log(`Ім\'я: ${this.name}, Вік: ${this.age} років`);
    }
}

function Car(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.ownerCar = function(owner) {
        if (owner.age > 18) {
            this.owner = owner;
            this.ownerInf = '';
        } else {
            this.ownerInf = "Власник повинен бути старше 18 років.";
        }
    };
    this.infoCar = function() {
        console.log(`Марка авто: ${this.brand}`);
        console.log(`Модель авто: ${this.model}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Номерний знак: ${this.licensePlate}`);
        console.log(`Інформація про власника: ${this.ownerInf}`);
        this.owner.infoPerson();
    };
    
}

const car1 = new Car('honda', 'accord', 2010, 'ВН 0154 СН');
const car2 = new Car('nissan', 'x-trail', 2018, 'ВЕ 4504 EE');
const car3 = new Car('Toyota', 'Prado', 2019, 'АА 1434 АК');

const user1 = new Owner('Natalya', 46);
const user2 = new Owner('Andrew', 21);
const user3 = new Owner('Helen', 17);


car1.ownerCar(user1);
car2.ownerCar(user2);
car3.ownerCar(user3);

car1.infoCar();
console.log("-------------------");
car2.infoCar();
console.log("-------------------");
car3.infoCar();