"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var angular_1 = require("nativescript-pro-ui/listview/angular");
var items_routing_module_1 = require("./items-routing.module");
var items_component_1 = require("./items.component");
var item_component_1 = require("./item/item.component");
var ItemsModule = /** @class */ (function () {
    function ItemsModule() {
    }
    ItemsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                items_routing_module_1.ItemsRoutingModule,
                shared_module_1.SharedModule,
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                items_component_1.ItemsComponent,
                item_component_1.ItemComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ItemsModule);
    return ItemsModule;
}());
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx5REFBdUQ7QUFDdkQsZ0VBQW9GO0FBQ3BGLCtEQUE0RDtBQUM1RCxxREFBbUQ7QUFDbkQsd0RBQXNEO0FBaUJ0RDtJQUFBO0lBRUEsQ0FBQztJQUZZLFdBQVc7UUFmdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIseUNBQWtCO2dCQUNsQiw0QkFBWTtnQkFDWixzQ0FBNEI7YUFDL0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7Z0JBQ2QsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FFdkI7SUFBRCxrQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBJdGVtc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9pdGVtcy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEl0ZW1zUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1Db21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNNb2R1bGUgeyBcbiAgICBcbn1cbiJdfQ==