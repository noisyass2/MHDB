"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var file_system_1 = require("tns-core-modules/file-system");
var shared_service_1 = require("../../shared/services/shared.service");
var MonsterService = /** @class */ (function () {
    function MonsterService(sharedService) {
        this.sharedService = sharedService;
        this.monsters = [];
        this.weaknesses = [];
        console.log("reading");
        var appFolder = file_system_1.knownFolders.currentApp();
        var monsFile = appFolder.getFile("shared/resources/monsters.json");
        var weakFile = appFolder.getFile("shared/resources/monsweak.json");
        // console.log(monsFile.readTextSync());
        this.monsters = JSON.parse(monsFile.readTextSync());
        this.weaknesses = JSON.parse(weakFile.readTextSync());
    }
    MonsterService.prototype.getMonsterByID = function (id) {
        var mon = this.monsters[id];
        mon.weaknesses = this.getMonsterWeakness2(id);
        mon.weakness = this.getMonsterWeakness(id);
        mon.loots = this.getLoots(mon.items);
        return mon;
    };
    MonsterService.prototype.getMonsterByName = function (name) {
        var mon = this.sharedService.findOne(this.monsters, "name", name);
        mon.weakness = this.getMonsterWeakness(mon.name);
        mon.weaknesses = this.getMonsterWeakness2(mon.name);
        mon.loots = this.getLoots(mon.items);
        ;
        // console.log(JSON.stringify(mon));
        return mon;
    };
    MonsterService.prototype.getMonsters = function () {
        return this.monsters;
    };
    MonsterService.prototype.getMonstersByName = function (name) {
        if (name != undefined)
            return this.monsters.filter(function (mon) { return mon.name.toLowerCase().includes(name.toLowerCase()); });
        else
            return this.monsters;
    };
    MonsterService.prototype.getLoots = function (items) {
        var _this = this;
        var mhwItems = [];
        var ranks = this.sharedService.groupByArray(items, "rank");
        ranks.forEach(function (rank) {
            // group by item
            var rkey = rank.key;
            var defID = rkey == "Low Rank" ? 28 : 29;
            var itms = _this.sharedService.groupByArray(rank.values, "item");
            itms.forEach(function (item) {
                //var oneItem = mhwItems.findOne("name",item.key);
                // console.log(oneItem);
                mhwItems.push({
                    name: item.key,
                    val: item.values.map(function (i) { return i.cat; }).join(',')
                });
            });
        });
        return mhwItems;
    };
    MonsterService.prototype.getMonsterWeakness = function (name) {
        var wkns = this.sharedService.findOne(this.weaknesses, "Monster", name);
        // console.log(wkns);
        var weaknesses = [];
        for (var key in wkns) {
            if (wkns.hasOwnProperty(key)) {
                var element = wkns[key];
                if (key != "Monster")
                    weaknesses.push({
                        name: key,
                        val: element
                    });
            }
        }
        return weaknesses;
    };
    MonsterService.prototype.getMonsterWeakness2 = function (name) {
        var wkns = this.sharedService.findOne(this.weaknesses, "Monster", name);
        // console.log(wkns);
        // console.log(wkns.Fire);
        return wkns;
    };
    MonsterService.prototype.getByItemName = function (itemName) {
        var flatMons = this.monsters.map(function (m) { return { name: m.name, items: m.items.map(function (i) { return i.item; }).join(',') }; });
        // var mons = this.monsters.filter((m) => { return m.items.map((i) => { i.item }).join(',').includes(itemName); });
        var mons = flatMons.filter(function (m) { return m.items.includes(itemName); });
        // console.log(JSON.stringify(mons));
        return mons;
    };
    MonsterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [shared_service_1.SharedService])
    ], MonsterService);
    return MonsterService;
}());
exports.MonsterService = MonsterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uc3RlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbnN0ZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IscUNBQW1DO0FBQ25DLDREQUEwRDtBQUMxRCx1RUFBcUU7QUFLckU7SUFLSSx3QkFBb0IsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFIL0MsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFHWixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksU0FBUyxHQUFHLDBCQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUMsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ25FLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNuRSx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLEVBQVM7UUFDcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU1QixHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMz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QTBCLENBQUMsQ0FBQztRQUM1RCxxQ0FBcUM7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBdEdRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FNeUIsOEJBQWE7T0FMdEMsY0FBYyxDQXVHMUI7SUFBRCxxQkFBQztDQUFBLEFBdkdELElBdUdDO0FBdkdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29ic2VydmFibGUvdGhyb3dcIjtcbmltcG9ydCB7a25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvc2hhcmVkLnNlcnZpY2VcIjtcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb25zdGVyU2VydmljZSB7XG4gICAgXG4gICAgbW9uc3RlcnMgPSBbXTtcbiAgICB3ZWFrbmVzc2VzID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYXJlZFNlcnZpY2U6U2hhcmVkU2VydmljZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVhZGluZ1wiKTtcbiAgICAgICAgbGV0IGFwcEZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgICAgIGxldCBtb25zRmlsZSA9IGFwcEZvbGRlci5nZXRGaWxlKFwic2hhcmVkL3Jlc291cmNlcy9tb25zdGVycy5qc29uXCIpO1xuICAgICAgICBsZXQgd2Vha0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInNoYXJlZC9yZXNvdXJjZXMvbW9uc3dlYWsuanNvblwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobW9uc0ZpbGUucmVhZFRleHRTeW5jKCkpO1xuICAgICAgICB0aGlzLm1vbnN0ZXJzID0gSlNPTi5wYXJzZShtb25zRmlsZS5yZWFkVGV4dFN5bmMoKSk7XG4gICAgICAgIHRoaXMud2Vha25lc3NlcyA9IEpTT04ucGFyc2Uod2Vha0ZpbGUucmVhZFRleHRTeW5jKCkpO1xuICAgIH1cblxuICAgIGdldE1vbnN0ZXJCeUlEKGlkOm51bWJlcikge1xuICAgICAgICBsZXQgbW9uID0gdGhpcy5tb25zdGVyc1tpZF07XG5cbiAgICAgICAgbW9uLndlYWtuZXNzZXMgPSB0aGlzLmdldE1vbnN0ZXJXZWFrbmVzczIoaWQpO1xuICAgICAgICBtb24ud2Vha25lc3MgPSB0aGlzLmdldE1vbnN0ZXJXZWFrbmVzcyhpZCk7XG4gICAgICAgIG1vbi5sb290cyA9IHRoaXMuZ2V0TG9vdHMobW9uLml0ZW1zKTtcbiAgICAgICAgcmV0dXJuIG1vbjtcbiAgICB9XG5cbiAgICBnZXRNb25zdGVyQnlOYW1lKG5hbWU6U3RyaW5nKXtcblxuICAgICAgICBsZXQgbW9uID0gdGhpcy5zaGFyZWRTZXJ2aWNlLmZpbmRPbmUodGhpcy5tb25zdGVycyxcIm5hbWVcIixuYW1lKTtcbiAgICAgICAgbW9uLndlYWtuZXNzID0gdGhpcy5nZXRNb25zdGVyV2Vha25lc3MobW9uLm5hbWUpO1xuICAgICAgICBtb24ud2Vha25lc3NlcyA9IHRoaXMuZ2V0TW9uc3RlcldlYWtuZXNzMihtb24ubmFtZSk7XG4gICAgICAgIG1vbi5sb290cyA9IHRoaXMuZ2V0TG9vdHMobW9uLml0ZW1zKTs7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1vbikpO1xuICAgICAgICByZXR1cm4gbW9uO1xuICAgIH1cblxuXG4gICAgZ2V0TW9uc3RlcnMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9uc3RlcnM7XG4gICAgfVxuXG4gICAgZ2V0TW9uc3RlcnNCeU5hbWUobmFtZTpTdHJpbmcpe1xuICAgICAgICBpZihuYW1lICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbnN0ZXJzLmZpbHRlcigobW9uKSA9PiBtb24ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5hbWUudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb25zdGVycztcbiAgICB9XG5cbiAgICBnZXRMb290cyhpdGVtcyl7XG4gICAgICAgIHZhciBtaHdJdGVtcyA9IFtdO1xuICAgICAgICB2YXIgcmFua3MgPSB0aGlzLnNoYXJlZFNlcnZpY2UuZ3JvdXBCeUFycmF5KGl0ZW1zLFwicmFua1wiKTtcbiAgICAgICAgcmFua3MuZm9yRWFjaChyYW5rID0+IHtcbiAgICAgICAgICAgIC8vIGdyb3VwIGJ5IGl0ZW1cbiAgICAgICAgICAgIHZhciBya2V5ID0gcmFuay5rZXk7XG4gICAgICAgICAgICB2YXIgZGVmSUQgPSBya2V5ID09IFwiTG93IFJhbmtcIiA/IDI4IDogMjk7XG5cbiAgICAgICAgICAgIHZhciBpdG1zID0gdGhpcy5zaGFyZWRTZXJ2aWNlLmdyb3VwQnlBcnJheShyYW5rLnZhbHVlcyxcIml0ZW1cIik7XG4gICAgICAgICAgICBpdG1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgLy92YXIgb25lSXRlbSA9IG1od0l0ZW1zLmZpbmRPbmUoXCJuYW1lXCIsaXRlbS5rZXkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9uZUl0ZW0pO1xuICAgICAgICAgICAgICAgIG1od0l0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogaXRlbS5rZXksXG4gICAgICAgICAgICAgICAgICAgIHZhbDogaXRlbS52YWx1ZXMubWFwKChpKSA9PiBpLmNhdCkuam9pbignLCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1od0l0ZW1zO1xuXG4gICAgfVxuXG4gICAgZ2V0TW9uc3RlcldlYWtuZXNzKG5hbWUpe1xuICAgICAgICBcbiAgICAgICAgbGV0IHdrbnMgPSB0aGlzLnNoYXJlZFNlcnZpY2UuZmluZE9uZSh0aGlzLndlYWtuZXNzZXMsXCJNb25zdGVyXCIsbmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdrbnMpO1xuICAgICAgICBsZXQgd2Vha25lc3NlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB3a25zKSB7XG4gICAgICAgICAgICBpZiAod2tucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHdrbnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZihrZXkgIT1cIk1vbnN0ZXJcIilcbiAgICAgICAgICAgICAgICB3ZWFrbmVzc2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgIHZhbDogZWxlbWVudFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdlYWtuZXNzZXM7XG4gICAgfVxuXG4gICAgZ2V0TW9uc3RlcldlYWtuZXNzMihuYW1lKXtcbiAgICAgICAgXG4gICAgICAgIGxldCB3a25zID0gdGhpcy5zaGFyZWRTZXJ2aWNlLmZpbmRPbmUodGhpcy53ZWFrbmVzc2VzLFwiTW9uc3RlclwiLG5hbWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh3a25zKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2tucy5GaXJlKTtcbiAgICAgICAgcmV0dXJuIHdrbnM7XG4gICAgfVxuXG4gICAgZ2V0QnlJdGVtTmFtZShpdGVtTmFtZSkge1xuICAgICAgICB2YXIgZmxhdE1vbnMgPSB0aGlzLm1vbnN0ZXJzLm1hcCgobSkgPT4geyByZXR1cm4geyBuYW1lOiBtLm5hbWUsIGl0ZW1zOiBtLml0ZW1zLm1hcChpID0+IGkuaXRlbSkuam9pbignLCcpIH0gfSk7XG4gICAgICAgIC8vIHZhciBtb25zID0gdGhpcy5tb25zdGVycy5maWx0ZXIoKG0pID0+IHsgcmV0dXJuIG0uaXRlbXMubWFwKChpKSA9PiB7IGkuaXRlbSB9KS5qb2luKCcsJykuaW5jbHVkZXMoaXRlbU5hbWUpOyB9KTtcbiAgICAgICAgdmFyIG1vbnMgPSBmbGF0TW9ucy5maWx0ZXIobSA9PiBtLml0ZW1zLmluY2x1ZGVzKGl0ZW1OYW1lKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1vbnMpKTtcbiAgICAgICAgcmV0dXJuIG1vbnM7XG4gICAgfVxufSJdfQ==