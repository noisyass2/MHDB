"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.Arr = Array;
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.number = parseInt(this.num);
        console.log("INIT RATING COMPONENT");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "num", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "col", void 0);
    RatingComponent = __decorate([
        core_1.Component({
            selector: "Rating",
            moduleId: module.id,
            // styleUrls: ["./rating.component.css"],
            templateUrl: "./rating.component.html"
        })
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFRcEU7SUFOQTtRQWlCSSxRQUFHLEdBQUMsS0FBSyxDQUFDO0lBR2QsQ0FBQztJQVJHLGtDQUFRLEdBQVI7UUFDRyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFQUTtRQUFSLFlBQUssRUFBRTs7Z0RBQWE7SUFDWjtRQUFSLFlBQUssRUFBRTs7Z0RBQVk7SUFDWDtRQUFSLFlBQUssRUFBRTs7Z0RBQVk7SUFKWCxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIseUNBQXlDO1lBQ3pDLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQztPQUNXLGVBQWUsQ0FjM0I7SUFBRCxzQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJSYXRpbmdcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIC8vIHN0eWxlVXJsczogW1wiLi9yYXRpbmcuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JhdGluZy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc3Rhcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG51bTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHJvdzpudW1iZXI7XG4gICAgQElucHV0KCkgY29sOm51bWJlcjtcbiAgICBudW1iZXI6IG51bWJlcjtcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICB0aGlzLm51bWJlciA9IHBhcnNlSW50KHRoaXMubnVtKTtcbiAgICAgICBjb25zb2xlLmxvZyhcIklOSVQgUkFUSU5HIENPTVBPTkVOVFwiKTtcbiAgICB9XG5cbiAgICBBcnI9QXJyYXk7XG5cbiAgICBcbn0iXX0=