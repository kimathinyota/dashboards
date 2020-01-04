
import { Component, OnInit} from '@angular/core';
import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})


export class DashboardListComponent implements OnInit  {

  dashboards : any[];

  onclick(){

  }

  ngOnDestroy() {   
  }


  remove(dashboard){
    this.service.deleteDashboard(dashboard);
  }
  



  ngOnInit() {
    this.service.getDashboards()
    .subscribe( response => {
      this.dashboards = response;
    })

  }


  constructor(private service: DashboardService) {

    
    
  }



}
