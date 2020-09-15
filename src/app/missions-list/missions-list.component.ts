import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';
import { Mission } from '../model/mission.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.css']
})
export class MissionsListComponent implements OnInit {
 ms:Mission[]=[];
 
 valuesParams:{launch_year:string,landing_success:string,launching_success:string}={launch_year:null,landing_success:null,launching_success:null};
 
 
  constructor(private missionService:MissionService,
    private http:HttpClient) { }

  ngOnInit() {

    this.valuesParams=this.missionService.valuesParams;

     //the event listener datecting change in filter parameters
     this.missionService.newParamAdded.subscribe((value)=>{
      
     this.valuesParams=value;
     
     this.updateData(this.valuesParams);
 
   }); 
     

     //Will be ececutes during first time page loads
      this.http.get("https://api.spacexdata.com/v3/launches?limit=100").subscribe(
      (res)=>{
  
        
          for(let index in res){
              
              this.ms.push(new Mission(res[index].flight_number,
                                      res[index].mission_name,
                                      res[index].mission_id,
                                      res[index].launch_year,
                                      res[index].launch_success,
                                      res[index].links['mission_patch_small']));
          } 
            
      }
  );
    
  

  }


  //Will be executed when any change in filter detected and creates a new Httpparams everytime based on current active filters
  updateData(valuesParams:{launch_year:string,landing_success:string,launching_success:string}){
    

    let qpar=new HttpParams();
    if(valuesParams.launching_success!=null){
      qpar=qpar.append('launch_success',valuesParams.launching_success);
    }
    if(valuesParams.landing_success!=null){
      qpar=qpar.append('land_success',valuesParams.landing_success);

    }
    if(valuesParams.launch_year!=null){
      qpar=qpar.append('launch_year',valuesParams.launch_year);

    }
    
    console.log(qpar);
      this.http.get("https://api.spaceXdata.com/v3/launches?limit=100",{params:qpar}).subscribe(
      (res)=>{
  
        let tempms:Mission[]=[];
          for(let index in res){
              
              tempms.push(new Mission(res[index].flight_number,
                                      res[index].mission_name,
                                      res[index].mission_id,
                                      res[index].launch_year,
                                      res[index].launch_success,
                                      res[index].links['mission_patch_small']));
          } 
          this.ms=tempms;  
      }
  );
      
    
  }

}
