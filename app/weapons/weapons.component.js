"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var weapons_service_1 = require("../shared/weapons/weapons.service");
var WeaponsComponent = /** @class */ (function () {
    function WeaponsComponent(weaponService, routerExtensions) {
        this.weaponService = weaponService;
        this.routerExtensions = routerExtensions;
        this.weapontypes = weaponService.getWeaponTypes();
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    WeaponsComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(WeaponsComponent.prototype, "sideDrawerTransition", {
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
    WeaponsComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    WeaponsComponent.prototype.onWeaponSelected = function (args) {
        var listview = args.object;
        console.log(listview.getSelectedItems()[0].code);
        this.routerExtensions.navigate(["/weapons/wtype", listview.getSelectedItems()[0].code]);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], WeaponsComponent.prototype, "drawerComponent", void 0);
    WeaponsComponent = __decorate([
        core_1.Component({
            selector: "Weapons",
            moduleId: module.id,
            providers: [weapons_service_1.WeaponsService],
            styleUrls: ["./weapons.component.css"],
            templateUrl: "./weapons.component.html"
        }),
        __metadata("design:paramtypes", [weapons_service_1.WeaponsService, router_1.RouterExtensions])
    ], WeaponsComponent);
    return WeaponsComponent;
}());
exports.WeaponsComponent = WeaponsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhcG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWFwb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUE2RDtBQUM3RCw2REFBOEY7QUFDOUYsa0VBQWdGO0FBQ2hGLHNEQUEyRTtBQUMzRSx1Q0FBcUM7QUFPckMscUVBQW1FO0FBU25FO0lBNkJHLDBCQUFvQixhQUE2QixFQUFVLGdCQUFrQztRQUF6RSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3pGLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUF0QkQ7O2tFQUU4RDtJQUM5RCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0JBQUksa0RBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7a0VBRzhEO0lBQzlELDRDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFPTSwyQ0FBZ0IsR0FBdkIsVUFBd0IsSUFBSTtRQUV4QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBcUIsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFqQ29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7NkRBQUM7SUFMbkQsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7eUNBOEJvQyxnQ0FBYyxFQUE0Qix5QkFBZ0I7T0E3Qm5GLGdCQUFnQixDQXVDNUI7SUFBRCx1QkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSAgLCBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcbmltcG9ydCB7a25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuLy8gaW1wb3J0IHsgTW9uc3RlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vbnN0ZXJzL21vbnN0ZXJzLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcblxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IFdlYXBvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC93ZWFwb25zL3dlYXBvbnMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJXZWFwb25zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBwcm92aWRlcnM6IFtXZWFwb25zU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbXCIuL3dlYXBvbnMuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3dlYXBvbnMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBXZWFwb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgfVxuXG4gICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgIH1cblxuICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICB9XG5cbiAgIHB1YmxpYyB3ZWFwb250eXBlcztcbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgd2VhcG9uU2VydmljZTogV2VhcG9uc1NlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyApe1xuICAgICAgIHRoaXMud2VhcG9udHlwZXMgPSB3ZWFwb25TZXJ2aWNlLmdldFdlYXBvblR5cGVzKCk7XG4gICB9XG5cbiAgIHB1YmxpYyBvbldlYXBvblNlbGVjdGVkKGFyZ3MpXG4gICB7XG4gICAgICAgdmFyIGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKVswXS5jb2RlKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi93ZWFwb25zL3d0eXBlXCIsbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLmNvZGVdKTtcbiAgIH1cbn1cbiJdfQ==