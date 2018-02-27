"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
// import { MonstersRoutingModule } from "./monsters-routing.module";
var armors_routing_module_1 = require("./armors-routing.module");
var armors_component_1 = require("./armors.component");
// import { MonstersByTypeComponent } from "./monstersbytype/monstersbytype.component";
var angular_1 = require("nativescript-pro-ui/listview/angular");
var armor_component_1 = require("./armor/armor.component");
var ArmorsModule = /** @class */ (function () {
    function ArmorsModule() {
    }
    ArmorsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                armors_routing_module_1.ArmorsRoutingModule,
                shared_module_1.SharedModule,
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                armors_component_1.ArmorsComponent,
                armor_component_1.ArmorComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ArmorsModule);
    return ArmorsModule;
}());
exports.ArmorsModule = ArmorsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJtb3JzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFybW9ycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHlEQUF1RDtBQUN2RCxxRUFBcUU7QUFDckUsaUVBQThEO0FBQzlELHVEQUFxRDtBQUNyRCx1RkFBdUY7QUFDdkYsZ0VBQW9GO0FBQ3BGLDJEQUF5RDtBQW1CekQ7SUFBQTtJQUVBLENBQUM7SUFGWSxZQUFZO1FBZnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDJDQUFtQjtnQkFDbkIsNEJBQVk7Z0JBQ1osc0NBQTRCO2FBQy9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2dCQUNmLGdDQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBRXhCO0lBQUQsbUJBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG4vLyBpbXBvcnQgeyBNb25zdGVyc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9tb25zdGVycy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXJtb3JzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FybW9ycy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXJtb3JzQ29tcG9uZW50IH0gZnJvbSBcIi4vYXJtb3JzLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgTW9uc3RlcnNCeVR5cGVDb21wb25lbnQgfSBmcm9tIFwiLi9tb25zdGVyc2J5dHlwZS9tb25zdGVyc2J5dHlwZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBBcm1vckNvbXBvbmVudCB9IGZyb20gXCIuL2FybW9yL2FybW9yLmNvbXBvbmVudFwiO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgQXJtb3JzUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXJtb3JzQ29tcG9uZW50LFxuICAgICAgICBBcm1vckNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcm1vcnNNb2R1bGUgeyBcbiAgICBcbn1cbiJdfQ==