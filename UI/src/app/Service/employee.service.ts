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


    //Read all objects from the Employee table
    ReadAllEmployees():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl);
    }
}

//     //Add new Card
//     AddCard(card:Card):Observable<Card>{
//         card.id = '00000000-0000-0000-0000-000000000000';

//         return this.http.post<Card>(this.baseUrl, card);
//     }

//     //Delete Card
//     DeleteCard(id:string):Observable<Card>{
//         return this.http.delete<Card>(this.baseUrl + '/' + id);
//     }

//     //Update Card
//     UpdateCard(card:Card):Observable<Card>{
//         return this.http.put<Card>(this.baseUrl + '/' + card.id, card);
//     }

//     //Get single Card
//     GetSingleCard(id:string):Observable<Card>{
//         return this.http.get<Card>(this.baseUrl + '/' + id)
//     }
// }