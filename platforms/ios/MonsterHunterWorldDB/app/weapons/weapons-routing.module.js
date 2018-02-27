"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var weapons_component_1 = require("./weapons.component");
var wbt_component_1 = require("./weaponsbytype/wbt.component");
var weapon_component_1 = require("./weapon/weapon.component");
// import { WeaponsByTypeComponent } from './weaponsbytype/weaponsbytype.component';
var routes = [
    { path: '', component: weapons_component_1.WeaponsComponent },
    { path: 'wtype/:id', component: wbt_component_1.WBTComponent },
    { path: 'weapon/:id', component: weapon_component_1.WeaponComponent }
];
var WeaponsRoutingModule = /** @class */ (function () {
    function WeaponsRoutingModule() {
    }
    WeaponsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], WeaponsRoutingModule);
    return WeaponsRoutingModule;
}());
exports.WeaponsRoutingModule = WeaponsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhcG9ucy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYXBvbnMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQXVEO0FBQ3ZELDBDQUErQztBQUMvQyx5REFBdUQ7QUFDdkQsK0RBQTZEO0FBQzdELDhEQUE0RDtBQUM1RCxvRkFBb0Y7QUFFcEYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtJQUN6QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLDRCQUFZLEVBQUM7SUFDN0MsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0NBQ25ELENBQUM7QUFNRjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsb0JBQW9CO1FBSmhDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csb0JBQW9CLENBQUc7SUFBRCwyQkFBQztDQUFBLEFBQXBDLElBQW9DO0FBQXZCLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV2VhcG9uc0NvbXBvbmVudCB9IGZyb20gJy4vd2VhcG9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgV0JUQ29tcG9uZW50IH0gZnJvbSAnLi93ZWFwb25zYnl0eXBlL3didC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2VhcG9uQ29tcG9uZW50IH0gZnJvbSAnLi93ZWFwb24vd2VhcG9uLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBXZWFwb25zQnlUeXBlQ29tcG9uZW50IH0gZnJvbSAnLi93ZWFwb25zYnl0eXBlL3dlYXBvbnNieXR5cGUuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBXZWFwb25zQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnd3R5cGUvOmlkJywgY29tcG9uZW50OiBXQlRDb21wb25lbnR9LFxuICAgIHsgcGF0aDogJ3dlYXBvbi86aWQnLGNvbXBvbmVudDogV2VhcG9uQ29tcG9uZW50fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgV2VhcG9uc1JvdXRpbmdNb2R1bGUge31cbiJdfQ==