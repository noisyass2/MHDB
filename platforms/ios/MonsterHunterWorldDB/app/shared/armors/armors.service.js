"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var file_system_1 = require("tns-core-modules/file-system");
var shared_service_1 = require("../../shared/services/shared.service");
var ArmorsService = /** @class */ (function () {
    function ArmorsService(sharedService) {
        this.sharedService = sharedService;
        console.log("reading");
        var appFolder = file_system_1.knownFolders.currentApp();
        var armorsFile = appFolder.getFile("shared/resources/armors.json");
        var flatArmorsFile = appFolder.getFile("shared/resources/flatarmors.json");
        // let weakFile = appFolder.getFile("shared/resources/monsweak.json");
        // console.log(armorsFile.readTextSync());
        this.armors = JSON.parse(armorsFile.readTextSync());
        this.flatArmors = JSON.parse(flatArmorsFile.readTextSync());
        // console.log(this.armors.map(a => a.name).join(','));
        // this.weaknesses = JSON.parse(weakFile.readTextSync());
    }
    ArmorsService.prototype.getArmorsByName = function (armorName, rank) {
        if (armorName != undefined)
            return this.flatArmors.filter(function (arm) { return arm.rank == rank && arm.name.toLowerCase().includes(armorName.toLowerCase()); });
        else
            return this.flatArmors;
    };
    ArmorsService.prototype.getArmors = function () {
        // console.log(this.armors.map(a => a.name).join(','));
        return this.flatArmors;
    };
    ArmorsService.prototype.getArmorsByRank = function (rank) {
        if (rank == "Low") {
            var arms = this.flatArmors.filter(function (arm) { return arm.rank == "Low"; });
            // console.log(arms);
            return arms;
        }
        else {
            //high
            var arms = this.flatArmors.filter(function (arm) { return arm.rank == "High"; });
            // console.log(arms);
            return arms;
        }
    };
    ArmorsService.prototype.getArmorByName = function (name) {
        var armor = this.sharedService.findOne(this.armors, "name", name);
        console.log(JSON.stringify(armor));
        return armor;
    };
    ArmorsService.prototype.getByItemName = function (name) {
        var fArmors = this.armors.map(function (m) { return { name: m.name, items: m.items.map(function (i) { return i.name; }).join(',') }; });
        console.log(JSON.stringify(fArmors));
        // var mons = this.monsters.filter((m) => { return m.items.map((i) => { i.item }).join(',').includes(itemName); });
        var sarms = fArmors.filter(function (m) { return m.items.split(',').includes(name); });
        console.log(JSON.stringify(sarms));
        return sarms;
    };
    ArmorsService.prototype.getBySkillName = function (name) {
        var _this = this;
        var fArmors = this.armors.map(function (m) { return { name: m.name, skills: m.skills.map(function (i) { return i.name; }).join(',') }; });
        var sarms = fArmors.filter(function (m) { return m.skills.split(',').includes(name); });
        var nArms = [];
        sarms.forEach(function (arm) {
            var armor = _this.sharedService.findOne(_this.armors, "name", arm.name);
            var nArm = { name: armor.name, skill: name, val: 1 };
            armor.skills.forEach(function (skl) {
                if (skl.name == name) {
                    nArm.val = skl.val;
                }
            });
            nArms.push(nArm);
        });
        console.log(JSON.stringify(nArms));
        return nArms;
    };
    ArmorsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [shared_service_1.SharedService])
    ], ArmorsService);
    return ArmorsService;
}());
exports.ArmorsService = ArmorsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJtb3JzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcm1vcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixxQ0FBbUM7QUFDbkMsNERBQTBEO0FBQzFELHVFQUFxRTtBQUtyRTtJQU9JLHVCQUFvQixhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksU0FBUyxHQUFHLDBCQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUMsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ25FLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUMzRSxzRUFBc0U7UUFDdEUsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDNUQsdURBQXVEO1FBQ3ZELHlEQUF5RDtJQUM3RCxDQUFDO0lBRUQsdUNBQWUsR0FBZixVQUFnQixTQUFTLEVBQUMsSUFBSTtRQUMxQixFQUFFLENBQUEsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUE1RSxDQUE0RSxDQUFDLENBQUM7UUFDekgsSUFBSTtZQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksdURBQXVEO1FBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDZCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFqQixDQUFpQixDQUFDLENBQUM7WUFDOUQscUJBQXFCO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0gsTUFBTTtZQUNOLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUMvRCxxQkFBcUI7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQUdELHNDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBTyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDckMsbUhBQW1IO1FBQ25ILElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUFuQixpQkFpQkM7UUFoQkcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQU8sTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9HLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztRQUNwRSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUNiLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRSxJQUFJLElBQUksR0FBRyxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDO1lBQ2xELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDcEIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUE7Z0JBQ3RCLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBRWpCLENBQUM7SUE5RVEsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQVF5Qiw4QkFBYTtPQVB0QyxhQUFhLENBK0V6QjtJQUFELG9CQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiO1xuaW1wb3J0IHtrbm93bkZvbGRlcnN9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBTaGFyZWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zaGFyZWQuc2VydmljZVwiO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFybW9yc1NlcnZpY2Uge1xuICAgIFxuICAgIFxuICAgIFxuICAgIHB1YmxpYyBhcm1vcnM7XG4gICAgcHVibGljIGZsYXRBcm1vcnM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYXJlZFNlcnZpY2U6U2hhcmVkU2VydmljZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVhZGluZ1wiKTtcbiAgICAgICAgbGV0IGFwcEZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgICAgIGxldCBhcm1vcnNGaWxlID0gYXBwRm9sZGVyLmdldEZpbGUoXCJzaGFyZWQvcmVzb3VyY2VzL2FybW9ycy5qc29uXCIpO1xuICAgICAgICBsZXQgZmxhdEFybW9yc0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInNoYXJlZC9yZXNvdXJjZXMvZmxhdGFybW9ycy5qc29uXCIpO1xuICAgICAgICAvLyBsZXQgd2Vha0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInNoYXJlZC9yZXNvdXJjZXMvbW9uc3dlYWsuanNvblwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJtb3JzRmlsZS5yZWFkVGV4dFN5bmMoKSk7XG4gICAgICAgIHRoaXMuYXJtb3JzID0gSlNPTi5wYXJzZShhcm1vcnNGaWxlLnJlYWRUZXh0U3luYygpKTtcbiAgICAgICAgdGhpcy5mbGF0QXJtb3JzID0gSlNPTi5wYXJzZShmbGF0QXJtb3JzRmlsZS5yZWFkVGV4dFN5bmMoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXJtb3JzLm1hcChhID0+IGEubmFtZSkuam9pbignLCcpKTtcbiAgICAgICAgLy8gdGhpcy53ZWFrbmVzc2VzID0gSlNPTi5wYXJzZSh3ZWFrRmlsZS5yZWFkVGV4dFN5bmMoKSk7XG4gICAgfVxuXG4gICAgZ2V0QXJtb3JzQnlOYW1lKGFybW9yTmFtZSxyYW5rKSB7XG4gICAgICAgIGlmKGFybW9yTmFtZSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mbGF0QXJtb3JzLmZpbHRlcigoYXJtKSA9PiBhcm0ucmFuayA9PSByYW5rICYmIGFybS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYXJtb3JOYW1lLnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmxhdEFybW9ycztcbiAgICB9XG5cbiAgICBnZXRBcm1vcnMoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXJtb3JzLm1hcChhID0+IGEubmFtZSkuam9pbignLCcpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhdEFybW9ycztcbiAgICB9XG5cbiAgICBnZXRBcm1vcnNCeVJhbmsocmFuayl7XG4gICAgICAgIGlmKHJhbmsgPT0gXCJMb3dcIil7XG4gICAgICAgICAgICB2YXIgYXJtcyA9IHRoaXMuZmxhdEFybW9ycy5maWx0ZXIoKGFybSkgPT4gYXJtLnJhbmsgPT0gXCJMb3dcIik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhcm1zKTtcbiAgICAgICAgICAgIHJldHVybiBhcm1zO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAvL2hpZ2hcbiAgICAgICAgICAgIHZhciBhcm1zID0gdGhpcy5mbGF0QXJtb3JzLmZpbHRlcigoYXJtKSA9PiBhcm0ucmFuayA9PSBcIkhpZ2hcIik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhcm1zKTtcbiAgICAgICAgICAgIHJldHVybiBhcm1zO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBnZXRBcm1vckJ5TmFtZShuYW1lKSB7XG4gICAgICAgIHZhciBhcm1vciA9IHRoaXMuc2hhcmVkU2VydmljZS5maW5kT25lKHRoaXMuYXJtb3JzLFwibmFtZVwiLG5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShhcm1vcikpO1xuICAgICAgICByZXR1cm4gYXJtb3I7XG4gICAgfVxuXG4gICAgZ2V0QnlJdGVtTmFtZShuYW1lKSB7XG4gICAgICAgIHZhciBmQXJtb3JzID0gdGhpcy5hcm1vcnMubWFwKChtKSA9PiB7IHJldHVybiB7IG5hbWU6IG0ubmFtZSwgaXRlbXM6IG0uaXRlbXMubWFwKGkgPT4gaS5uYW1lKS5qb2luKCcsJykgfSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZkFybW9ycykpO1xuICAgICAgICAvLyB2YXIgbW9ucyA9IHRoaXMubW9uc3RlcnMuZmlsdGVyKChtKSA9PiB7IHJldHVybiBtLml0ZW1zLm1hcCgoaSkgPT4geyBpLml0ZW0gfSkuam9pbignLCcpLmluY2x1ZGVzKGl0ZW1OYW1lKTsgfSk7XG4gICAgICAgIHZhciBzYXJtcyA9IGZBcm1vcnMuZmlsdGVyKG0gPT4gbS5pdGVtcy5zcGxpdCgnLCcpLmluY2x1ZGVzKG5hbWUpKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc2FybXMpKTtcbiAgICAgICAgcmV0dXJuIHNhcm1zO1xuICAgIH1cblxuICAgIGdldEJ5U2tpbGxOYW1lKG5hbWUpIHtcbiAgICAgICAgdmFyIGZBcm1vcnMgPSB0aGlzLmFybW9ycy5tYXAoKG0pID0+IHsgcmV0dXJuIHsgbmFtZTogbS5uYW1lLCBza2lsbHM6IG0uc2tpbGxzLm1hcChpID0+IGkubmFtZSkuam9pbignLCcpIH0gfSk7XG4gICAgICAgIHZhciBzYXJtcyA9IGZBcm1vcnMuZmlsdGVyKG0gPT4gbS5za2lsbHMuc3BsaXQoJywnKS5pbmNsdWRlcyhuYW1lKSk7XG4gICAgICAgIHZhciBuQXJtcyA9IFtdO1xuICAgICAgICBzYXJtcy5mb3JFYWNoKGFybSA9PiB7XG4gICAgICAgICAgICB2YXIgYXJtb3IgPSB0aGlzLnNoYXJlZFNlcnZpY2UuZmluZE9uZSh0aGlzLmFybW9ycyxcIm5hbWVcIixhcm0ubmFtZSk7XG4gICAgICAgICAgICB2YXIgbkFybSA9IHtuYW1lOiBhcm1vci5uYW1lLHNraWxsOiBuYW1lLCB2YWw6IDF9O1xuICAgICAgICAgICAgYXJtb3Iuc2tpbGxzLmZvckVhY2goc2tsID0+IHtcbiAgICAgICAgICAgICAgICBpZihza2wubmFtZSA9PSBuYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgbkFybS52YWwgPSBza2wudmFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuQXJtcy5wdXNoKG5Bcm0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobkFybXMpKTtcbiAgICAgICAgcmV0dXJuIG5Bcm1zO1xuICAgICAgICBcbiAgICB9XG59Il19