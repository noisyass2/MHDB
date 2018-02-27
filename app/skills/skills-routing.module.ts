import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SkillsComponent } from "./skills.component";
import { SkillComponent } from "./skill/skill.component";


const routes: Routes = [
    // { path: "monstersbytype/:id", component: MonstersByTypeComponent },
    { path: "skill/:id", component: SkillComponent },
    { path: "", component: SkillsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class SkillsRoutingModule { }
