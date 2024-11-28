class Student {
    constructor(fname, lname, tel, address) {
      this.fname = fname;
      this.lname = lname;
      this.tel = tel;
      this.address = address;
    }
  
    getFullName() {
      return `${this.fname} ${this.lname}`;
    }
  
    info() {
      return `Name: ${this.getFullName()}, Tel: ${this.tel}, Address: ${this.address}`;
    }
  }
  
  let student = new Student("Jumayev", "Shuxrat", "+123456789", "77 Street");
  console.log(student.info());
  
  class Teacher {
    constructor(fname, lname, address, salary, level) {
      this.fname = fname;
      this.lname = lname;
      this.address = address;
      this.salary = salary;
      this.level = level;
    }
  
    getFullName() {
      return `${this.fname} ${this.lname}`;
    }
  
    description() {
      return `Name: ${this.getFullName()}, Address: ${this.address}, Salary: ${this.salary}, Level: ${this.level}`;
    }
  }
  
  let teacher = new Teacher("Buburmirzo", "BRM", "777 Mazil", 3000, "Senior");
  console.log(teacher.description());
  
  class Group {
    constructor(name, room, level, studentCounts, teacher) {
      this.name = name;
      this.room = room;
      this.level = level;
      this.studentCounts = studentCounts;
      this.teacher = teacher;
    }
  
    fullInformation() {
      return `Group: ${this.name}, Room: ${this.room}, Level: ${this.level}, Student Counts: ${this.studentCounts}, Teacher: ${this.teacher.getFullName()}`;
    }
  }
  
  let group = new Group("N83-Group", "Slack", "4-Oy", 25, teacher);
  console.log(group.fullInformation());
  
  class Payment {
    constructor(from, to, amount, date, status = true) {
      this.from = from;
      this.to = to;
      this.amount = amount;
      this.date = date;
      this.status = status;
    }
  
    getStatus() {
      return this.status ? "Paid" : "Not Paid";
    }
  }
  
  let payment = new Payment("Shuxrat", "Dilshod", 1000, Date.now());
  console.log(payment.getStatus());
  
  class Salary {
    constructor(to, amount, type, date, status = true) {
      this.to = to;
      this.amount = amount;
      this.type = type;
      this.date = date;
      this.status = status;
    }
  
    getInfo() {
      return `To: ${this.to}, Amount: ${this.amount} ${this.type}, Date: ${this.date}, Status: ${this.status ? "Paid" : "Not Paid"}`;
    }
  }
  
  let salary = new Salary("Boburmirzo", 1500, "USD", Date.now());
  console.log(salary.getInfo());
  
  class Organization {
    constructor(name, founder, address, employeeCount = 400) {
      this.name = name;
      this.founder = founder;
      this.address = address;
      this.employeeCount = employeeCount;
    }
  
    getInfo() {
      return `Organization: ${this.name}, Founder: ${this.founder}, Address: ${this.address}, Employee Count: ${this.employeeCount}`;
    }
  }
  
  let org = new Organization("Najot Ta`lim", "Temurbek Adxamov", "Chilzor 9 kvartal");
  console.log(org.getInfo());
  