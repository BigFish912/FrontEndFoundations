class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
}

class Manager extends Employee{
    constructor(name, salary, hireDate, descriptionOfJob){
        super(name, salary, hireDate)
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription(){
        console.log(this.name + " was hired on " + this.hireDate + ". Their salary is " + this.salary + ". " + this.name + " " + this.descriptionOfJob);
    }
}

class Designer extends Employee{
    constructor(name, salary, hireDate, experience){
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience(){
        console.log(this.name + " was hired on " + this.hireDate + ". Their salary is " + this.salary + ". They have " + this.experience + " years of experience.");
    }
}

class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degrees){
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    degreeCompleted(){
        console.log(this.name + " was hired on " + this.hireDate + ". Their salary is " + this.salary + ". " + this.name + " has a " + this.degrees + " degree.");
    }
}

let terry = new Manager("Terry", 90000, "9/12/2000", "manages the entire sales department");
let katherine = new Designer("Katherine", 70000, "1/30/2015", 6);
let joe = new SalesAssociate("Joe", 50000, "5/27/2020", "Bachelor's in Business Marketing");
terry.jobDescription();
katherine.yearsExperience();
joe.degreeCompleted();