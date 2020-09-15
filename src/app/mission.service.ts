import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Mission } from "./model/mission.model";

@Injectable()
export class MissionService{

valuesParams:{launch_year:string,landing_success:string,launching_success:string}={launch_year:null,landing_success:null,launching_success:null};


newParamAdded=new EventEmitter<{launch_year:string,landing_success:string,launching_success:string}>();

onLaunchYearAdded(year:string){
    
        this.valuesParams.launch_year=year;
    
    
    this.newParamAdded.emit(this.valuesParams);
}
onLandingAdded(status:string){
    if(status=='True'){
        this.valuesParams.landing_success='true';
    }
    else if(status=='False'){
        this.valuesParams.landing_success='false';
    }
    else{
        this.valuesParams.landing_success=null;
    }
    
    this.newParamAdded.emit(this.valuesParams);
}
onLaunchingAdded(status:string){
    
    if(status=='True'){
        this.valuesParams.launching_success='true';
    }
    else if(status=='False'){
        this.valuesParams.launching_success='false';
    }
    else{
        this.valuesParams.launching_success=null;
    }

//console.log(this.valuesParams);
this.newParamAdded.emit(this.valuesParams);
}

constructor(){

}






}