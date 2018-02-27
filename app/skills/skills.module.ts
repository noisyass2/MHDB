import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { SkillsRoutingModule } from "./skills-routing.module";
import { SkillsComponent } from "./skills.component";
import { SkillComponent } from "./skill/skill.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        SkillsRoutingModule,
        SharedModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        SkillsComponent,
        SkillComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SkillsModule { 
    
}
