
import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { PageRoute  , RouterExtensions} from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {knownFolders} from "tns-core-modules/file-system";
// import { MonsterService } from "../../shared/monsters/monsters.service";

import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";

import { SearchBar } from "ui/search-bar";
import { WeaponsService } from "../shared/weapons/weapons.service";

@Component({
    selector: "Weapons",
    moduleId: module.id,
    providers: [WeaponsService],
    styleUrls: ["./weapons.component.css"],
    templateUrl: "./weapons.component.html"
})
export class WeaponsComponent implements OnInit {
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

   public weapontypes;
   constructor(private weaponService: WeaponsService, private routerExtensions: RouterExtensions ){
       this.weapontypes = weaponService.getWeaponTypes();
   }

   public onWeaponSelected(args)
   {
       var listview = args.object as RadListView;
        console.log(listview.getSelectedItems()[0].code);
        this.routerExtensions.navigate(["/weapons/wtype",listview.getSelectedItems()[0].code]);
   }
}
