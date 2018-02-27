"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var skills_component_1 = require("./skills.component");
var skill_component_1 = require("./skill/skill.component");
var routes = [
    // { path: "monstersbytype/:id", component: MonstersByTypeComponent },
    { path: "skill/:id", component: skill_component_1.SkillComponent },
    { path: "", component: skills_component_1.SkillsComponent }
];
var SkillsRoutingModule = /** @class */ (function () {
    function SkillsRoutingModule() {
    }
    SkillsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], SkillsRoutingModule);
    return SkillsRoutingModule;
}());
exports.SkillsRoutingModule = SkillsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2tpbGxzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSx1REFBcUQ7QUFDckQsMkRBQXlEO0FBR3pELElBQU0sTUFBTSxHQUFXO0lBQ25CLHNFQUFzRTtJQUN0RSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDaEQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0NBQzNDLENBQUM7QUFPRjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBTC9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BRVcsbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBLEFBQXBDLElBQW9DO0FBQXZCLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNraWxsc0NvbXBvbmVudCB9IGZyb20gXCIuL3NraWxscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNraWxsQ29tcG9uZW50IH0gZnJvbSBcIi4vc2tpbGwvc2tpbGwuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgLy8geyBwYXRoOiBcIm1vbnN0ZXJzYnl0eXBlLzppZFwiLCBjb21wb25lbnQ6IE1vbnN0ZXJzQnlUeXBlQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInNraWxsLzppZFwiLCBjb21wb25lbnQ6IFNraWxsQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFNraWxsc0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTa2lsbHNSb3V0aW5nTW9kdWxlIHsgfVxuIl19