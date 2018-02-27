

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ArmorsComponent } from "./armors.component";
import { ArmorComponent } from "./armor/armor.component";
// import { MonstersByTypeComponent } from "./monstersbytype/monstersbytype.component";

const routes: Routes = [
    // { path: "monstersbytype/:id", component: MonstersByTypeComponent },
    { path: "armor/:id", component: ArmorComponent },
    { path: "", component: ArmorsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class ArmorsRoutingModule { }
