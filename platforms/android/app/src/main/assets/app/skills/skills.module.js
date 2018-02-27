"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var skills_routing_module_1 = require("./skills-routing.module");
var skills_component_1 = require("./skills.component");
var skill_component_1 = require("./skill/skill.component");
var SkillsModule = /** @class */ (function () {
    function SkillsModule() {
    }
    SkillsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                skills_routing_module_1.SkillsRoutingModule,
                shared_module_1.SharedModule,
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                skills_component_1.SkillsComponent,
                skill_component_1.SkillComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SkillsModule);
    return SkillsModule;
}());
exports.SkillsModule = SkillsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHlEQUF1RDtBQUN2RCxnRUFBb0Y7QUFDcEYsaUVBQThEO0FBQzlELHVEQUFxRDtBQUNyRCwyREFBeUQ7QUFrQnpEO0lBQUE7SUFFQSxDQUFDO0lBRlksWUFBWTtRQWZ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwyQ0FBbUI7Z0JBQ25CLDRCQUFZO2dCQUNaLHNDQUE0QjthQUMvQjtZQUNELFlBQVksRUFBRTtnQkFDVixrQ0FBZTtnQkFDZixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUV4QjtJQUFELG1CQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IFNraWxsc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9za2lsbHMtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFNraWxsc0NvbXBvbmVudCB9IGZyb20gXCIuL3NraWxscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNraWxsQ29tcG9uZW50IH0gZnJvbSBcIi4vc2tpbGwvc2tpbGwuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgU2tpbGxzUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2tpbGxzQ29tcG9uZW50LFxuICAgICAgICBTa2lsbENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTa2lsbHNNb2R1bGUgeyBcbiAgICBcbn1cbiJdfQ==