"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var file_system_1 = require("tns-core-modules/file-system");
var shared_service_1 = require("../../shared/services/shared.service");
var ItemsService = /** @class */ (function () {
    function ItemsService(sharedService) {
        this.sharedService = sharedService;
        var appFolder = file_system_1.knownFolders.currentApp();
        var itemsFile = appFolder.getFile("shared/resources/items.json");
        // let flatitemsFile = appFolder.getFile("shared/resources/flatarmors.json");
        // let weakFile = appFolder.getFile("shared/resources/monsweak.json");
        // console.log(armorsFile.readTextSync());
        this.items = JSON.parse(itemsFile.readTextSync());
    }
    ItemsService.prototype.getItems = function () {
        return this.items;
    };
    ItemsService.prototype.getItemByName = function (name) {
        var item = this.sharedService.findOne(this.items, "name", name);
        return item;
    };
    ItemsService.prototype.getItemsByName = function (name) {
        var items = this.items.filter(function (i) { return i.name.includes(name); });
        return items;
    };
    ItemsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [shared_service_1.SharedService])
    ], ItemsService);
    return ItemsService;
}());
exports.ItemsService = ItemsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IscUNBQW1DO0FBQ25DLDREQUEwRDtBQUMxRCx1RUFBcUU7QUFJckU7SUFHSSxzQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMsSUFBSSxTQUFTLEdBQUcsMEJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDakUsNkVBQTZFO1FBQzdFLHNFQUFzRTtRQUN0RSwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUF4QlEsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUkwQiw4QkFBYTtPQUh2QyxZQUFZLENBeUJ4QjtJQUFELG1CQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiO1xuaW1wb3J0IHtrbm93bkZvbGRlcnN9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zaGFyZWQuc2VydmljZVwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtc1NlcnZpY2Uge1xuICAgIFxuICAgIHB1YmxpYyBpdGVtcztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2UpeyBcbiAgICAgICAgbGV0IGFwcEZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgICAgIGxldCBpdGVtc0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInNoYXJlZC9yZXNvdXJjZXMvaXRlbXMuanNvblwiKTtcbiAgICAgICAgLy8gbGV0IGZsYXRpdGVtc0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInNoYXJlZC9yZXNvdXJjZXMvZmxhdGFybW9ycy5qc29uXCIpO1xuICAgICAgICAvLyBsZXQgd2Vha0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInNoYXJlZC9yZXNvdXJjZXMvbW9uc3dlYWsuanNvblwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJtb3JzRmlsZS5yZWFkVGV4dFN5bmMoKSk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKGl0ZW1zRmlsZS5yZWFkVGV4dFN5bmMoKSk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW1CeU5hbWUobmFtZSkge1xuICAgICAgICB2YXIgaXRlbSA9ICB0aGlzLnNoYXJlZFNlcnZpY2UuZmluZE9uZSh0aGlzLml0ZW1zLFwibmFtZVwiLG5hbWUpO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBnZXRJdGVtc0J5TmFtZShuYW1lKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKChpKSA9PiB7IHJldHVybiBpLm5hbWUuaW5jbHVkZXMobmFtZSl9KTtcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbn0iXX0=