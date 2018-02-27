"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var monsters_service_1 = require("../../shared/monsters/monsters.service");
var MonstersByTypeComponent = /** @class */ (function () {
    function MonstersByTypeComponent(pageRoute, monservice, routerExtensions) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.monservice = monservice;
        this.routerExtensions = routerExtensions;
        this.tabSelectedIndex = 0;
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.id = params["id"]; });
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    MonstersByTypeComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        // console.log(mons);
        console.log(this.id);
        this.smons = this.monservice.getMonsterByName(this.id);
        console.log(JSON.stringify(this.smons));
    };
    Object.defineProperty(MonstersByTypeComponent.prototype, "sideDrawerTransition", {
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
    MonstersByTypeComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    MonstersByTypeComponent.prototype.itemTap = function (event) {
    };
    MonstersByTypeComponent.prototype.onElementSelected = function (args) {
        var listview = args.object;
        console.log("selected element:" + listview.getSelectedItems()[0].name);
        console.log();
    };
    MonstersByTypeComponent.prototype.onItemSelected = function (args) {
        var lv = args.object;
        console.log("selected element:" + lv.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/items/item', lv.getSelectedItems()[0].name]);
    };
    MonstersByTypeComponent.prototype.groupby = function (item) {
        console.log("group");
        console.log(item.cat);
        return item.cat;
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], MonstersByTypeComponent.prototype, "drawerComponent", void 0);
    MonstersByTypeComponent = __decorate([
        core_1.Component({
            selector: "MonstersByType",
            moduleId: module.id,
            providers: [monsters_service_1.MonsterService],
            styleUrls: ["./monstersbytype.component.css"],
            templateUrl: "./monstersbytype.component.html"
        }),
        __metadata("design:paramtypes", [router_1.PageRoute,
            monsters_service_1.MonsterService,
            router_1.RouterExtensions])
    ], MonstersByTypeComponent);
    return MonstersByTypeComponent;
}());
exports.MonstersByTypeComponent = MonstersByTypeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uc3RlcnNieXR5cGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9uc3RlcnNieXR5cGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFDaEYsc0RBQTBFO0FBQzFFLHVDQUFxQztBQUVyQywyRUFBd0U7QUFXeEU7SUFvQ0ksaUNBQW9CLFNBQW9CLEVBQzVCLFVBQTBCLEVBQzFCLGdCQUFrQztRQUY5QyxpQkFRQztRQVJtQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQWdCO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIOUMscUJBQWdCLEdBQUMsQ0FBQyxDQUFDO1FBS2YsMERBQTBEO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUM1QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBTyxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFuQ0Q7O2tFQUU4RDtJQUM5RCwwQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztRQUUxRCxxQkFBcUI7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNCQUFJLHlEQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O2tFQUc4RDtJQUM5RCxtREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBZUQseUNBQU8sR0FBUCxVQUFRLEtBQUs7SUFFYixDQUFDO0lBRUQsbURBQWlCLEdBQWpCLFVBQWtCLElBQUk7UUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQXFCLENBQUM7UUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUVELGdEQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQXFCLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFbEYsQ0FBQztJQUVELHlDQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0lBL0RvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBa0IsZ0NBQXNCO29FQUFDO0lBTHBELHVCQUF1QjtRQVBuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsaUNBQWMsQ0FBQztZQUMzQixTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztZQUM3QyxXQUFXLEVBQUUsaUNBQWlDO1NBQ2pELENBQUM7eUNBcUNpQyxrQkFBUztZQUNoQixpQ0FBYztZQUNSLHlCQUFnQjtPQXRDckMsdUJBQXVCLENBcUVuQztJQUFELDhCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xuaW1wb3J0IHtrbm93bkZvbGRlcnN9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBNb25zdGVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9uc3RlcnMvbW9uc3RlcnMuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJNb25zdGVyc0J5VHlwZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgcHJvdmlkZXJzOiBbTW9uc3RlclNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogW1wiLi9tb25zdGVyc2J5dHlwZS5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbW9uc3RlcnNieXR5cGUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBNb25zdGVyc0J5VHlwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICogSXQgaXMgdXNlZCBpbiB0aGUgXCJvbkRyYXdlckJ1dHRvblRhcFwiIGZ1bmN0aW9uIGJlbG93IHRvIG1hbmlwdWxhdGUgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1vbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5zbW9ucyA9IHRoaXMubW9uc2VydmljZS5nZXRNb25zdGVyQnlOYW1lKHRoaXMuaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnNtb25zKSk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgaWQ6IFN0cmluZztcbiAgICBzbW9uczogT2JqZWN0O1xuICAgIHRhYlNlbGVjdGVkSW5kZXg9MDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIG1vbnNlcnZpY2U6IE1vbnN0ZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHtcbiAgICAgICAgLy8gdXNlIHN3aXRjaE1hcCB0byBnZXQgdGhlIGxhdGVzdCBhY3RpdmF0ZWRSb3V0ZSBpbnN0YW5jZVxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLmlkID0gcGFyYW1zW1wiaWRcIl07IH0pO1xuICAgIH1cblxuICAgIGl0ZW1UYXAoZXZlbnQpIHtcblxuICAgIH1cblxuICAgIG9uRWxlbWVudFNlbGVjdGVkKGFyZ3Mpe1xuICAgICAgICB2YXIgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgZWxlbWVudDpcIiArIGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKVswXS5uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coKVxuICAgIH1cbiAgICBcbiAgICBvbkl0ZW1TZWxlY3RlZChhcmdzKXtcbiAgICAgICAgdmFyIGx2ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgZWxlbWVudDpcIiArIGx2LmdldFNlbGVjdGVkSXRlbXMoKVswXS5uYW1lKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2l0ZW1zL2l0ZW0nLGx2LmdldFNlbGVjdGVkSXRlbXMoKVswXS5uYW1lXSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdyb3VwYnkoaXRlbSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ3JvdXBcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uY2F0KTtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY2F0XG4gICAgfVxufVxuIl19