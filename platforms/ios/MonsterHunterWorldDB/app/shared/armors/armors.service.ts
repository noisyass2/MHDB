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
export class ArmorsService {
    
    
    
    public armors;
    public flatArmors;

    constructor(private sharedService:SharedService){
        console.log("reading");
        let appFolder = knownFolders.currentApp();
        let armorsFile = appFolder.getFile("shared/resources/armors.json");
        let flatArmorsFile = appFolder.getFile("shared/resources/flatarmors.json");
        // let weakFile = appFolder.getFile("shared/resources/monsweak.json");
        // console.log(armorsFile.readTextSync());
        this.armors = JSON.parse(armorsFile.readTextSync());
        this.flatArmors = JSON.parse(flatArmorsFile.readTextSync());
        // console.log(this.armors.map(a => a.name).join(','));
        // this.weaknesses = JSON.parse(weakFile.readTextSync());
    }

    getArmorsByName(armorName,rank) {
        if(armorName != undefined)
            return this.flatArmors.filter((arm) => arm.rank == rank && arm.name.toLowerCase().includes(armorName.toLowerCase()));
        else
            return this.flatArmors;
    }

    getArmors() {
        // console.log(this.armors.map(a => a.name).join(','));
        return this.flatArmors;
    }

    getArmorsByRank(rank){
        if(rank == "Low"){
            var arms = this.flatArmors.filter((arm) => arm.rank == "Low");
            // console.log(arms);
            return arms;
        }else {
            //high
            var arms = this.flatArmors.filter((arm) => arm.rank == "High");
            // console.log(arms);
            return arms;
        }
    }


    getArmorByName(name) {
        var armor = this.sharedService.findOne(this.armors,"name",name);
        console.log(JSON.stringify(armor));
        return armor;
    }

    getByItemName(name) {
        var fArmors = this.armors.map((m) => { return { name: m.name, items: m.items.map(i => i.name).join(',') } });
        console.log(JSON.stringify(fArmors));
        // var mons = this.monsters.filter((m) => { return m.items.map((i) => { i.item }).join(',').includes(itemName); });
        var sarms = fArmors.filter(m => m.items.split(',').includes(name));
        console.log(JSON.stringify(sarms));
        return sarms;
    }

    getBySkillName(name) {
        var fArmors = this.armors.map((m) => { return { name: m.name, skills: m.skills.map(i => i.name).join(',') } });
        var sarms = fArmors.filter(m => m.skills.split(',').includes(name));
        var nArms = [];
        sarms.forEach(arm => {
            var armor = this.sharedService.findOne(this.armors,"name",arm.name);
            var nArm = {name: armor.name,skill: name, val: 1};
            armor.skills.forEach(skl => {
                if(skl.name == name){
                    nArm.val = skl.val
                }
            });
            nArms.push(nArm);
        });
        console.log(JSON.stringify(nArms));
        return nArms;
        
    }
}