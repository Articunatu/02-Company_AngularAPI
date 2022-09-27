import { Component } from '@angular/core';
import { Employee } from './Models/employee.model';
import { EmployeeService } from './Service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Company';

  employees: Employee[] = [];

  employee: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
    securityNumber: '',
    salary: '',
    genderID: '',
    departmentID: ''
  }

  constructor(private employeeService : EmployeeService){

  }

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
}

//  //Add
//  onSubmit(){
//   if(this.card.id == ''){
//     this.cardService.AddCard(this.card)
//     .subscribe
//     (
//       response => {
//         this.getAllCards();
//         this.card = {
//           id : '',
//           cardNumber : '',
//           holderName : '',
//           expireMonth: '',
//           expireYear: '',
//           cvc: ''
//         }
//       }
//     );
//   }
//   else{
//     this.updateCard(this.card);
//   }
//  }

//  //Update
//  updateCard(card:Card){
//   this.cardService.UpdateCard(card).subscribe(
//     response => {
//       this.getAllCards()
//     }
//   )
//  }

//  //Delete
//  onDelete(id:string){
//   this.cardService.DeleteCard(id)
//   .subscribe(
//     response => {
//       this.getAllCards();
//     }
//   )
//  }

//  populateForm(card:Card){
//   this.card = card;
//  }
// }
