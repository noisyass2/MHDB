"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var armors_service_1 = require("../shared/armors/armors.service");
var ArmorsComponent = /** @class */ (function () {
    function ArmorsComponent(armorservice, routerExtensions) {
        this.armorservice = armorservice;
        this.routerExtensions = routerExtensions;
        this.loarmors = this.armorservice.getArmorsByRank("Low");
        this.hiarmors = this.armorservice.getArmorsByRank("High");
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ArmorsComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        // this.armors = this.armorservice.getArmors();
    };
    Object.defineProperty(ArmorsComponent.prototype, "sideDrawerTransition", {
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
    ArmorsComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    ArmorsComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        // this.armors = this.armorservice.getArmorsByName(searchBar.text);
        this.loarmors = this.armorservice.getArmorsByRank("Low");
        this.hiarmors = this.armorservice.getArmorsByRank("High");
        // alert("You are searching for " + searchBar.text);
    };
    ArmorsComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        if (searchBar.text == "") {
            console.log("searching " + searchBar.text);
            this.loarmors = this.armorservice.getArmorsByName("", "Low");
            this.hiarmors = this.armorservice.getArmorsByName("", "High");
        }
        else {
            console.log("searching " + searchBar.text);
            // this.armors = this.armorservice.getArmorsByName(searchBar.text);
            this.loarmors = this.armorservice.getArmorsByName(searchBar.text, "Low");
            this.hiarmors = this.armorservice.getArmorsByName(searchBar.text, "High");
        }
        // console.log("SearchBar text changed! New value: " + searchBar.text);
        // this.armors = this.monsservice.getMonstersByName(searchBar.text);
    };
    ArmorsComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        this.selID = listview.getSelectedItems()[0].name;
        console.log(this.selID);
        // this.selectedItem = selectedTitles;
        // console.log("Item selected.");
        this.routerExtensions.navigate(['/armors/armor', this.selID]);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ArmorsComponent.prototype, "drawerComponent", void 0);
    ArmorsComponent = __decorate([
        core_1.Component({
            selector: "Armors",
            moduleId: module.id,
            providers: [armors_service_1.ArmorsService],
            styleUrls: ["./armors.component.css"],
            templateUrl: "./armors.component.html"
        }),
        __metadata("design:paramtypes", [armors_service_1.ArmorsService, router_1.RouterExtensions])
    ], ArmorsComponent);
    return ArmorsComponent;
}());
exports.ArmorsComponent = ArmorsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJtb3JzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFybW9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUNoRixzREFBMkU7QUFDM0UsdUNBQXFDO0FBT3JDLGtFQUFnRTtBQVNoRTtJQStCSSx5QkFBb0IsWUFBMkIsRUFBVSxnQkFBa0M7UUFBdkUsaUJBQVksR0FBWixZQUFZLENBQWU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3ZGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBeEJEOztrRUFFOEQ7SUFDOUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDMUQsK0NBQStDO0lBRW5ELENBQUM7SUFFRCxzQkFBSSxpREFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQ7OztrRUFHOEQ7SUFDOUQsMkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQWFNLGtDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLG1FQUFtRTtRQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsb0RBQW9EO0lBQ3hELENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsbUVBQW1FO1lBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUNELHVFQUF1RTtRQUN2RSxvRUFBb0U7SUFDeEUsQ0FBQztJQUdNLHdDQUFjLEdBQXJCLFVBQXNCLElBQXVCO1FBQ3pDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFxQixDQUFDO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLHNDQUFzQztRQUN0QyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBdEVvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzREQUFDO0lBTnBELGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzFCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FnQ29DLDhCQUFhLEVBQTRCLHlCQUFnQjtPQS9CbEYsZUFBZSxDQStFM0I7SUFBRCxzQkFBQztDQUFBLEFBL0VELElBK0VDO0FBL0VZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSAgLCBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcbmltcG9ydCB7a25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuLy8gaW1wb3J0IHsgTW9uc3RlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vbnN0ZXJzL21vbnN0ZXJzLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcblxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IEFybW9yc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2FybW9ycy9hcm1vcnMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJBcm1vcnNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHByb3ZpZGVyczogW0FybW9yc1NlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogW1wiLi9hcm1vcnMuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FybW9ycy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFybW9yc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgICAgICAvLyB0aGlzLmFybW9ycyA9IHRoaXMuYXJtb3JzZXJ2aWNlLmdldEFybW9ycygpO1xuICAgICAgIFxuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJtb3JzZXJ2aWNlOiBBcm1vcnNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgXG4gICAgICAgIHRoaXMubG9hcm1vcnMgPSB0aGlzLmFybW9yc2VydmljZS5nZXRBcm1vcnNCeVJhbmsoXCJMb3dcIik7XG4gICAgICAgIHRoaXMuaGlhcm1vcnMgPSB0aGlzLmFybW9yc2VydmljZS5nZXRBcm1vcnNCeVJhbmsoXCJIaWdoXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcm1vcnM7XG4gICAgcHVibGljIGxvYXJtb3JzO1xuICAgIHB1YmxpYyBoaWFybW9ycztcblxuICAgIHB1YmxpYyBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICAvLyB0aGlzLmFybW9ycyA9IHRoaXMuYXJtb3JzZXJ2aWNlLmdldEFybW9yc0J5TmFtZShzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIHRoaXMubG9hcm1vcnMgPSB0aGlzLmFybW9yc2VydmljZS5nZXRBcm1vcnNCeVJhbmsoXCJMb3dcIik7XG4gICAgICAgIHRoaXMuaGlhcm1vcnMgPSB0aGlzLmFybW9yc2VydmljZS5nZXRBcm1vcnNCeVJhbmsoXCJIaWdoXCIpO1xuICAgICAgICAvLyBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBpZihzZWFyY2hCYXIudGV4dCA9PSBcIlwiKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgICAgICAgICAgdGhpcy5sb2FybW9ycyA9IHRoaXMuYXJtb3JzZXJ2aWNlLmdldEFybW9yc0J5TmFtZShcIlwiLFwiTG93XCIpO1xuICAgICAgICAgICAgdGhpcy5oaWFybW9ycyA9IHRoaXMuYXJtb3JzZXJ2aWNlLmdldEFybW9yc0J5TmFtZShcIlwiLFwiSGlnaFwiKTtcbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgICAgICAgICAgLy8gdGhpcy5hcm1vcnMgPSB0aGlzLmFybW9yc2VydmljZS5nZXRBcm1vcnNCeU5hbWUoc2VhcmNoQmFyLnRleHQpO1xuICAgICAgICAgICAgdGhpcy5sb2FybW9ycyA9IHRoaXMuYXJtb3JzZXJ2aWNlLmdldEFybW9yc0J5TmFtZShzZWFyY2hCYXIudGV4dCxcIkxvd1wiKTtcbiAgICAgICAgICAgIHRoaXMuaGlhcm1vcnMgPSB0aGlzLmFybW9yc2VydmljZS5nZXRBcm1vcnNCeU5hbWUoc2VhcmNoQmFyLnRleHQsXCJIaWdoXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgLy8gdGhpcy5hcm1vcnMgPSB0aGlzLm1vbnNzZXJ2aWNlLmdldE1vbnN0ZXJzQnlOYW1lKHNlYXJjaEJhci50ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsSUQ7XG4gICAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBsaXN0dmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgICAgIFxuICAgICAgICB0aGlzLnNlbElEID0gbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsSUQpO1xuICAgICAgICAvLyB0aGlzLnNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkVGl0bGVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW0gc2VsZWN0ZWQuXCIpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvYXJtb3JzL2FybW9yJyx0aGlzLnNlbElEXSk7XG4gICAgfVxuXG4gICAgXG59XG4iXX0=