import { HttpClient } from "@angular/common/http";
import { Employee } from "../Models/employee.model";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class EmployeeService{
    baseUrl='https://localhost:7238/api/employee';

    constructor(private http:HttpClient){ }

    //Add and create a new employee
    CreateEmployee(employee:Employee):Observable<Employee>{
        employee.employeeID = '00000000-0000-0000-0000-000000000000';

        return this.http.post<Employee>(this.baseUrl, employee);
    }

    //Get all objects from the Employee table
    ReadAllEmployees():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl);
    }

    //Get one chosen employee
    ReadSingleEmployee(id:string):Observable<Employee>{
        return this.http.get<Employee>(this.baseUrl + '/' + id)
    }

    //Remove a chosen employee
    DeleteEmployee(id:string):Observable<Employee>{
        return this.http.delete<Employee>(this.baseUrl + '/' + id);
    }

    //Edit a chosen employee
    UpdateEmployee(employee:Employee):Observable<Employee>{
        return this.http.put<Employee>(this.baseUrl + '/' + employee.employeeID, employee);
    }
}