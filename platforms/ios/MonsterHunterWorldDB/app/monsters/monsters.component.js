"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var angular_2 = require("nativescript-pro-ui/listview/angular");
var monsters_service_1 = require("../shared/monsters/monsters.service");
var DataItem = /** @class */ (function () {
    function DataItem(n, s) {
        this.id = n;
        this.name = s;
    }
    return DataItem;
}());
var MonstersComponent = /** @class */ (function () {
    function MonstersComponent(monsservice, routerExtensions, pageRoute) {
        this.monsservice = monsservice;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.monsters = [];
        this.counter = 0;
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    MonstersComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        this.monsters = this.monsservice.getMonsters();
    };
    Object.defineProperty(MonstersComponent.prototype, "sideDrawerTransition", {
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
    MonstersComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    MonstersComponent.prototype.onItemTap = function (args) {
        console.log("------------------------ ItemTapped: " + args.index);
    };
    MonstersComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        // var selectedItems = listview.getSelectedItems();
        // var selectedTitles = "Selected items: ";
        // for (var i = 0; i < selectedItems.length; i++) {
        //     selectedTitles += selectedItems[i].name;
        //     this.selID = selectedItems[i].id;
        //     if (i < selectedItems.length - 1) {
        //         selectedTitles += ", ";
        //     }
        // }
        this.selID = listview.getSelectedItems()[0].name;
        console.log(this.selID);
        // this.selectedItem = selectedTitles;
        // console.log("Item selected.");
        this.routerExtensions.navigate(['/monsters/monstersbytype', this.selID]);
    };
    MonstersComponent.prototype.onItemDeselected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        if (selectedItems.length > 0) {
            var selectedTitles = "Selected items: ";
            for (var i = 0; i < selectedItems.length; i++) {
                selectedTitles += selectedItems[i].name;
                if (i < selectedItems.length - 1) {
                    selectedTitles += ", ";
                }
            }
            this.selectedItem = selectedTitles;
        }
        else {
            this.selectedItem = "No Selected items.";
        }
        console.log("Item deselected.");
    };
    MonstersComponent.prototype.toggleFilter = function () {
        this.monsters = this.monsservice.getMonstersByName("an");
    };
    MonstersComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        this.monsters = this.monsservice.getMonstersByName(searchBar.text);
        // alert("You are searching for " + searchBar.text);
    };
    MonstersComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        if (searchBar.text == "") {
            this.monsters = this.monsservice.getMonsterByName("");
        }
        else {
            this.monsters = this.monsservice.getMonstersByName(searchBar.text);
        }
        // console.log("SearchBar text changed! New value: " + searchBar.text);
        // this.monsters = this.monsservice.getMonstersByName(searchBar.text);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], MonstersComponent.prototype, "drawerComponent", void 0);
    __decorate([
        core_1.ViewChild("myListView"),
        __metadata("design:type", angular_2.RadListViewComponent)
    ], MonstersComponent.prototype, "myListViewComponent", void 0);
    MonstersComponent = __decorate([
        core_1.Component({
            selector: "Monsters",
            moduleId: module.id,
            templateUrl: "./monsters.component.html",
            providers: [monsters_service_1.MonsterService],
            styleUrls: ["./monsters.css"]
        }),
        __metadata("design:paramtypes", [monsters_service_1.MonsterService, router_1.RouterExtensions, router_1.PageRoute])
    ], MonstersComponent);
    return MonstersComponent;
}());
exports.MonstersComponent = MonstersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uc3RlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9uc3RlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFFaEYsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IscUNBQW1DO0FBQ25DLHNEQUEwRTtBQUUxRSx1Q0FBcUM7QUFJckMsZ0VBQTRFO0FBRzVFLHdFQUFxRTtBQUlyRTtJQUdJLGtCQUFZLENBQUMsRUFBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBU0Q7SUFvQ0ksMkJBQW9CLFdBQTBCLEVBQVUsZ0JBQWtDLEVBQVMsU0FBb0I7UUFBbkcsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNuSCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUdyQixDQUFDO0lBaENEOztrRUFFOEQ7SUFDOUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFFMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQkFBSSxtREFBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQ7OztrRUFHOEQ7SUFDOUQsNkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVB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Q0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsdUVBQXVFO1FBQ3ZFLHNFQUFzRTtJQUMxRSxDQUFDO0lBNUdvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCOzhEQUFDO0lBbUZwQztRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBc0IsOEJBQW9CO2tFQUFDO0lBeEYxRCxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBQyxDQUFDLGlDQUFjLENBQUM7WUFDMUIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDaEMsQ0FBQzt5Q0FxQ2tDLGlDQUFjLEVBQTRCLHlCQUFnQixFQUFvQixrQkFBUztPQXBDOUcsaUJBQWlCLENBbUg3QjtJQUFELHdCQUFDO0NBQUEsQUFuSEQsSUFtSEM7QUFuSFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiO1xuaW1wb3J0IHsgUGFnZVJvdXRlICwgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuXG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvbGlzdHZpZXdcIjtcbmltcG9ydCB7IE1vbnN0ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9tb25zdGVycy9tb25zdGVycy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5cbmNsYXNzIERhdGFJdGVtIHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nXG4gICAgY29uc3RydWN0b3IobixzKSB7IFxuICAgICAgICB0aGlzLmlkID0gbjtcbiAgICAgICAgdGhpcy5uYW1lPXM7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJNb25zdGVyc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tb25zdGVycy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczpbTW9uc3RlclNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogW1wiLi9tb25zdGVycy5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTW9uc3RlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcbiAgICBcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBzaWRlRHJhd2VyVHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIG9wZW4vY2xvc2UgYW5pbWF0aW9uIG9mIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuXG4gICAgICAgIHRoaXMubW9uc3RlcnMgPSB0aGlzLm1vbnNzZXJ2aWNlLmdldE1vbnN0ZXJzKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vbnN0ZXJzO1xuXG4gICAgcHVibGljIGNvdW50ZXI6IG51bWJlcjtcbiAgICBzZWxlY3RlZEl0ZW06IFN0cmluZztcbiAgICBzZWxJRDpTdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vbnNzZXJ2aWNlOk1vbnN0ZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkge1xuICAgICAgICB0aGlzLm1vbnN0ZXJzID0gW107XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbVRhcHBlZDogXCIgKyBhcmdzLmluZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtU2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgdmFyIGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgICAgIC8vIHZhciBzZWxlY3RlZEl0ZW1zID0gbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpO1xuICAgICAgICAvLyB2YXIgc2VsZWN0ZWRUaXRsZXMgPSBcIlNlbGVjdGVkIGl0ZW1zOiBcIjtcbiAgICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBzZWxlY3RlZFRpdGxlcyArPSBzZWxlY3RlZEl0ZW1zW2ldLm5hbWU7XG4gICAgICAgIC8vICAgICB0aGlzLnNlbElEID0gc2VsZWN0ZWRJdGVtc1tpXS5pZDtcbiAgICAgICAgLy8gICAgIGlmIChpIDwgc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIC8vICAgICAgICAgc2VsZWN0ZWRUaXRsZXMgKz0gXCIsIFwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuc2VsSUQgPSBsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKClbMF0ubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxJRCk7XG4gICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRUaXRsZXM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbSBzZWxlY3RlZC5cIik7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9tb25zdGVycy9tb25zdGVyc2J5dHlwZScsdGhpcy5zZWxJRF0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1EZXNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHZhciBsaXN0dmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgICAgICB2YXIgc2VsZWN0ZWRJdGVtcyA9IGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkVGl0bGVzID0gXCJTZWxlY3RlZCBpdGVtczogXCI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRpdGxlcyArPSBzZWxlY3RlZEl0ZW1zW2ldLm5hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRpdGxlcyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkVGl0bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBcIk5vIFNlbGVjdGVkIGl0ZW1zLlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIGRlc2VsZWN0ZWQuXCIpO1xuICAgIH1cblxuXG4gICAgQFZpZXdDaGlsZChcIm15TGlzdFZpZXdcIikgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBwdWJsaWMgdG9nZ2xlRmlsdGVyKCkge1xuICAgICAgICB0aGlzLm1vbnN0ZXJzID0gdGhpcy5tb25zc2VydmljZS5nZXRNb25zdGVyc0J5TmFtZShcImFuXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLm1vbnN0ZXJzID0gdGhpcy5tb25zc2VydmljZS5nZXRNb25zdGVyc0J5TmFtZShzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIC8vIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGlmKHNlYXJjaEJhci50ZXh0ID09IFwiXCIpe1xuICAgICAgICAgICAgdGhpcy5tb25zdGVycyA9IHRoaXMubW9uc3NlcnZpY2UuZ2V0TW9uc3RlckJ5TmFtZShcIlwiKTtcbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMubW9uc3RlcnMgPSB0aGlzLm1vbnNzZXJ2aWNlLmdldE1vbnN0ZXJzQnlOYW1lKHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIC8vIHRoaXMubW9uc3RlcnMgPSB0aGlzLm1vbnNzZXJ2aWNlLmdldE1vbnN0ZXJzQnlOYW1lKHNlYXJjaEJhci50ZXh0KTtcbiAgICB9XG5cbn1cbiJdfQ==