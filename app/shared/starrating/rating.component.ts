import { Component, OnInit, Input, ViewChild } from "@angular/core";

@Component({
    selector: "Rating",
    moduleId: module.id,
    // styleUrls: ["./rating.component.css"],
    templateUrl: "./rating.component.html"
})
export class RatingComponent implements OnInit {
    star: string;
    @Input() num: string;
    @Input() row:number;
    @Input() col:number;
    number: number;
    ngOnInit(): void {
       this.number = parseInt(this.num);
       console.log("INIT RATING COMPONENT");
    }

    Arr=Array;

    
}