import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from './../../services/employee.service';

@Component({
  selector: 'app-employee-shell-detail',
  templateUrl: 'employee-shell-detail.component.html'
})
export class EmployeeShellDetailComponent implements OnInit {
  pageTitle = 'Employee Detail';

  employee: Employee | null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}
}
