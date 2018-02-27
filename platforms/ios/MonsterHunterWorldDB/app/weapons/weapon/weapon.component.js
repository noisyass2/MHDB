"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var weapons_service_1 = require("../../shared/weapons/weapons.service");
var router_1 = require("nativescript-angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var WeaponComponent = /** @class */ (function () {
    function WeaponComponent(service, pageRoute, routerExtensions) {
        var _this = this;
        this.service = service;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.id = params['id']; });
        console.log(this.id);
        this.weapon = this.service.getWeaponByName(this.id);
        this.groupFunc = function (item) {
            return item.cat;
        };
        this.itemss = new observable_array_1.ObservableArray(this.weapon.items);
        // let textField: TextField = this.urlFieldRef.nativeElement;
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    WeaponComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.tabView = this.tabViewRef.nativeElement;
    };
    Object.defineProperty(WeaponComponent.prototype, "sideDrawerTransition", {
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
    WeaponComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    WeaponComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    Object.defineProperty(WeaponComponent.prototype, "groupFunc", {
        get: function () {
            return this._groupFunc;
        },
        set: function (value) {
            this._groupFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    WeaponComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        console.log(listview.getSelectedItems()[0].item);
        this.routerExtensions.navigate(['/items/item/', listview.getSelectedItems()[0].item]);
    };
    WeaponComponent.prototype.onWeaponSelected = function (args) {
        var listview = args.object;
        console.log(listview.getSelectedItems()[0].name);
        // this.routerExtensions.navigate(['/weapons/weapon/',listview.getSelectedItems()[0].name]);
        this.weapon = this.service.getWeaponByName(listview.getSelectedItems()[0].name);
        this.tabView.selectedIndex = 0;
    };
    __decorate([
        core_1.ViewChild('drawer'),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], WeaponComponent.prototype, "drawerComponent", void 0);
    __decorate([
        core_1.ViewChild("tabview"),
        __metadata("design:type", core_1.ElementRef)
    ], WeaponComponent.prototype, "tabViewRef", void 0);
    WeaponComponent = __decorate([
        core_1.Component({
            selector: 'Weapon',
            moduleId: module.id,
            providers: [weapons_service_1.WeaponsService],
            templateUrl: './weapon.component.html'
        }),
        __metadata("design:paramtypes", [weapons_service_1.WeaponsService, router_1.PageRoute, router_1.RouterExtensions])
    ], WeaponComponent);
    return WeaponComponent;
}());
exports.WeaponComponent = WeaponComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhcG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYXBvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUNoRix3RUFBc0U7QUFDdEUsc0RBQTBFO0FBQzFFLDRGQUEwRjtBQVkxRjtJQStCSSx5QkFBb0IsT0FBdUIsRUFBUyxTQUFvQixFQUFTLGdCQUFrQztRQUFuSCxpQkFpQkM7UUFqQm1CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDL0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFPLEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFDLElBQUk7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCw2REFBNkQ7SUFHakUsQ0FBQztJQXZDRDs7a0VBRThEO0lBQzlELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDakQsQ0FBQztJQUNELHNCQUFJLGlEQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFDRDs7O2tFQUc4RDtJQUM5RCwyQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBeUJELGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBSUQsc0JBQUksc0NBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUFjLEtBQXdCO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQUhBO0lBS00sd0NBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUV0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBcUIsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLEVBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU0sMENBQWdCLEdBQXZCLFVBQXdCLElBQUk7UUFFeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQXFCLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCw0RkFBNEY7UUFFNUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXhFb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjs0REFBQztJQXVCdkM7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQWEsaUJBQVU7dURBQUM7SUE5QnBDLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUMsQ0FBQyxnQ0FBYyxDQUFDO1lBQzFCLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FnQytCLGdDQUFjLEVBQW9CLGtCQUFTLEVBQTJCLHlCQUFnQjtPQS9CMUcsZUFBZSxDQWlGM0I7SUFBRCxzQkFBQztDQUFBLEFBakZELElBaUZDO0FBakZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFdlYXBvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3dlYXBvbnMvd2VhcG9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XG5cblxuaW1wb3J0IHsgVGFiVmlldywgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInVpL3RhYi12aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnV2VhcG9uJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHByb3ZpZGVyczpbV2VhcG9uc1NlcnZpY2VdLCBcbiAgICB0ZW1wbGF0ZVVybDogJy4vd2VhcG9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBXZWFwb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRhYlZpZXc6IFRhYlZpZXc7XG4gICAgd2VhcG9uOiBhbnk7XG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgJ29uRHJhd2VyQnV0dG9uVGFwJyBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBAVmlld0NoaWxkKCdkcmF3ZXInKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgICAgIHRoaXMudGFiVmlldyA9IHRoaXMudGFiVmlld1JlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlkO1xuICAgIHB1YmxpYyBpdGVtc3M7XG5cbiAgICBAVmlld0NoaWxkKFwidGFidmlld1wiKSB0YWJWaWV3UmVmOiBFbGVtZW50UmVmO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogV2VhcG9uc1NlcnZpY2UscHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxuICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7IHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107IH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xuXG4gICAgICAgIHRoaXMud2VhcG9uID0gdGhpcy5zZXJ2aWNlLmdldFdlYXBvbkJ5TmFtZSh0aGlzLmlkKTtcblxuICAgICAgICB0aGlzLmdyb3VwRnVuYyA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jYXQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pdGVtc3MgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMud2VhcG9uLml0ZW1zKTtcbiAgICAgICAgLy8gbGV0IHRleHRGaWVsZDogVGV4dEZpZWxkID0gdGhpcy51cmxGaWVsZFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ29CYWNrKCl7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgX2dyb3VwRnVuYztcblxuICAgIGdldCBncm91cEZ1bmMoKTogKGl0ZW06YW55KSA9PiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXBGdW5jO1xuICAgIH1cbiAgICBzZXQgZ3JvdXBGdW5jKHZhbHVlOiAoaXRlbTphbnkpID0+IGFueSl7XG4gICAgICAgIHRoaXMuX2dyb3VwRnVuYyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZChhcmdzKVxuICAgIHtcbiAgICAgICAgdmFyIGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKVswXS5pdGVtKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2l0ZW1zL2l0ZW0vJyxsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKClbMF0uaXRlbV0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbldlYXBvblNlbGVjdGVkKGFyZ3MpXG4gICAge1xuICAgICAgICB2YXIgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgY29uc29sZS5sb2cobGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLm5hbWUpO1xuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvd2VhcG9ucy93ZWFwb24vJyxsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKClbMF0ubmFtZV0pO1xuXG4gICAgICAgIHRoaXMud2VhcG9uID0gdGhpcy5zZXJ2aWNlLmdldFdlYXBvbkJ5TmFtZShsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKClbMF0ubmFtZSk7XG5cbiAgICAgICAgdGhpcy50YWJWaWV3LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH1cblxufSJdfQ==