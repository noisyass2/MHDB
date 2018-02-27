"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var items_service_1 = require("../../shared/items/items.service");
var monsters_service_1 = require("../../shared/monsters/monsters.service");
var armors_service_1 = require("../../shared/armors/armors.service");
var ItemComponent = /** @class */ (function () {
    function ItemComponent(pageRoute, itemService, monsService, armorService, routerExtensions) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.itemService = itemService;
        this.monsService = monsService;
        this.armorService = armorService;
        this.routerExtensions = routerExtensions;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.name = params["id"]; });
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ItemComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.item = this.itemService.getItemByName(this.name);
        this.item.monsters = this.monsService.getByItemName(this.name);
        this.item.armors = this.armorService.getByItemName(this.name);
        // console.log(JSON.stringify(this.item));
    };
    Object.defineProperty(ItemComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    ItemComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    ItemComponent.prototype.onItemSelected = function (args) {
        var lv = args.object;
        console.log("selected element:" + lv.getSelectedItems()[0].name);
    };
    ItemComponent.prototype.onArmorSelected = function (args) {
        var lv = args.object;
        console.log(lv.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/armors/armor', lv.getSelectedItems()[0].name]);
    };
    ItemComponent.prototype.onMonsterSelected = function (args) {
        var lv = args.object;
        console.log(lv.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/monsters/monstersbytype', lv.getSelectedItems()[0].name]);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ItemComponent.prototype, "drawerComponent", void 0);
    ItemComponent = __decorate([
        core_1.Component({
            selector: "Item",
            moduleId: module.id,
            providers: [items_service_1.ItemsService, monsters_service_1.MonsterService, armors_service_1.ArmorsService],
            styleUrls: ["./item.component.css"],
            templateUrl: "./item.component.html"
        }),
        __metadata("design:paramtypes", [router_1.PageRoute,
            items_service_1.ItemsService,
            monsters_service_1.MonsterService,
            armors_service_1.ArmorsService,
            router_1.RouterExtensions])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLHNEQUEwRTtBQUMxRSx1Q0FBcUM7QUFJckMsa0VBQWdFO0FBQ2hFLDJFQUF3RTtBQUN4RSxxRUFBbUU7QUFVbkU7SUFLSSx1QkFBb0IsU0FBb0IsRUFDNUIsV0FBd0IsRUFDeEIsV0FBNEIsRUFDNUIsWUFBMkIsRUFDM0IsZ0JBQWtDO1FBSjlDLGlCQVNDO1FBVG1CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQzNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFPLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQVVEOztrRUFFOEQ7SUFDOUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5RCwwQ0FBMEM7SUFDOUMsQ0FBQztJQUVELHNCQUFJLCtDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O2tFQUc4RDtJQUM5RCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBcUIsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXJFLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQXFCLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELHlDQUFpQixHQUFqQixVQUFrQixJQUFJO1FBQ2xCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFxQixDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLDBCQUEwQixFQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQTVDb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjswREFBQztJQXBCcEQsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUUsaUNBQWMsRUFBRSw4QkFBYSxDQUFDO1lBQ3hELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FNaUMsa0JBQVM7WUFDaEIsNEJBQVk7WUFDVixpQ0FBYztZQUNkLDhCQUFhO1lBQ1QseUJBQWdCO09BVHJDLGFBQWEsQ0FpRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcbmltcG9ydCB7a25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlld1wiO1xuaW1wb3J0IHsgSXRlbXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9pdGVtcy9pdGVtcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNb25zdGVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9uc3RlcnMvbW9uc3RlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQXJtb3JzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvYXJtb3JzL2FybW9ycy5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSXRlbVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgcHJvdmlkZXJzOiBbSXRlbXNTZXJ2aWNlLCBNb25zdGVyU2VydmljZSwgQXJtb3JzU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW0uY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgICBwdWJsaWMgbmFtZTtcbiAgICBwdWJsaWMgaXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsIFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOkl0ZW1zU2VydmljZSwgXG4gICAgICAgIHByaXZhdGUgbW9uc1NlcnZpY2UgOiBNb25zdGVyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhcm1vclNlcnZpY2U6IEFybW9yc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkgeyBcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHsgdGhpcy5uYW1lID0gcGFyYW1zW1wiaWRcIl07IH0pO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbUJ5TmFtZSh0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLml0ZW0ubW9uc3RlcnMgPSB0aGlzLm1vbnNTZXJ2aWNlLmdldEJ5SXRlbU5hbWUodGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5pdGVtLmFybW9ycyA9IHRoaXMuYXJtb3JTZXJ2aWNlLmdldEJ5SXRlbU5hbWUodGhpcy5uYW1lKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW0pKTtcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXG4gICAgKiBoYXZlIGEgYnV0dG9uIHRoYXQgb3BlbnMgaXQuIFVzZSB0aGUgc2hvd0RyYXdlcigpIGZ1bmN0aW9uIHRvIG9wZW4gdGhlIGFwcCBkcmF3ZXIgc2VjdGlvbi5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1TZWxlY3RlZChhcmdzKXtcbiAgICAgICAgdmFyIGx2ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgZWxlbWVudDpcIiArIGx2LmdldFNlbGVjdGVkSXRlbXMoKVswXS5uYW1lKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25Bcm1vclNlbGVjdGVkKGFyZ3Mpe1xuICAgICAgICB2YXIgbHYgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgY29uc29sZS5sb2cobHYuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLm5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvYXJtb3JzL2FybW9yJyxsdi5nZXRTZWxlY3RlZEl0ZW1zKClbMF0ubmFtZV0pO1xuICAgIH1cblxuICAgIG9uTW9uc3RlclNlbGVjdGVkKGFyZ3Mpe1xuICAgICAgICB2YXIgbHYgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgY29uc29sZS5sb2cobHYuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLm5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvbW9uc3RlcnMvbW9uc3RlcnNieXR5cGUnLGx2LmdldFNlbGVjdGVkSXRlbXMoKVswXS5uYW1lXSk7XG4gICAgfVxufSJdfQ==