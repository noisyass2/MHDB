import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import {knownFolders} from "tns-core-modules/file-system";
import { SharedService } from "../../shared/services/shared.service";



@Injectable()
export class SkillsService {
    
    
    public skills;

    constructor(private sharedService:SharedService){
        console.log("reading");
        let appFolder = knownFolders.currentApp();
        let skillsFile = appFolder.getFile("shared/resources/skills.json");
        let flatskillsFile = appFolder.getFile("shared/resources/flatarmors.json");
        // let weakFile = appFolder.getFile("shared/resources/monsweak.json");
        // console.log(armorsFile.readTextSync());
        this.skills = JSON.parse(skillsFile.readTextSync());
        // this.flatArmors = JSON.parse(flatArmorsFile.readTextSync());
        // console.log(this.armors.map(a => a.name).join(','));
        // this.weaknesses = JSON.parse(weakFile.readTextSync());
    }

    getSkills() {
        return this.skills;
    }

    getSkillsByName(name) {
        return this.skills.filter(p => {return p.name.toLowerCase().includes(name.toLowerCase()) || p.desc.toLowerCase().includes(name.toLowerCase())});
    }

    getSkillByName(name) {
        return this.sharedService.findOne(this.skills,"name",name);
    }
}