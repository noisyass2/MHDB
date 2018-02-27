"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
// import { ItemsService } from "../shared/items/items.service";
var skills_service_1 = require("../shared/skills/skills.service");
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillsService, routerExtensions) {
        this.skillsService = skillsService;
        this.routerExtensions = routerExtensions;
        this.skills = this.skillsService.getSkills();
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    SkillsComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        // this.armors = this.itemsService.getArmors();
    };
    Object.defineProperty(SkillsComponent.prototype, "sideDrawerTransition", {
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
    SkillsComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    SkillsComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        // this.armors = this.itemsService.getArmorsByName(searchBar.text);
        this.skills = this.skillsService.getSkillsByName(searchBar.text);
        // alert("You are searching for " + searchBar.text);
    };
    SkillsComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        if (searchBar.text == "" || searchBar.text == undefined) {
            console.log("searching " + searchBar.text);
            this.skills = this.skillsService.getSkillsByName("");
        }
        else {
            console.log("searching " + searchBar.text);
            // this.armors = this.itemsService.getArmorsByName(searchBar.text);
            this.skills = this.skillsService.getSkillsByName(searchBar.text);
        }
        // console.log("SearchBar text changed! New value: " + searchBar.text);
        // this.armors = this.monsservice.getMonstersByName(searchBar.text);
    };
    SkillsComponent.prototype.onSkillSelected = function (args) {
        var listview = args.object;
        this.selID = listview.getSelectedItems()[0].name;
        console.log(this.selID);
        // this.selectedItem = selectedTitles;
        // console.log("Item selected.");
        this.routerExtensions.navigate(['/skills/skill', this.selID]);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SkillsComponent.prototype, "drawerComponent", void 0);
    SkillsComponent = __decorate([
        core_1.Component({
            selector: "Skills",
            moduleId: module.id,
            providers: [skills_service_1.SkillsService],
            styleUrls: ["./skills.component.css"],
            templateUrl: "./skills.component.html"
        }),
        __metadata("design:paramtypes", [skills_service_1.SkillsService, router_1.RouterExtensions])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkRBQThGO0FBQzlGLGtFQUFnRjtBQUNoRixzREFBMkU7QUFDM0UsdUNBQXFDO0FBT3JDLGdFQUFnRTtBQUNoRSxrRUFBZ0U7QUFRaEU7SUErQkkseUJBQW9CLGFBQTRCLEVBQVUsZ0JBQWtDO1FBQXhFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUN4RixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQXZCRDs7a0VBRThEO0lBQzlELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELCtDQUErQztJQUVuRCxDQUFDO0lBRUQsc0JBQUksaURBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7a0VBRzhEO0lBQzlELDJDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFVTSxrQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakUsb0RBQW9EO0lBQ3hELENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksU0FBUyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpELENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxtRUFBbUU7WUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckUsQ0FBQztRQUNELHVFQUF1RTtRQUN2RSxvRUFBb0U7SUFDeEUsQ0FBQztJQUdNLHlDQUFlLEdBQXRCLFVBQXVCLElBQXVCO1FBQzFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFxQixDQUFDO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLHNDQUFzQztRQUN0QyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBbkVvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzREQUFDO0lBTnBELGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzFCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FnQ3FDLDhCQUFhLEVBQTRCLHlCQUFnQjtPQS9CbkYsZUFBZSxDQTBFM0I7SUFBRCxzQkFBQztDQUFBLEFBMUVELElBMEVDO0FBMUVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSAgLCBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcbmltcG9ydCB7a25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuLy8gaW1wb3J0IHsgTW9uc3RlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vbnN0ZXJzL21vbnN0ZXJzLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcblxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbi8vIGltcG9ydCB7IEl0ZW1zU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvaXRlbXMvaXRlbXMuc2VydmljZVwiO1xuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvc2tpbGxzL3NraWxscy5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJTa2lsbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHByb3ZpZGVyczogW1NraWxsc1NlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogW1wiLi9za2lsbHMuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NraWxscy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFNraWxsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBAVmlld0NoaWxkIGRlY29yYXRvciB0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGRyYXdlciBjb21wb25lbnQuXG4gICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgICAgICAvLyB0aGlzLmFybW9ycyA9IHRoaXMuaXRlbXNTZXJ2aWNlLmdldEFybW9ycygpO1xuICAgICAgIFxuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICAqIGhhdmUgYSBidXR0b24gdGhhdCBvcGVucyBpdC4gVXNlIHRoZSBzaG93RHJhd2VyKCkgZnVuY3Rpb24gdG8gb3BlbiB0aGUgYXBwIGRyYXdlciBzZWN0aW9uLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2tpbGxzU2VydmljZTogU2tpbGxzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxuICAgICAgICB0aGlzLnNraWxscyA9IHRoaXMuc2tpbGxzU2VydmljZS5nZXRTa2lsbHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2tpbGxzO1xuXG4gICAgcHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIC8vIHRoaXMuYXJtb3JzID0gdGhpcy5pdGVtc1NlcnZpY2UuZ2V0QXJtb3JzQnlOYW1lKHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgdGhpcy5za2lsbHMgPSB0aGlzLnNraWxsc1NlcnZpY2UuZ2V0U2tpbGxzQnlOYW1lKHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGlmKHNlYXJjaEJhci50ZXh0ID09IFwiXCIgfHwgc2VhcmNoQmFyLnRleHQgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgICAgICAgICAgdGhpcy5za2lsbHMgPSB0aGlzLnNraWxsc1NlcnZpY2UuZ2V0U2tpbGxzQnlOYW1lKFwiXCIpO1xuICAgICAgICBcbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgICAgICAgICAgLy8gdGhpcy5hcm1vcnMgPSB0aGlzLml0ZW1zU2VydmljZS5nZXRBcm1vcnNCeU5hbWUoc2VhcmNoQmFyLnRleHQpO1xuICAgICAgICAgICAgdGhpcy5za2lsbHMgPSB0aGlzLnNraWxsc1NlcnZpY2UuZ2V0U2tpbGxzQnlOYW1lKHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgICAgICAvLyB0aGlzLmFybW9ycyA9IHRoaXMubW9uc3NlcnZpY2UuZ2V0TW9uc3RlcnNCeU5hbWUoc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxJRDtcbiAgICBwdWJsaWMgb25Ta2lsbFNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBsaXN0dmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgICAgIFxuICAgICAgICB0aGlzLnNlbElEID0gbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsSUQpO1xuICAgICAgICAvLyB0aGlzLnNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkVGl0bGVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW0gc2VsZWN0ZWQuXCIpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvc2tpbGxzL3NraWxsJyx0aGlzLnNlbElEXSk7XG4gICAgfVxufSJdfQ==