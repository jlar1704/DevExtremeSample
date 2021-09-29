import { Component } from '@angular/core';
import { Service, Employee, State } from '../../shared/services/app.service';




@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ],
  providers: [Service]

})

export class HomeComponent {
   dataSource: Employee[] = [];
  states: State[] = [];

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
    }
}
