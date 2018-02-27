import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { MonstersRoutingModule } from "./monsters-routing.module";
import { MonstersComponent } from "./monsters.component";
import { MonstersByTypeComponent } from "./monstersbytype/monstersbytype.component";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        MonstersRoutingModule,
        SharedModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        MonstersComponent,
        MonstersByTypeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MonstersModule { 
    
}
