import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {knownFolders} from "tns-core-modules/file-system";
import { MonsterService } from "../../shared/monsters/monsters.service";

import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";

@Component({
    selector: "MonstersByType",
    moduleId: module.id,
    providers: [MonsterService],
    styleUrls: ["./monstersbytype.component.css"],
    templateUrl: "./monstersbytype.component.html"
})
export class MonstersByTypeComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        
        // console.log(mons);
        console.log(this.id);
        this.smons = this.monservice.getMonsterByName(this.id);
        console.log(JSON.stringify(this.smons));
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    id: String;
    smons: Object;
    tabSelectedIndex=0;
    constructor(private pageRoute: PageRoute,
        private monservice: MonsterService,
        private routerExtensions: RouterExtensions
    ) {
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute
        .switchMap(activatedRoute => activatedRoute.params)
        .forEach((params) => { this.id = params["id"]; });
    }

    itemTap(event) {

    }

    onElementSelected(args){
        var listview = args.object as RadListView;
        
        console.log("selected element:" + listview.getSelectedItems()[0].name);
        console.log()
    }
    
    onItemSelected(args){
        var lv = args.object as RadListView;
        console.log("selected element:" + lv.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/items/item',lv.getSelectedItems()[0].name]);
        
    }

    groupby(item){
        console.log("group");
        console.log(item.cat);
        return item.cat
    }
}
