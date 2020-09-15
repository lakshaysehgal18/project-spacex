import { Component, OnInit, Input } from '@angular/core';
import { Mission } from 'src/app/model/mission.model';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  @Input()
  singleMission:Mission; //recieving single misssion program through propertyBinding

  constructor() { }

  ngOnInit() {
    if(this.singleMission.mission_id.length==0)
    this.singleMission.mission_id.push(434989);//HardCoded some data to show in UI for no data in  Api call

    
  }

}
