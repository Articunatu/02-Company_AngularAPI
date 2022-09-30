import { Component } from '@angular/core';
import { Employee } from './Models/employee.model';
import { EmployeeService } from './Service/employee.service';

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
    email: '',
    phoneNumber: '',
    securityNumber: '',
    salary: '',
    departmentID: '',
    genderID: ''
  }

  constructor(private employeeService : EmployeeService){

  }

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