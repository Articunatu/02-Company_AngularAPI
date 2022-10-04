import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from './department.repository';
import { Department } from './department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: Department[] = [];

  department: Department = {
    departmentID: '',
    departmentName: ''
  }

  constructor(private departmentService : DepartmentService) { }

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
}