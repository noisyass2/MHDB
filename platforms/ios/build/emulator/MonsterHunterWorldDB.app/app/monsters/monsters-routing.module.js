"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var monsters_component_1 = require("./monsters.component");
var routes = [
    { path: "", component: monsters_component_1.MonstersComponent }
];
var MonstersRoutingModule = /** @class */ (function () {
    function MonstersRoutingModule() {
    }
    MonstersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], MonstersRoutingModule);
    return MonstersRoutingModule;
}());
exports.MonstersRoutingModule = MonstersRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uc3RlcnMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb25zdGVycy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsMkRBQXlEO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7Q0FDN0MsQ0FBQztBQU1GO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixxQkFBcUI7UUFKakMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxxQkFBcUIsQ0FBSTtJQUFELDRCQUFDO0NBQUEsQUFBdEMsSUFBc0M7QUFBekIsc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE1vbnN0ZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vbW9uc3RlcnMuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBNb25zdGVyc0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTW9uc3RlcnNSb3V0aW5nTW9kdWxlIHsgfVxuIl19