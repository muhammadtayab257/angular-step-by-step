import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../../Shared/Services/first-service.service';
import { UserTwo } from '../../Shared/Interfaces/UserTwo';
@Component({
  selector: 'app-services-dependency-injection',
  templateUrl: './services-dependency-injection.component.html',
  styleUrls: ['./services-dependency-injection.component.css'],
})
export class ServicesDependencyInjectionComponent implements OnInit {
  constructor(private firstService: FirstServiceService) { }
  SimpleService: UserTwo[] = [];
  // SimpleService: any;

  ngOnInit(): void {
    this.firstService.sendGetRequest().subscribe((data: UserTwo[]) => {
      this.SimpleService = data;
    });
  }

}

