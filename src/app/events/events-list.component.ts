import {Component} from '@angular/core';

@Component({
    selector:"events-list",
    templateUrl: "./events-list.component.html"
})
export class EventsListComponent{
    event1 = {
        id: 1,
        name: "Angular Connect",
        date: '9/26/2021',
        time: '10:30 am',
        price: 599,
        image: 'assets/images/angularconnect-shield.png',
        location: {
            address: '419 Djily Mbaye',
            city: 'Dakar',
            country: 'Senegal'
        }
  };

}