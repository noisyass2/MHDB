import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/weapons/weapon/dear lutemis", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "monsters", loadChildren: "./monsters/monsters.module#MonstersModule" },
    { path: "armors", loadChildren: "./armors/armors.module#ArmorsModule" },
    { path: "items", loadChildren: "./items/items.module#ItemsModule" },
    { path: "skills", loadChildren: "./skills/skills.module#SkillsModule" },
    { path: "weapons", loadChildren: "./weapons/weapons.module#WeaponsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
