import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import * as _ from 'lodash';
import * as moment from 'moment';
import { ITeam, ISchedule } from '../../shared/interfaces/interfaces';
import { HomePage } from '../home/home';

/**
 * Generated class for the TeamDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html',
})
export class TeamDetailsPage {

  teamId: string;
  teamName: string;
  schedule: ISchedule[];
  errorMessage: string;

  constructor(public nav: NavController, 
              public navParams: NavParams,
              public dataProvider: DataProvider) 
  {      
      this.teamId = navParams.get("TeamId");
      this.teamName = navParams.get("TeamName");
  }

  formatDate(dateTime : any) {
      return moment(dateTime).format('DD/MM/YYYY'); 
  }

  formatTime(dateTime : any ) {
      return moment(dateTime).format('h:mm a');
  }

  ionViewDidLoad() {
    
    this.dataProvider.getSchedules()
        .subscribe(schedule => {
              
              this.schedule = _.chain(schedule)
                               .filter(s => s.HomeTeamId === this.teamId || s.AwayTeamId === this.teamId)
                               .value();              
          },
          error => this.errorMessage = <any>error
        );
  }

  itemSelected(team: ITeam) {      
      this.nav.push(TeamDetailsPage, {
        TeamId: team.Id,
        TeamName: team.TeamName
      })
  }  

  goHome() {
      //this.nav.push(HomePage);
      this.nav.popToRoot();
  }
}
