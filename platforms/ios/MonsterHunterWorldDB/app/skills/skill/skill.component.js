"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var skills_service_1 = require("../../shared/skills/skills.service");
var armors_service_1 = require("../../shared/armors/armors.service");
var SkillComponent = /** @class */ (function () {
    function SkillComponent(pageRoute, routerExtensions, skillService, armorService) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.skillService = skillService;
        this.armorService = armorService;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.name = params["id"]; });
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    SkillComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.skill = this.skillService.getSkillByName(this.name);
        this.skill.armors = this.armorService.getBySkillName(this.name);
        // console.log(JSON.stringify(this.item));
    };
    Object.defineProperty(SkillComponent.prototype, "sideDrawerTransition", {
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
    SkillComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    SkillComponent.prototype.onItemSelected = function (args) {
        var lv = args.object;
        console.log("selected element:" + lv.getSelectedItems()[0].name);
    };
    SkillComponent.prototype.onArmorSelected = function (args) {
        var lv = args.object;
        console.log(lv.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/armors/armor', lv.getSelectedItems()[0].name]);
    };
    SkillComponent.prototype.onMonsterSelected = function (args) {
        var lv = args.object;
        console.log(lv.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/monsters/monstersbytype', lv.getSelectedItems()[0].name]);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SkillComponent.prototype, "drawerComponent", void 0);
    SkillComponent = __decorate([
        core_1.Component({
            selector: "Skill",
            moduleId: module.id,
            providers: [skills_service_1.SkillsService, armors_service_1.ArmorsService],
            styleUrls: ["./skill.component.css"],
            templateUrl: "./skill.component.html"
        }),
        __metadata("design:paramtypes", [router_1.PageRoute,
            router_1.RouterExtensions,
            skills_service_1.SkillsService,
            armors_service_1.ArmorsService])
    ], SkillComponent);
    return SkillComponent;
}());
exports.SkillComponent = SkillComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2tpbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFDaEYsc0RBQTBFO0FBQzFFLHVDQUFxQztBQUlyQyxxRUFBbUU7QUFDbkUscUVBQW1FO0FBU25FO0lBS0ksd0JBQW9CLFNBQW9CLEVBQzVCLGdCQUFrQyxFQUNsQyxZQUEyQixFQUMzQixZQUEyQjtRQUh2QyxpQkFRQztRQVJtQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWU7UUFFbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFPLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQVVEOztrRUFFOEQ7SUFDOUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLDBDQUEwQztJQUM5QyxDQUFDO0lBRUQsc0JBQUksZ0RBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7a0VBRzhEO0lBQzlELDBDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFxQixDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckUsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBcUIsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsMENBQWlCLEdBQWpCLFVBQWtCLElBQUk7UUFDbEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQXFCLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsMEJBQTBCLEVBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBMUNvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzJEQUFDO0lBbkJwRCxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBQyw4QkFBYSxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FNaUMsa0JBQVM7WUFDVix5QkFBZ0I7WUFDcEIsOEJBQWE7WUFDYiw4QkFBYTtPQVI5QixjQUFjLENBOEQxQjtJQUFELHFCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5pbXBvcnQge2tub3duRm9sZGVyc30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcblxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NraWxscy9za2lsbHMuc2VydmljZVwiO1xuaW1wb3J0IHsgQXJtb3JzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvYXJtb3JzL2FybW9ycy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlNraWxsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBwcm92aWRlcnM6IFtTa2lsbHNTZXJ2aWNlLEFybW9yc1NlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogW1wiLi9za2lsbC5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2tpbGwuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTa2lsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgcHVibGljIG5hbWU7XG4gICAgcHVibGljIHNraWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHNraWxsU2VydmljZTogU2tpbGxzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhcm1vclNlcnZpY2U6IEFybW9yc1NlcnZpY2VcbiAgICApIHsgXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxuICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7IHRoaXMubmFtZSA9IHBhcmFtc1tcImlkXCJdOyB9KTtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgICAgICB0aGlzLnNraWxsID0gdGhpcy5za2lsbFNlcnZpY2UuZ2V0U2tpbGxCeU5hbWUodGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5za2lsbC5hcm1vcnMgPSB0aGlzLmFybW9yU2VydmljZS5nZXRCeVNraWxsTmFtZSh0aGlzLm5hbWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW0pKTtcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXG4gICAgKiBoYXZlIGEgYnV0dG9uIHRoYXQgb3BlbnMgaXQuIFVzZSB0aGUgc2hvd0RyYXdlcigpIGZ1bmN0aW9uIHRvIG9wZW4gdGhlIGFwcCBkcmF3ZXIgc2VjdGlvbi5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1TZWxlY3RlZChhcmdzKXtcbiAgICAgICAgdmFyIGx2ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgZWxlbWVudDpcIiArIGx2LmdldFNlbGVjdGVkSXRlbXMoKVswXS5uYW1lKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25Bcm1vclNlbGVjdGVkKGFyZ3Mpe1xuICAgICAgICB2YXIgbHYgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgY29uc29sZS5sb2cobHYuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLm5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvYXJtb3JzL2FybW9yJyxsdi5nZXRTZWxlY3RlZEl0ZW1zKClbMF0ubmFtZV0pO1xuICAgIH1cblxuICAgIG9uTW9uc3RlclNlbGVjdGVkKGFyZ3Mpe1xuICAgICAgICB2YXIgbHYgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgY29uc29sZS5sb2cobHYuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLm5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvbW9uc3RlcnMvbW9uc3RlcnNieXR5cGUnLGx2LmdldFNlbGVjdGVkSXRlbXMoKVswXS5uYW1lXSk7XG4gICAgfVxufSJdfQ==