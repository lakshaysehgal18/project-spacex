import { Component, OnInit, Input } from '@angular/core';
import { Mission } from 'src/app/model/mission.model';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  @Input()
  singleMission:Mission;
  constructor() { }

  ngOnInit() {
  }

}
