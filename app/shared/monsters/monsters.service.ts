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
export class MonsterService {
    
    monsters = [];
    weaknesses = [];

    constructor(private sharedService:SharedService){
        console.log("reading");
        let appFolder = knownFolders.currentApp();
        let monsFile = appFolder.getFile("shared/resources/monsters.json");
        let weakFile = appFolder.getFile("shared/resources/monsweak.json");
        // console.log(monsFile.readTextSync());
        this.monsters = JSON.parse(monsFile.readTextSync());
        this.weaknesses = JSON.parse(weakFile.readTextSync());
    }

    getMonsterByID(id:number) {
        let mon = this.monsters[id];

        mon.weaknesses = this.getMonsterWeakness2(id);
        mon.weakness = this.getMonsterWeakness(id);
        mon.loots = this.getLoots(mon.items);
        return mon;
    }

    getMonsterByName(name:String){

        let mon = this.sharedService.findOne(this.monsters,"name",name);
        mon.weakness = this.getMonsterWeakness(mon.name);
        mon.weaknesses = this.getMonsterWeakness2(mon.name);
        mon.loots = this.getLoots(mon.items);;
        // console.log(JSON.stringify(mon));
        return mon;
    }


    getMonsters(){
        return this.monsters;
    }

    getMonstersByName(name:String){
        if(name != undefined)
            return this.monsters.filter((mon) => mon.name.toLowerCase().includes(name.toLowerCase()));
        else
            return this.monsters;
    }

    getLoots(items){
        var mhwItems = [];
        var ranks = this.sharedService.groupByArray(items,"rank");
        ranks.forEach(rank => {
            // group by item
            var rkey = rank.key;
            var defID = rkey == "Low Rank" ? 28 : 29;

            var itms = this.sharedService.groupByArray(rank.values,"item");
            itms.forEach(item => {
                //var oneItem = mhwItems.findOne("name",item.key);
                // console.log(oneItem);
                mhwItems.push({
                    name : item.key,
                    val: item.values.map((i) => i.cat).join(',')
                });
                
            });
        });

        return mhwItems;

    }

    getMonsterWeakness(name){
        
        let wkns = this.sharedService.findOne(this.weaknesses,"Monster",name);
        // console.log(wkns);
        let weaknesses = [];
        for (const key in wkns) {
            if (wkns.hasOwnProperty(key)) {
                const element = wkns[key];
                if(key !="Monster")
                weaknesses.push({
                    name: key,
                    val: element
                })
            }
        }
        return weaknesses;
    }

    getMonsterWeakness2(name){
        
        let wkns = this.sharedService.findOne(this.weaknesses,"Monster",name);
        // console.log(wkns);
        // console.log(wkns.Fire);
        return wkns;
    }

    getByItemName(itemName) {
        var flatMons = this.monsters.map((m) => { return { name: m.name, items: m.items.map(i => i.item).join(',') } });
        // var mons = this.monsters.filter((m) => { return m.items.map((i) => { i.item }).join(',').includes(itemName); });
        var mons = flatMons.filter(m => m.items.includes(itemName));
        // console.log(JSON.stringify(mons));
        return mons;
    }
}