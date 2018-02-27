import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { MonstersRoutingModule } from "./monsters-routing.module";
import { MonstersComponent } from "./monsters.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MonstersRoutingModule,
        SharedModule
    ],
    declarations: [
        MonstersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MonstersModule { }
