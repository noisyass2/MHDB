"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./items.component");
var item_component_1 = require("./item/item.component");
var routes = [
    // { path: "monstersbytype/:id", component: MonstersByTypeComponent },
    { path: "item/:id", component: item_component_1.ItemComponent },
    { path: "", component: items_component_1.ItemsComponent }
];
var ItemsRoutingModule = /** @class */ (function () {
    function ItemsRoutingModule() {
    }
    ItemsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ItemsRoutingModule);
    return ItemsRoutingModule;
}());
exports.ItemsRoutingModule = ItemsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtcy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFDdkUscURBQW1EO0FBQ25ELHdEQUFzRDtBQUd0RCxJQUFNLE1BQU0sR0FBVztJQUNuQixzRUFBc0U7SUFDdEUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtDQUMxQyxDQUFDO0FBT0Y7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQUw5QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUVXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztBQUF0QixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgLy8geyBwYXRoOiBcIm1vbnN0ZXJzYnl0eXBlLzppZFwiLCBjb21wb25lbnQ6IE1vbnN0ZXJzQnlUeXBlQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIml0ZW0vOmlkXCIsIGNvbXBvbmVudDogSXRlbUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBJdGVtc1JvdXRpbmdNb2R1bGUgeyB9XG4iXX0=