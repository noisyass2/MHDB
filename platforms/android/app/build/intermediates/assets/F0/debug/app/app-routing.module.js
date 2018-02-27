"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "monsters", loadChildren: "./monsters/monsters.module#MonstersModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7SUFDL0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxxQ0FBcUMsRUFBRTtJQUN2RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFO0lBQ3ZFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsMkNBQTJDLEVBQUU7SUFDL0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBRTtJQUMvRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLDJDQUEyQyxFQUFFO0NBQ2xGLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXHJcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcImJyb3dzZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9icm93c2UvYnJvd3NlLm1vZHVsZSNCcm93c2VNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcInNlYXJjaFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9zZWFyY2gvc2VhcmNoLm1vZHVsZSNTZWFyY2hNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcImZlYXR1cmVkXCIsIGxvYWRDaGlsZHJlbjogXCIuL2ZlYXR1cmVkL2ZlYXR1cmVkLm1vZHVsZSNGZWF0dXJlZE1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwibW9uc3RlcnNcIiwgbG9hZENoaWxkcmVuOiBcIi4vbW9uc3RlcnMvbW9uc3RlcnMubW9kdWxlI01vbnN0ZXJzTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUjU2V0dGluZ3NNb2R1bGVcIiB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==