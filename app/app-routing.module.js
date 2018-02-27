"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLDhCQUE4QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTtJQUMvRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFO0lBQ3ZFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUscUNBQXFDLEVBQUU7SUFDdkUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBRTtJQUMvRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLDJDQUEyQyxFQUFFO0lBQy9FLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUscUNBQXFDLEVBQUU7SUFDdkUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxrQ0FBa0MsRUFBRTtJQUNuRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFO0lBQ3ZFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0NBQXdDLEVBQUU7Q0FDOUUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi93ZWFwb25zL3dlYXBvbi9kZWFyIGx1dGVtaXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJicm93c2VcIiwgbG9hZENoaWxkcmVuOiBcIi4vYnJvd3NlL2Jyb3dzZS5tb2R1bGUjQnJvd3NlTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgbG9hZENoaWxkcmVuOiBcIi4vc2VhcmNoL3NlYXJjaC5tb2R1bGUjU2VhcmNoTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9mZWF0dXJlZC9mZWF0dXJlZC5tb2R1bGUjRmVhdHVyZWRNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcIm1vbnN0ZXJzXCIsIGxvYWRDaGlsZHJlbjogXCIuL21vbnN0ZXJzL21vbnN0ZXJzLm1vZHVsZSNNb25zdGVyc01vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwiYXJtb3JzXCIsIGxvYWRDaGlsZHJlbjogXCIuL2FybW9ycy9hcm1vcnMubW9kdWxlI0FybW9yc01vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgbG9hZENoaWxkcmVuOiBcIi4vaXRlbXMvaXRlbXMubW9kdWxlI0l0ZW1zTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJza2lsbHNcIiwgbG9hZENoaWxkcmVuOiBcIi4vc2tpbGxzL3NraWxscy5tb2R1bGUjU2tpbGxzTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJ3ZWFwb25zXCIsIGxvYWRDaGlsZHJlbjogXCIuL3dlYXBvbnMvd2VhcG9ucy5tb2R1bGUjV2VhcG9uc01vZHVsZVwiIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19