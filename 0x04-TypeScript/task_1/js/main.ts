
interface DirectorInterface {
    workFromHome: () => string,
    getCoffeeBreak: () => string,
    workDirectorTasks: () => string
}

interface TeacherInterface {
    workFromHome: () => string,
    getCoffeeBreak: () => string,
    workTeacherTasks: () => string
}
class Director implements DirectorInterface {
    workFromHome(): string
    {
            return "Working from home"
    }
    getCoffeeBreak(): string {
            return "Getting a coffee break"
    }
    workDirectorTasks(): string
    {
            return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string
    {
            return "Cannot work from home"
    }
    getCoffeeBreak(): string
    {
            return "Cannot have a break"
    }
    workTeacherTasks(): string
    {
            return "Getting to work"
    }
}
function createEmployee(salary: number | string): Director | Teacher
{
    if (typeof salary === "number")
    {
            if (salary < 500)
            {
                    return new Teacher()
            }
            return new Director()
    }
    return new Director()
}

function isDirector(employee: Director | Teacher): employee is Director
{
    return employee instanceof Director
}
function executeWork(employee: Director | Teacher)
{       
    if (isDirector(employee))
    {
            employee.workDirectorTasks()
    }
    else {
            employee.workTeacherTasks()
    }
}

type Subjects = "Math" | "History"
function teachClass(todayClass: Subjects): string
{
    if (todayClass === "Math")
    {
            return "Teaching Math"
    }
    else
    {
            return "Teaching History"
    }
}


// interface Teacher{
//   readonly firstName: string,
//   readonly lastName: string,
//   yearsOfExperience?:number,
//   location: string,
//   [key: string]: any;
// }

// const teacher3: Teacher = {
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London',
//     contract: false,
//   };
//   interface Directors extends Teacher {
//     numberOfReports: number;
//   }
// console.log(teacher3)


// const director1: Directors = {
//     firstName: 'John',
//     lastName: 'Doe',
//     location: 'London',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
//   };
//   console.log(director1);

// function printTeacher(firstName: string, lastName: string): string{
// return `${firstName} ${lastName}`
// }
// interface studentInterface{
//     firstName: string,
//     lastName: string,
// }
// interface classConstructor {
//     new (firstName: string, lastName: string): studentInterface;
//   }
// class StudentClass implements studentInterface {
//     firstName: string;
//     lastName: string;
    
//     constructor(firstName: string, lastName: string) {
//      this.firstName =  firstName;
//      this.lastName = lastName;
//   }
//     workOnHomework(): string {
//     return 'Currently working';
//   }
//     displayName(): string {
//      return this.firstName;
//   }
//   }

