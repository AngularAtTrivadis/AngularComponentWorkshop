import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services';

@Component({
  templateUrl: 'employee-shell.component.html'
})
export class EmployeeShellComponent implements OnInit {
  message: string;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}
}
