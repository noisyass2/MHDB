"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var weapons_routing_module_1 = require("./weapons-routing.module");
var weapons_component_1 = require("./weapons.component");
var wbt_component_1 = require("./weaponsbytype/wbt.component");
var weapon_component_1 = require("./weapon/weapon.component");
// import { WeaponsByTypeComponent } from './weaponsbytype/weaponsbytype.component';
//import { ItemComponent } from './item/item.component';
var WeaponsModule = /** @class */ (function () {
    function WeaponsModule() {
    }
    WeaponsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                weapons_routing_module_1.WeaponsRoutingModule,
                shared_module_1.SharedModule,
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                weapons_component_1.WeaponsComponent,
                wbt_component_1.WBTComponent,
                weapon_component_1.WeaponComponent
                // WeaponsByTypeComponent
                //ItemComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], WeaponsModule);
    return WeaponsModule;
}());
exports.WeaponsModule = WeaponsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhcG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWFwb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUseURBQXVEO0FBQ3ZELGdFQUFvRjtBQUNwRixtRUFBZ0U7QUFDaEUseURBQXVEO0FBQ3ZELCtEQUE2RDtBQUM3RCw4REFBNEQ7QUFDNUQsb0ZBQW9GO0FBQ3BGLHdEQUF3RDtBQW1CeEQ7SUFBQTtJQUNBLENBQUM7SUFEWSxhQUFhO1FBbEJ6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLDRCQUFZO2dCQUNaLHNDQUE0QjthQUMvQjtZQUNELFlBQVksRUFBRTtnQkFDVixvQ0FBZ0I7Z0JBQ2hCLDRCQUFZO2dCQUNaLGtDQUFlO2dCQUNmLHlCQUF5QjtnQkFDekIsZUFBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csYUFBYSxDQUN6QjtJQUFELG9CQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXcvYW5ndWxhcic7XG5pbXBvcnQgeyBXZWFwb25zUm91dGluZ01vZHVsZSB9IGZyb20gJy4vd2VhcG9ucy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBXZWFwb25zQ29tcG9uZW50IH0gZnJvbSAnLi93ZWFwb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXQlRDb21wb25lbnQgfSBmcm9tICcuL3dlYXBvbnNieXR5cGUvd2J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWFwb25Db21wb25lbnQgfSBmcm9tICcuL3dlYXBvbi93ZWFwb24uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFdlYXBvbnNCeVR5cGVDb21wb25lbnQgfSBmcm9tICcuL3dlYXBvbnNieXR5cGUvd2VhcG9uc2J5dHlwZS5jb21wb25lbnQnO1xuLy9pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2l0ZW0uY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFdlYXBvbnNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBXZWFwb25zQ29tcG9uZW50LFxuICAgICAgICBXQlRDb21wb25lbnQsXG4gICAgICAgIFdlYXBvbkNvbXBvbmVudFxuICAgICAgICAvLyBXZWFwb25zQnlUeXBlQ29tcG9uZW50XG4gICAgICAgIC8vSXRlbUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBXZWFwb25zTW9kdWxlIHsgXG59Il19