"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppTimesDirective = /** @class */ (function () {
    function AppTimesDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(AppTimesDirective.prototype, "appTimes", {
        set: function (times) {
            for (var i = 0; i < times; i++) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], AppTimesDirective.prototype, "appTimes", null);
    AppTimesDirective = __decorate([
        core_1.Directive({
            selector: '[appTimes]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef])
    ], AppTimesDirective);
    return AppTimesDirective;
}());
exports.AppTimesDirective = AppTimesDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwdGltZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwdGltZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdGO0FBS2hGO0lBRUUsMkJBQ1UsV0FBNkIsRUFDN0IsYUFBK0I7UUFEL0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUFJLENBQUM7SUFFckMsc0JBQUksdUNBQVE7YUFBWixVQUFhLEtBQWE7WUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFHLENBQUMsR0FBRyxLQUFLLEVBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUQsQ0FBQztRQUNILENBQUM7OztPQUFBO0lBSlE7UUFBUixZQUFLLEVBQUU7OztxREFJUDtJQVZVLGlCQUFpQjtRQUg3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQzt5Q0FJdUIsa0JBQVc7WUFDVCx1QkFBZ0I7T0FKOUIsaUJBQWlCLENBWTdCO0lBQUQsd0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwVGltZXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBUaW1lc0RpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG4gIEBJbnB1dCgpIHNldCBhcHBUaW1lcyh0aW1lczogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgdGltZXMgOyBpKyspIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG5cbn0iXX0=