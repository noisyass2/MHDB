import { Component } from "@angular/core";
import { SharedService } from "./shared/services/shared.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    providers: [SharedService]
})
export class AppComponent { }
