import { Department } from "../department/department.model";
import { Gender } from "../Models/gender.model";

export interface Employee{
    employeeID:string,
    firstName:string,
    lastName:string,
    address:string,
    eMail:string,
    phoneNumber:string,
    securityNumber:string,
    salary:number,
    profileURL: string,
    departmentID:string,
    genderID:string,
    department:Department|null,
    gender:Gender|null
}