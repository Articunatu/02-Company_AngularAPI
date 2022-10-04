import { Component, OnInit } from '@angular/core';

import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];

  employee: Employee = {
    employeeID: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
    securityNumber: '',
    salary: '',
    departmentID: '',
    genderID: ''
  }

  constructor(private employeeService : EmployeeService){ }

  // orderEmployees():void{
  //   this.employees.sort(e )
  // }

  ngOnInit():void{
    this.readAllEmployees();
  }

  readAllEmployees(){
    this.employeeService.ReadAllEmployees()
    .subscribe(
            response => {
        this.employees = response;
      });
  }

  
 //Add
 onSubmit(){
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
          email: '',
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
    this.updateCard(this.employee);
  }
 }

 //Edit
 updateCard(employee:Employee){
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

}
