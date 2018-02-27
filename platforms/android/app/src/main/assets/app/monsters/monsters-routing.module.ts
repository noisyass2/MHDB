
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MonstersComponent } from "./monsters.component";
import { MonstersByTypeComponent } from "./monstersbytype/monstersbytype.component";

const routes: Routes = [
    { path: "monstersbytype/:id", component: MonstersByTypeComponent },
    { path: "", component: MonstersComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MonstersRoutingModule { }
