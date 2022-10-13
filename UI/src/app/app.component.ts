import { Component } from '@angular/core';
import { Employee } from './employee/employee.model';
import { EmployeeService } from './employee/employee.service';
import { Department } from './department/department.model';
import { DepartmentService } from './department/department.repository';
import { Gender } from './Models/gender.model';
import { GenderService } from './Service/gender.repository';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'UI';

  employees: Employee[] = [];

  employee: Employee = {
    employeeID: '',
    firstName: '',
    lastName: '',
    address: '',
    eMail: '',
    phoneNumber: '',
    securityNumber: '',
    salary: parseInt(' ',10),
    profileURL: '',
    departmentID: '',
    genderID: '',
    department: null,
    gender: null
  }

  departments: Department[] = [];

  department: Department = {
    departmentID: '',
    departmentName: '',
    imageURL: ''
  }

  genders : Gender[] = [];

  gender: Gender = {
    genderID: '',
    genderName: ''
  }

  constructor(private _employee : EmployeeService,
      private _department : DepartmentService,
      private _gender : GenderService
    ){ }


    ngOnInit():void{
      this.readAllEmployees();
      this.readAllDepartments();
      this.readAllGenders();
    }
  
    readAllEmployees(){
      this._employee.ReadAllEmployees()
      .subscribe(
              response => {
          this.employees = response;
        });
    }
  
    
   //Add
   saveEmployee(){
    if(this.employee.employeeID === ''){
      this._employee.CreateEmployee(this.employee).subscribe(
        response => {
          this.readAllEmployees();
        }
      );
    }
    else{
      this.updateEmployee(this.employee);
    }
    this.employee = {
      employeeID : '',
      firstName : '',
      lastName : '',
      address: '',
      eMail: '',
      phoneNumber: '',
      securityNumber: '',
      salary: parseInt(' ',10),
      profileURL: '',
      departmentID: '',
      genderID: '',
      department: null,
      gender: null
    }
   }
  
   //Edit
   updateEmployee(employee:Employee){
    this._employee.UpdateEmployee(employee).subscribe(
      response => {
        this.readAllEmployees()
      }
    )
   }
  
   //Remove
   deleteEmployee(id:string){
    this._employee.DeleteEmployee(id)
    .subscribe(
      response => {
        this.readAllEmployees();
      }
    )
   }
  
   populateForm(employee:Employee){
    this.employee = employee;
   }
  
   
  readAllDepartments(){
    this._department.ReadAllDepartments()
    .subscribe(
            response => {
        this.departments = response;
      });
  }

  populateFormDepartment(department:Department){
    this.department = department;
   }

      //Add
      saveDepartment() {
        if(this.department.departmentID === ''){
          this._department.CreateDepartment(this.department).subscribe(
            response => {
              this.readAllDepartments();
            }
          );
        }
        else{
          this.updateDepartment(this.department);
        }
        this.department = {
          departmentID : '',
          departmentName : '',
          imageURL: ''
        }
       }

     //Edit
     updateDepartment(department:Department){
      this._department.UpdateDepartment(department).subscribe(
        response => {
          this.readAllDepartments()
        }
      )
     }
    
     //Remove
     deleteDepartment(id:string){
      this._department.DeleteDepartment(id)
      .subscribe(
        response => {
          this.readAllDepartments();
        }
      )
     }

  readAllGenders(){
    this._gender.ReadAllGenders()
    .subscribe(
            response => {
        this.genders = response;
      });
  }
}