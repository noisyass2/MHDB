"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var armors_component_1 = require("./armors.component");
var armor_component_1 = require("./armor/armor.component");
// import { MonstersByTypeComponent } from "./monstersbytype/monstersbytype.component";
var routes = [
    // { path: "monstersbytype/:id", component: MonstersByTypeComponent },
    { path: "armor/:id", component: armor_component_1.ArmorComponent },
    { path: "", component: armors_component_1.ArmorsComponent }
];
var ArmorsRoutingModule = /** @class */ (function () {
    function ArmorsRoutingModule() {
    }
    ArmorsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ArmorsRoutingModule);
    return ArmorsRoutingModule;
}());
exports.ArmorsRoutingModule = ArmorsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJtb3JzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJtb3JzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx1REFBcUQ7QUFDckQsMkRBQXlEO0FBQ3pELHVGQUF1RjtBQUV2RixJQUFNLE1BQU0sR0FBVztJQUNuQixzRUFBc0U7SUFDdEUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtDQUMzQyxDQUFDO0FBT0Y7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQUwvQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUVXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztBQUF2QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBcm1vcnNDb21wb25lbnQgfSBmcm9tIFwiLi9hcm1vcnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBcm1vckNvbXBvbmVudCB9IGZyb20gXCIuL2FybW9yL2FybW9yLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgTW9uc3RlcnNCeVR5cGVDb21wb25lbnQgfSBmcm9tIFwiLi9tb25zdGVyc2J5dHlwZS9tb25zdGVyc2J5dHlwZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgLy8geyBwYXRoOiBcIm1vbnN0ZXJzYnl0eXBlLzppZFwiLCBjb21wb25lbnQ6IE1vbnN0ZXJzQnlUeXBlQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImFybW9yLzppZFwiLCBjb21wb25lbnQ6IEFybW9yQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEFybW9yc0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcm1vcnNSb3V0aW5nTW9kdWxlIHsgfVxuIl19