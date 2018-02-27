import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {knownFolders} from "tns-core-modules/file-system";

import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
import { ItemsService } from "../../shared/items/items.service";
import { MonsterService } from "../../shared/monsters/monsters.service";
import { ArmorsService } from "../../shared/armors/armors.service";


@Component({
    selector: "Item",
    moduleId: module.id,
    providers: [ItemsService, MonsterService, ArmorsService],
    styleUrls: ["./item.component.css"],
    templateUrl: "./item.component.html"
})
export class ItemComponent implements OnInit {
    
    public name;
    public item;

    constructor(private pageRoute: PageRoute, 
        private itemService:ItemsService, 
        private monsService : MonsterService,
        private armorService: ArmorsService,
        private routerExtensions: RouterExtensions
    ) { 
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
        this.item = this.itemService.getItemByName(this.name);
        this.item.monsters = this.monsService.getByItemName(this.name);
        this.item.armors = this.armorService.getByItemName(this.name);

        // console.log(JSON.stringify(this.item));
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
        
    }

    onArmorSelected(args){
        var lv = args.object as RadListView;
        console.log(lv.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/armors/armor',lv.getSelectedItems()[0].name]);
    }

    onMonsterSelected(args){
        var lv = args.object as RadListView;
        console.log(lv.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/monsters/monstersbytype',lv.getSelectedItems()[0].name]);
    }
}