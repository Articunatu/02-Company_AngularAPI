import { Component } from '@angular/core';
import { Department } from './department.model';
import { DepartmentService } from './department.repository';

@Component({
  selector: 'app-root',
  templateUrl: './department.component.html',
//   styleUrls: ['./app.component.css']
})
export class DepartmentComponent {
  title = 'UI';

  departments: Department[] = [];

  department: Department = {
    departmentID: '',
    departmentName: ''
  }

  constructor(private departmentService : DepartmentService){

  }

  // orderEmployees():void{
  //   this.employees.sort(e )
  // }

  ngOnInit():void{
    this.readAllDepartments();
  }

  readAllDepartments(){
    this.departmentService.ReadAllDepartments()
    .subscribe(
            response => {
        this.departments = response;
      });
  }

  
 //Add
 onSubmit(){
  if(this.department.departmentID == ''){
    this.departmentService.CreateDepartment(this.department)
    .subscribe
    (
      response => {
        this.readAllDepartments();
        this.department = {
          departmentID: '',
          departmentName: ''
        }
      }
    );
  }
  else{
    this.updateDepartment(this.department);
  }
 }

 //Edit
 updateDepartment(department:Department){
  this.departmentService.UpdateDepartment(department).subscribe(
    response => {
      this.readAllDepartments()
    }
  )
 }

 //Remove
 onDelete(id:string){
  this.departmentService.DeleteDepartment(id)
  .subscribe(
    response => {
      this.readAllDepartments();
    }
  )
 }

 populateForm(department:Department){
  this.department = department;
 }
}