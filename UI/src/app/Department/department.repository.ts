import { HttpClient } from "@angular/common/http";
import { Department } from "./department.model";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class DepartmentService{
    baseUrl='https://localhost:7238/api/department';

    constructor(private http:HttpClient){ }

    //Add and create a new employee
    CreateDepartment(department:Department):Observable<Department>{
        department.departmentID = '00000000-0000-0000-0000-000000000000';

        return this.http.post<Department>(this.baseUrl, department);
    }

    //Get all objects from the Employee table
    ReadAllDepartments():Observable<Department[]>{
        return this.http.get<Department[]>(this.baseUrl);
    }

    //Get one chosen employee
    ReadSingleDepartment(id:string):Observable<Department>{
        return this.http.get<Department>(this.baseUrl + '/' + id)
    }

    //Remove a chosen employee
    DeleteDepartment(id:string):Observable<Department>{
        return this.http.delete<Department>(this.baseUrl + '/' + id);
    }

    //Edit a chosen employee
    UpdateDepartment(department:Department):Observable<Department>{
        return this.http.put<Department>(this.baseUrl + '/' + department.departmentID, department);
    }
}