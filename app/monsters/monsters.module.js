"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var monsters_routing_module_1 = require("./monsters-routing.module");
var monsters_component_1 = require("./monsters.component");
var monstersbytype_component_1 = require("./monstersbytype/monstersbytype.component");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var MonstersModule = /** @class */ (function () {
    function MonstersModule() {
    }
    MonstersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                monsters_routing_module_1.MonstersRoutingModule,
                shared_module_1.SharedModule,
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                monsters_component_1.MonstersComponent,
                monstersbytype_component_1.MonstersByTypeComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], MonstersModule);
    return MonstersModule;
}());
exports.MonstersModule = MonstersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uc3RlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9uc3RlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx5REFBdUQ7QUFDdkQscUVBQWtFO0FBQ2xFLDJEQUF5RDtBQUN6RCxzRkFBb0Y7QUFDcEYsZ0VBQW9GO0FBbUJwRjtJQUFBO0lBRUEsQ0FBQztJQUZZLGNBQWM7UUFmMUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0NBQXFCO2dCQUNyQiw0QkFBWTtnQkFDWixzQ0FBNEI7YUFDL0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysc0NBQWlCO2dCQUNqQixrREFBdUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FFMUI7SUFBRCxxQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IE1vbnN0ZXJzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL21vbnN0ZXJzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBNb25zdGVyc0NvbXBvbmVudCB9IGZyb20gXCIuL21vbnN0ZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTW9uc3RlcnNCeVR5cGVDb21wb25lbnQgfSBmcm9tIFwiLi9tb25zdGVyc2J5dHlwZS9tb25zdGVyc2J5dHlwZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBNb25zdGVyc1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE1vbnN0ZXJzQ29tcG9uZW50LFxuICAgICAgICBNb25zdGVyc0J5VHlwZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNb25zdGVyc01vZHVsZSB7IFxuICAgIFxufVxuIl19