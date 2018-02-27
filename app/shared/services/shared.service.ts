import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import {knownFolders} from "tns-core-modules/file-system";

@Injectable()
export class SharedService {
    findOne(list,prop,search){
        var matches = list.filter(el => el[prop].trim().toLowerCase() === search.trim().toLowerCase() );
        if(matches.length === 1) return matches[0];
        return null;
    }

    groupByArray(list,key){
        return list.reduce(function (rv, x) { let v = key instanceof Function ? key(x) : x[key]; let el = rv.find((r) => r && r.key === v); if (el) { el.values.push(x); } else { rv.push({ key: v, values: [x] }); } return rv; }, []); 
    }

}