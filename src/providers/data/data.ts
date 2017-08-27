import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { INews, ISeason, ITeam, ISchedule } from '../../shared/interfaces/interfaces';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

    //globalUrl: string = 'http://btsdevweb:8080/NVSLOnlineWebAPI/';
    //globalExtensionJson: string = '';
    
    globalUrl: string = 'https://nvsl-online-data.firebaseio.com/';
    globalExtensionJson: string = '.json';

    constructor(public http: Http) {}

    getNews(): Observable<INews[]> {        

        let url = this.globalUrl + "api/news" + this.globalExtensionJson;
                
        return this.http.get(url)
                   .map((res: Response) => {
                        return res.json();
                    })
                   .catch(this.handleError);            
    }

    getTeams(): Observable<ITeam[]> {        

        //let url = global.url + "api/Teams";
        let url = this.globalUrl + "api/teams" + this.globalExtensionJson;
        
        return this.http.get(url)
                   .map((res: Response) => {
                        return res.json();
                    })
                   .catch(this.handleError);            
    }

    getSeasons(): Observable<ISeason[]> {        

        //let url = global.url + "api/Seasons";
        let url = this.globalUrl + "api/seasons" + this.globalExtensionJson;
        
        return this.http.get(url)
                   .map((res: Response) => {
                        return res.json();
                    })
                   .catch(this.handleError);            
    }

    getSchedules(): Observable<ISchedule[]> {        

        //let url = global.url + "api/Schedules";
        let url = this.globalUrl + "api/schedules" + this.globalExtensionJson;
        
        return this.http.get(url)
                   .map((res: Response) => {
                        return res.json();
                    })
                   .catch(this.handleError);            
    }

    getSchedule(id: number): Observable<ISchedule> {
        return this.getSchedules()
                   .map((schedules: ISchedule[]) => schedules.find(p => p.Id === id));
    }

    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }   

}
