import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { ITeam, ISeason } from '../../shared/interfaces/interfaces';
import * as _ from 'lodash';
import { TeamDetailsPage } from '../../pages/team-details/team-details';


/**
 * Generated class for the TeamsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  seasons: ISeason[];
  teams: ITeam[];
  seasonName: string;
  errorMessage: string;

  constructor(public nav: NavController, 
              public navParams: NavParams, 
              public dataProvider: DataProvider) 
  {}

  ionViewDidLoad() {

    this.dataProvider.getSeasons()
              .subscribe(seasons => {

                    let currentSeason = _.chain(seasons)
                                         .filter(s => s.Active === true)
                                         .value();

                    this.seasonName = currentSeason[0].SeasonName;
                    
                    this.dataProvider.getTeams()
                                  .subscribe(teams => {

                                      this.teams = _.chain(teams)
                                                    .filter(t => t.SeasonId === currentSeason[0].Id)
                                                    .value();                                      
                                    },
                                    error => this.errorMessage = <any>error
                                  );
                },
                error => this.errorMessage = <any>error
              ); 
    
    
  }

  itemSelected(team: ITeam) {
      //this.nav.push(TeamDetailsPage, team);
      this.nav.push(TeamDetailsPage, {
        TeamId: team.Id,
        TeamName: team.TeamName
      })
  }


}
