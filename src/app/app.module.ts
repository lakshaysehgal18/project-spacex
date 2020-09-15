import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MissionsListComponent } from './missions-list/missions-list.component';
import { MissionComponent } from './missions-list/mission/mission.component';
import { MissionService } from './mission.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    
    MissionsListComponent,
    
    MissionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  
  ],
  providers: [MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
