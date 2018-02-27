"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var weapons_service_1 = require("../../shared/weapons/weapons.service");
var router_1 = require("nativescript-angular/router");
var WBTComponent = /** @class */ (function () {
    function WBTComponent(service, pageRoute, routerExtensions) {
        var _this = this;
        this.service = service;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.id = params["id"]; });
        this.weapons = this.service.getByType(this.id);
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    WBTComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(WBTComponent.prototype, "sideDrawerTransition", {
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
    WBTComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    WBTComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        console.log(listview.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/weapons/weapon', listview.getSelectedItems()[0].name]);
    };
    WBTComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    __decorate([
        core_1.ViewChild('drawer'),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], WBTComponent.prototype, "drawerComponent", void 0);
    WBTComponent = __decorate([
        core_1.Component({
            selector: 'WBT',
            moduleId: module.id,
            providers: [weapons_service_1.WeaponsService],
            templateUrl: './wbt.component.html'
        }),
        __metadata("design:paramtypes", [weapons_service_1.WeaponsService, router_1.PageRoute, router_1.RouterExtensions])
    ], WBTComponent);
    return WBTComponent;
}());
exports.WBTComponent = WBTComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndidC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUNoRix3RUFBc0U7QUFDdEUsc0RBQTBFO0FBUTFFO0lBNEJJLHNCQUFvQixPQUF1QixFQUFTLFNBQW9CLEVBQVMsZ0JBQWtDO1FBQW5ILGlCQU1DO1FBTm1CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDL0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFPLEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQTFCRDs7a0VBRThEO0lBQzlELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFDRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBQ0Q7OztrRUFHOEQ7SUFDOUQsd0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQWFNLHFDQUFjLEdBQXJCLFVBQXNCLElBQUk7UUFFdEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQXFCLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEVBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUF2Q29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7eURBQUM7SUFOcEQsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBNkIrQixnQ0FBYyxFQUFvQixrQkFBUyxFQUEyQix5QkFBZ0I7T0E1QjFHLFlBQVksQ0ErQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBXZWFwb25zU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC93ZWFwb25zL3dlYXBvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnV0JUJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHByb3ZpZGVyczogW1dlYXBvbnNTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vd2J0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBXQlRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlICdvbkRyYXdlckJ1dHRvblRhcCcgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZCgnZHJhd2VyJykgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlkO1xuICAgIHdlYXBvbnM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFdlYXBvbnNTZXJ2aWNlLHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLmlkID0gcGFyYW1zW1wiaWRcIl07IH0pO1xuXG4gICAgICAgIHRoaXMud2VhcG9ucyA9IHRoaXMuc2VydmljZS5nZXRCeVR5cGUodGhpcy5pZCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3MpXG4gICAge1xuICAgICAgICB2YXIgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgY29uc29sZS5sb2cobGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLm5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvd2VhcG9ucy93ZWFwb24nLGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKVswXS5uYW1lXSk7XG4gICAgfVxuXG4gICAgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuICAgIFxufSJdfQ==