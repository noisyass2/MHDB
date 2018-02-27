import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {knownFolders} from "tns-core-modules/file-system";

import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
import { ArmorsService } from "../../shared/armors/armors.service";

@Component({
    selector: "Armor",
    moduleId: module.id,
    providers: [ArmorsService],
    styleUrls: ["./armor.component.css"],
    templateUrl: "./armor.component.html"
})
export class ArmorComponent implements OnInit {
    
    public name;
    public armor;

    constructor(private pageRoute: PageRoute, private armorService:ArmorsService
    , private routerExtensions: RouterExtensions) { 
        this.pageRoute.activatedRoute
        .switchMap(activatedRoute => activatedRoute.params)
        .forEach((params) => { this.name = params["id"]; });
    }

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
        this.armor = this.armorService.getArmorByName(this.name);
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

    onItemSelected(args){
        var lv = args.object as RadListView;
        console.log("selected element:" + lv.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/items/item',lv.getSelectedItems()[0].name]);
        
    }

    public onSkillSelected(args){
        var listview = args.object as RadListView;
        this.routerExtensions.navigate(['/skills/skill',listview.getSelectedItems()[0].name]);
    }
}