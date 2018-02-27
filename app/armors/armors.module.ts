import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
// import { MonstersRoutingModule } from "./monsters-routing.module";
import { ArmorsRoutingModule } from "./armors-routing.module";
import { ArmorsComponent } from "./armors.component";
// import { MonstersByTypeComponent } from "./monstersbytype/monstersbytype.component";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { ArmorComponent } from "./armor/armor.component";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        ArmorsRoutingModule,
        SharedModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ArmorsComponent,
        ArmorComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ArmorsModule { 
    
}
