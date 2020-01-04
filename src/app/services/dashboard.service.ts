import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  dashboards;


  createDashboard(dashboard){

    /*
      Use 
    */

    return dashboard;

  }

  deleteDashboard(dashboard){

    /*
    Needs rewrite to handle ht
    */

    let index = this.dashboards.indexOf(dashboard);
    this.dashboards.splice(index,1);

    return of(
      this.dashboards
    );

  }

  updateDashboard(dashboard){

  }

  getDashboards(){

    return of(
      this.dashboards
      );
  }

  

  constructor(private http: HttpClient) {

    this. dashboards = JSON.parse(`[ {"id": "123x", "name": "Cool"},
      {"id": "123x1", "name": "Nice"},
      {"id": "123x2", "name": "Awesome"} ]`)
    

   
  }

}
