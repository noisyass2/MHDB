"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var items_service_1 = require("../shared/items/items.service");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemsService, routerExtensions) {
        this.itemsService = itemsService;
        this.routerExtensions = routerExtensions;
        this.items = this.itemsService.getItems();
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ItemsComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        // this.armors = this.itemsService.getArmors();
    };
    Object.defineProperty(ItemsComponent.prototype, "sideDrawerTransition", {
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
    ItemsComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    ItemsComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        // this.armors = this.itemsService.getArmorsByName(searchBar.text);
        this.items = this.itemsService.getItemByName(searchBar.text);
        // alert("You are searching for " + searchBar.text);
    };
    ItemsComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        if (searchBar.text == "" || searchBar.text == undefined) {
            console.log("searching " + searchBar.text);
            this.items = this.itemsService.getItemsByName("");
        }
        else {
            console.log("searching " + searchBar.text);
            // this.armors = this.itemsService.getArmorsByName(searchBar.text);
            this.items = this.itemsService.getItemsByName(searchBar.text);
        }
        // console.log("SearchBar text changed! New value: " + searchBar.text);
        // this.armors = this.monsservice.getMonstersByName(searchBar.text);
    };
    ItemsComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        this.selID = listview.getSelectedItems()[0].name;
        console.log(this.selID);
        // this.selectedItem = selectedTitles;
        // console.log("Item selected.");
        this.routerExtensions.navigate(['/items/item', this.selID]);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ItemsComponent.prototype, "drawerComponent", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "Items",
            moduleId: module.id,
            providers: [items_service_1.ItemsService],
            styleUrls: ["./items.component.css"],
            templateUrl: "./items.component.html"
        }),
        __metadata("design:paramtypes", [items_service_1.ItemsService, router_1.RouterExtensions])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFDaEYsc0RBQTJFO0FBQzNFLHVDQUFxQztBQU9yQywrREFBNkQ7QUFRN0Q7SUErQkksd0JBQW9CLFlBQTBCLEVBQVUsZ0JBQWtDO1FBQXRFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUN0RixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQXZCRDs7a0VBRThEO0lBQzlELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtQ0FBc0IsRUFBRSxDQUFDO1FBQzFELCtDQUErQztJQUVuRCxDQUFDO0lBRUQsc0JBQUksZ0RBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7a0VBRzhEO0lBQzlELDBDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFVTSxpQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0Qsb0RBQW9EO0lBQ3hELENBQUM7SUFFTSxzQ0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksU0FBUyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXRELENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxtRUFBbUU7WUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEUsQ0FBQztRQUNELHVFQUF1RTtRQUN2RSxvRUFBb0U7SUFDeEUsQ0FBQztJQUdNLHVDQUFjLEdBQXJCLFVBQXNCLElBQXVCO1FBQ3pDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFxQixDQUFDO1FBRTFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLHNDQUFzQztRQUN0QyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBbkVvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzJEQUFDO0lBTnBELGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FnQ29DLDRCQUFZLEVBQTRCLHlCQUFnQjtPQS9CakYsY0FBYyxDQTBFMUI7SUFBRCxxQkFBQztDQUFBLEFBMUVELElBMEVDO0FBMUVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSAgLCBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcbmltcG9ydCB7a25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuLy8gaW1wb3J0IHsgTW9uc3RlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vbnN0ZXJzL21vbnN0ZXJzLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcblxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IEl0ZW1zU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvaXRlbXMvaXRlbXMuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHByb3ZpZGVyczogW0l0ZW1zU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW1zLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgICAgIC8vIHRoaXMuYXJtb3JzID0gdGhpcy5pdGVtc1NlcnZpY2UuZ2V0QXJtb3JzKCk7XG4gICAgICAgXG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtc1NlcnZpY2U6IEl0ZW1zU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtc1NlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXRlbXM7XG5cbiAgICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgLy8gdGhpcy5hcm1vcnMgPSB0aGlzLml0ZW1zU2VydmljZS5nZXRBcm1vcnNCeU5hbWUoc2VhcmNoQmFyLnRleHQpO1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtc1NlcnZpY2UuZ2V0SXRlbUJ5TmFtZShzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBpZihzZWFyY2hCYXIudGV4dCA9PSBcIlwiIHx8IHNlYXJjaEJhci50ZXh0ID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zU2VydmljZS5nZXRJdGVtc0J5TmFtZShcIlwiKTtcbiAgICAgICAgXG4gICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuYXJtb3JzID0gdGhpcy5pdGVtc1NlcnZpY2UuZ2V0QXJtb3JzQnlOYW1lKHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zU2VydmljZS5nZXRJdGVtc0J5TmFtZShzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgLy8gdGhpcy5hcm1vcnMgPSB0aGlzLm1vbnNzZXJ2aWNlLmdldE1vbnN0ZXJzQnlOYW1lKHNlYXJjaEJhci50ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsSUQ7XG4gICAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBsaXN0dmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgICAgIFxuICAgICAgICB0aGlzLnNlbElEID0gbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpWzBdLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsSUQpO1xuICAgICAgICAvLyB0aGlzLnNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkVGl0bGVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW0gc2VsZWN0ZWQuXCIpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaXRlbXMvaXRlbScsdGhpcy5zZWxJRF0pO1xuICAgIH1cbn0iXX0=