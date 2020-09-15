import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
launchYears:string[]=['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
sucLaunch:string[]=['True','False'] ; 


selectedYear:string;
LaunchingStatus:string;
LandingStatus:string;


constructor(private missionService:MissionService) { }


ngOnInit() {
}

//will be executed when any change is detected in launch_year,landing and launcing filters added or removed
onChangeYear(year:string){
  if(this.selectedYear==year){
    this.selectedYear=null;
   }
   else{
     this.selectedYear=year;
  }
  
  this.missionService.onLaunchYearAdded(this.selectedYear);
  

}
onChangeLanding(status:string){

  if(this.LandingStatus==status){
    this.LandingStatus=null;
  }
  else{
 this.LandingStatus=status;

}
 this.missionService.onLandingAdded(this.LandingStatus);
}
onChangeLaunching(status:string){
  
  if(this.LaunchingStatus==status){
    this.LaunchingStatus=null;
  }
  else{
  this.LaunchingStatus=status;

}
 this.missionService.onLaunchingAdded(this.LaunchingStatus);
  }



  

}
