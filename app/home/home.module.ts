import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
// import { RatingComponent } from "../shared/starrating/rating.component";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        // RatingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
