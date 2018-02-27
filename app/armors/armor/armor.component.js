"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var armors_service_1 = require("../../shared/armors/armors.service");
var ArmorComponent = /** @class */ (function () {
    function ArmorComponent(pageRoute, armorService, routerExtensions) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.armorService = armorService;
        this.routerExtensions = routerExtensions;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.name = params["id"]; });
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ArmorComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.armor = this.armorService.getArmorByName(this.name);
    };
    Object.defineProperty(ArmorComponent.prototype, "sideDrawerTransition", {
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
    ArmorComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    ArmorComponent.prototype.onItemSelected = function (args) {
        var lv = args.object;
        console.log("selected element:" + lv.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/items/item', lv.getSelectedItems()[0].name]);
    };
    ArmorComponent.prototype.onSkillSelected = function (args) {
        var listview = args.object;
        this.routerExtensions.navigate(['/skills/skill', listview.getSelectedItems()[0].name]);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ArmorComponent.prototype, "drawerComponent", void 0);
    ArmorComponent = __decorate([
        core_1.Component({
            selector: "Armor",
            moduleId: module.id,
            providers: [armors_service_1.ArmorsService],
            styleUrls: ["./armor.component.css"],
            templateUrl: "./armor.component.html"
        }),
        __metadata("design:paramtypes", [router_1.PageRoute, armors_service_1.ArmorsService,
            router_1.RouterExtensions])
    ], ArmorComponent);
    return ArmorComponent;
}());
exports.ArmorComponent = ArmorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJtb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJtb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFDaEYsc0RBQTBFO0FBQzFFLHVDQUFxQztBQUlyQyxxRUFBbUU7QUFTbkU7SUFLSSx3QkFBb0IsU0FBb0IsRUFBVSxZQUEwQixFQUNsRSxnQkFBa0M7UUFENUMsaUJBS0M7UUFMbUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ2xFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFPLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQVVEOztrRUFFOEQ7SUFDOUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHNCQUFJLGdEQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O2tFQUc4RDtJQUM5RCwwQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBcUIsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLEVBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVsRixDQUFDO0lBRU0sd0NBQWUsR0FBdEIsVUFBdUIsSUFBSTtRQUN2QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBcUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQWxDb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjsyREFBQztJQWhCcEQsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDMUIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU1pQyxrQkFBUyxFQUF1Qiw4QkFBYTtZQUNoRCx5QkFBZ0I7T0FObkMsY0FBYyxDQW1EMUI7SUFBRCxxQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xuaW1wb3J0IHtrbm93bkZvbGRlcnN9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5cbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI7XG5pbXBvcnQgeyBBcm1vcnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9hcm1vcnMvYXJtb3JzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQXJtb3JcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHByb3ZpZGVyczogW0FybW9yc1NlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogW1wiLi9hcm1vci5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXJtb3IuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcm1vckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgcHVibGljIG5hbWU7XG4gICAgcHVibGljIGFybW9yO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSwgcHJpdmF0ZSBhcm1vclNlcnZpY2U6QXJtb3JzU2VydmljZVxuICAgICwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLm5hbWUgPSBwYXJhbXNbXCJpZFwiXTsgfSk7XG4gICAgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgdGhpcy5hcm1vciA9IHRoaXMuYXJtb3JTZXJ2aWNlLmdldEFybW9yQnlOYW1lKHRoaXMubmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgb25JdGVtU2VsZWN0ZWQoYXJncyl7XG4gICAgICAgIHZhciBsdiA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIGVsZW1lbnQ6XCIgKyBsdi5nZXRTZWxlY3RlZEl0ZW1zKClbMF0ubmFtZSk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9pdGVtcy9pdGVtJyxsdi5nZXRTZWxlY3RlZEl0ZW1zKClbMF0ubmFtZV0pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Ta2lsbFNlbGVjdGVkKGFyZ3Mpe1xuICAgICAgICB2YXIgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3NraWxscy9za2lsbCcsbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLm5hbWVdKTtcbiAgICB9XG59Il19