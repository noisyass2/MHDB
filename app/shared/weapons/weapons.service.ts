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
export class WeaponsService {
    
    
    public weapontypes;
    public weapontypenames;
    public flatweapons;
    public weapons;

    constructor (private sharedService:SharedService) { 
        let appFolder = knownFolders.currentApp();
        let wetypefile = appFolder.getFile("shared/resources/weapontypes.json");
        let flatwetypefile = appFolder.getFile("shared/resources/flatweapons.json");
        let fullweaponfile = appFolder.getFile("shared/resources/weapons.json");
        // // let weakFile = appFolder.getFile("shared/resources/monsweak.json");
        // // console.log(armorsFile.readTextSync());
        this.weapontypes = JSON.parse(wetypefile.readTextSync());
        this.flatweapons = JSON.parse(flatwetypefile.readTextSync());
        this.weapons = JSON.parse(fullweaponfile.readTextSync());

    }

    public getWeaponTypes()
    {
        return this.weapontypes;
    }

    getByType(weptype) {
        return this.flatweapons.filter(p =>  p.weapontype == weptype);
    }

    getWeaponByName(name)  {
        var wpn =  this.sharedService.findOne(this.weapons,"name",name);
        wpn.upgradeMats = wpn.items.filter(p => p.cat == "Upgrading mats");
        wpn.craftingMats = wpn.items.filter(p => p.cat == "Crafting mats");
        wpn.craftable = wpn.craftingMats.length > 0;
        wpn.upgradable = wpn.upgradeMats.length > 0;
        return wpn;
    }

}