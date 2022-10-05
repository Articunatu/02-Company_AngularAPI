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
    salary: '',
    departmentID: '',
    genderID: ''
  }

  departments: Department[] = [];

  department: Department = {
    departmentID: '',
    departmentName: ''
  }

  genders : Gender[] = [];

  gender: Gender = {
    genderID: '',
    genderName: ''
  }

  constructor(private employeeService : EmployeeService,
      private departmentService : DepartmentService,
      private genderService : GenderService
    ){ }


    ngOnInit():void{
      this.readAllEmployees();
      this.readAllDepartments();
      this.readAllGenders();
    }
  
    readAllEmployees(){
      this.employeeService.ReadAllEmployees()
      .subscribe(
              response => {
          this.employees = response;
        });
    }
  
    
   //Add
   saveEmployee(){
    if(this.employee.employeeID == ''){
      this.employeeService.CreateEmployee(this.employee)
      .subscribe
      (
        response => {
          this.readAllEmployees();
          this.employee = {
            employeeID : '',
            firstName : '',
            lastName : '',
            address: '',
            eMail: '',
            phoneNumber: '',
            securityNumber: '',
            salary: '',
            departmentID: '',
            genderID: ''
          }
        }
      );
    }
    else{
      this.updateEmployee(this.employee);
    }
   }
  
   //Edit
   updateEmployee(employee:Employee){
    this.employeeService.UpdateEmployee(employee).subscribe(
      response => {
        this.readAllEmployees()
      }
    )
   }
  
   //Remove
   onDelete(id:string){
    this.employeeService.DeleteEmployee(id)
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
    this.departmentService.ReadAllDepartments()
    .subscribe(
            response => {
        this.departments = response;
      });
  }

  readAllGenders(){
    this.genderService.ReadAllGenders()
    .subscribe(
            response => {
        this.genders = response;
      });
  }
}