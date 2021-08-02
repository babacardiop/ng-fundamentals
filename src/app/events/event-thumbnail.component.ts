import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "event-thumbnail",
    templateUrl: "./event-thumbnail.component.html",
    styles: [`
    .pad-left{
      margin-left:20px;
    }

    .well div {
        color: #bbb;
    }

    .thumbnail{
        min-height: 210px;
    }

    .green{
        color: black !important;
    }

    .bold{
        font-weight: bold;
    }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;

    getStartTimeStyle(){
        const earlyStart = this.event && this.event.time ==='8:00 am';
        if(earlyStart){
            return {
                color:"black",
                'font-weight':"bold"
            };
        }
        return {};
    }
}