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
export class ItemsService {
    
    public items;
    constructor(private sharedService: SharedService){ 
        let appFolder = knownFolders.currentApp();
        let itemsFile = appFolder.getFile("shared/resources/items.json");
        // let flatitemsFile = appFolder.getFile("shared/resources/flatarmors.json");
        // let weakFile = appFolder.getFile("shared/resources/monsweak.json");
        // console.log(armorsFile.readTextSync());
        this.items = JSON.parse(itemsFile.readTextSync());
    }

    getItems() {
        return this.items;
    }

    getItemByName(name) {
        var item =  this.sharedService.findOne(this.items,"name",name);
        return item;
    }

    getItemsByName(name) {
        var items = this.items.filter((i) => { return i.name.includes(name)});
        return items;
    }
}