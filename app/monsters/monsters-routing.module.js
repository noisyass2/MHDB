"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var monsters_component_1 = require("./monsters.component");
var monstersbytype_component_1 = require("./monstersbytype/monstersbytype.component");
var routes = [
    { path: "monstersbytype/:id", component: monstersbytype_component_1.MonstersByTypeComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uc3RlcnMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb25zdGVycy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsMkRBQXlEO0FBQ3pELHNGQUFvRjtBQUVwRixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUU7SUFDbEUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtDQUM3QyxDQUFDO0FBTUY7SUFBQTtJQUFxQyxDQUFDO0lBQXpCLHFCQUFxQjtRQUpqQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHFCQUFxQixDQUFJO0lBQUQsNEJBQUM7Q0FBQSxBQUF0QyxJQUFzQztBQUF6QixzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgTW9uc3RlcnNDb21wb25lbnQgfSBmcm9tIFwiLi9tb25zdGVycy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vbnN0ZXJzQnlUeXBlQ29tcG9uZW50IH0gZnJvbSBcIi4vbW9uc3RlcnNieXR5cGUvbW9uc3RlcnNieXR5cGUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJtb25zdGVyc2J5dHlwZS86aWRcIiwgY29tcG9uZW50OiBNb25zdGVyc0J5VHlwZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBNb25zdGVyc0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTW9uc3RlcnNSb3V0aW5nTW9kdWxlIHsgfVxuIl19