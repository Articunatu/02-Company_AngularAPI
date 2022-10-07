import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { Gender } from "../Models/gender.model";

@Injectable({
    providedIn : 'root'
})

export class GenderService{
    baseUrl='https://localhost:7238/api/gender';

    constructor(private http:HttpClient){ }

    //Add and create a new gender
    CreateGender(gender:Gender):Observable<Gender>{
        gender.genderID = '00000000-0000-0000-0000-000000000000';

        return this.http.post<Gender>(this.baseUrl, gender);
    }

    //Get all objects from the Gender table
    ReadAllGenders():Observable<Gender[]>{
        return this.http.get<Gender[]>(this.baseUrl);
    }

    //Get one chosen gender
    ReadSingleGender(id:string):Observable<Gender>{
        return this.http.get<Gender>(this.baseUrl + '/' + id)
    }

    //Remove a chosen gender
    DeleteGender(id:string):Observable<Gender>{
        return this.http.delete<Gender>(this.baseUrl + '/' + id);
    }

    //Edit a chosen gender
    UpdateGender(gender:Gender):Observable<Gender>{
        return this.http.put<Gender>(this.baseUrl + '/' + gender.genderID, gender);
    }
}