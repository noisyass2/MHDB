import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { PageRoute  , RouterExtensions} from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {knownFolders} from "tns-core-modules/file-system";
// import { MonsterService } from "../../shared/monsters/monsters.service";

import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";

import { SearchBar } from "ui/search-bar";
import { ItemsService } from "../shared/items/items.service";
@Component({
    selector: "Items",
    moduleId: module.id,
    providers: [ItemsService],
    styleUrls: ["./items.component.css"],
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

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
        // this.armors = this.itemsService.getArmors();
       
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

    constructor(private itemsService: ItemsService, private routerExtensions: RouterExtensions) { 
        this.items = this.itemsService.getItems();
    }

    public items;

    public searchPhrase: string;

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        // this.armors = this.itemsService.getArmorsByName(searchBar.text);
        this.items = this.itemsService.getItemByName(searchBar.text);
        
        // alert("You are searching for " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        if(searchBar.text == "" || searchBar.text == undefined){
            console.log("searching " + searchBar.text);
            this.items = this.itemsService.getItemsByName("");
        
        }else{

            console.log("searching " + searchBar.text);
            // this.armors = this.itemsService.getArmorsByName(searchBar.text);
            this.items = this.itemsService.getItemsByName(searchBar.text);
        
        }
        // console.log("SearchBar text changed! New value: " + searchBar.text);
        // this.armors = this.monsservice.getMonstersByName(searchBar.text);
    }

    public selID;
    public onItemSelected(args: ListViewEventData) {
        var listview = args.object as RadListView;
       
        this.selID = listview.getSelectedItems()[0].name;
        console.log(this.selID);
        // this.selectedItem = selectedTitles;
        // console.log("Item selected.");
        this.routerExtensions.navigate(['/items/item',this.selID]);
    }
}