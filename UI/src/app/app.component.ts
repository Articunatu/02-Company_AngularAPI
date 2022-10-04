import { Component } from '@angular/core';
import { Employee } from './employee/employee.model';
import { EmployeeService } from './employee/employee.service';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'UI';
}