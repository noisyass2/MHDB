"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var file_system_1 = require("tns-core-modules/file-system");
var shared_service_1 = require("../../shared/services/shared.service");
var SkillsService = /** @class */ (function () {
    function SkillsService(sharedService) {
        this.sharedService = sharedService;
        console.log("reading");
        var appFolder = file_system_1.knownFolders.currentApp();
        var skillsFile = appFolder.getFile("shared/resources/skills.json");
        var flatskillsFile = appFolder.getFile("shared/resources/flatarmors.json");
        // let weakFile = appFolder.getFile("shared/resources/monsweak.json");
        // console.log(armorsFile.readTextSync());
        this.skills = JSON.parse(skillsFile.readTextSync());
        // this.flatArmors = JSON.parse(flatArmorsFile.readTextSync());
        // console.log(this.armors.map(a => a.name).join(','));
        // this.weaknesses = JSON.parse(weakFile.readTextSync());
    }
    SkillsService.prototype.getSkills = function () {
        return this.skills;
    };
    SkillsService.prototype.getSkillsByName = function (name) {
        return this.skills.filter(function (p) { return p.name.toLowerCase().includes(name.toLowerCase()) || p.desc.toLowerCase().includes(name.toLowerCase()); });
    };
    SkillsService.prototype.getSkillByName = function (name) {
        return this.sharedService.findOne(this.skills, "name", name);
    };
    SkillsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [shared_service_1.SharedService])
    ], SkillsService);
    return SkillsService;
}());
exports.SkillsService = SkillsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJza2lsbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixxQ0FBbUM7QUFDbkMsNERBQTBEO0FBQzFELHVFQUFxRTtBQUtyRTtJQUtJLHVCQUFvQixhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksU0FBUyxHQUFHLDBCQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUMsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ25FLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUMzRSxzRUFBc0U7UUFDdEUsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNwRCwrREFBK0Q7UUFDL0QsdURBQXVEO1FBQ3ZELHlEQUF5RDtJQUM3RCxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3BKLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBNUJRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FNeUIsOEJBQWE7T0FMdEMsYUFBYSxDQTZCekI7SUFBRCxvQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29ic2VydmFibGUvdGhyb3dcIjtcbmltcG9ydCB7a25vd25Gb2xkZXJzfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgU2hhcmVkU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvc2hhcmVkLnNlcnZpY2VcIjtcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTa2lsbHNTZXJ2aWNlIHtcbiAgICBcbiAgICBcbiAgICBwdWJsaWMgc2tpbGxzO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzaGFyZWRTZXJ2aWNlOlNoYXJlZFNlcnZpY2Upe1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlYWRpbmdcIik7XG4gICAgICAgIGxldCBhcHBGb2xkZXIgPSBrbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xuICAgICAgICBsZXQgc2tpbGxzRmlsZSA9IGFwcEZvbGRlci5nZXRGaWxlKFwic2hhcmVkL3Jlc291cmNlcy9za2lsbHMuanNvblwiKTtcbiAgICAgICAgbGV0IGZsYXRza2lsbHNGaWxlID0gYXBwRm9sZGVyLmdldEZpbGUoXCJzaGFyZWQvcmVzb3VyY2VzL2ZsYXRhcm1vcnMuanNvblwiKTtcbiAgICAgICAgLy8gbGV0IHdlYWtGaWxlID0gYXBwRm9sZGVyLmdldEZpbGUoXCJzaGFyZWQvcmVzb3VyY2VzL21vbnN3ZWFrLmpzb25cIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFybW9yc0ZpbGUucmVhZFRleHRTeW5jKCkpO1xuICAgICAgICB0aGlzLnNraWxscyA9IEpTT04ucGFyc2Uoc2tpbGxzRmlsZS5yZWFkVGV4dFN5bmMoKSk7XG4gICAgICAgIC8vIHRoaXMuZmxhdEFybW9ycyA9IEpTT04ucGFyc2UoZmxhdEFybW9yc0ZpbGUucmVhZFRleHRTeW5jKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFybW9ycy5tYXAoYSA9PiBhLm5hbWUpLmpvaW4oJywnKSk7XG4gICAgICAgIC8vIHRoaXMud2Vha25lc3NlcyA9IEpTT04ucGFyc2Uod2Vha0ZpbGUucmVhZFRleHRTeW5jKCkpO1xuICAgIH1cblxuICAgIGdldFNraWxscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2tpbGxzO1xuICAgIH1cblxuICAgIGdldFNraWxsc0J5TmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNraWxscy5maWx0ZXIocCA9PiB7cmV0dXJuIHAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5hbWUudG9Mb3dlckNhc2UoKSkgfHwgcC5kZXNjLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmFtZS50b0xvd2VyQ2FzZSgpKX0pO1xuICAgIH1cblxuICAgIGdldFNraWxsQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hhcmVkU2VydmljZS5maW5kT25lKHRoaXMuc2tpbGxzLFwibmFtZVwiLG5hbWUpO1xuICAgIH1cbn0iXX0=