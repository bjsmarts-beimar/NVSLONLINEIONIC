import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewsDetailsPage } from '../../pages/news-details/news-details';

import { INews } from '../../shared/interfaces/interfaces';

import { DataProvider } from '../../providers/data/data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    news: INews[];
    errorMessage: string;
  
    constructor(public nav: NavController,
                public dataProvider: DataProvider) 
    {}

    ionViewLoaded() {     

    }  

    ionViewDidLoad() {

        this.dataProvider.getNews()
              .subscribe(
                news => {

                  this.news = news.slice(news.length - 3, news.length).reverse();
                  //this.news = news;
                },
                error => this.errorMessage = <any>error
              ); 
    }

    selectNew($event, singleNew : INews) : void {        
        this.nav.push(NewsDetailsPage, singleNew);
    }

    trimData(value: string) : string {
      return value.length > 250 ? value.substring(0, 250) + '...' : value;  
    }
}
