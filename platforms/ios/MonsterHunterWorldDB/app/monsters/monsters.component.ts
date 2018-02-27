import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import { PageRoute , RouterExtensions} from "nativescript-angular/router";
import { Router } from "@angular/router";
import "rxjs/add/operator/switchMap";

import { ObservableArray } from "tns-core-modules/data/observable-array";

import { RadListViewComponent } from "nativescript-pro-ui/listview/angular";

import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";
import { MonsterService } from "../shared/monsters/monsters.service";

import { SearchBar } from "ui/search-bar";

class DataItem {
    public id: number;
    public name: string
    constructor(n,s) { 
        this.id = n;
        this.name=s;
    }
}

@Component({
    selector: "Monsters",
    moduleId: module.id,
    templateUrl: "./monsters.component.html",
    providers:[MonsterService],
    styleUrls: ["./monsters.css"]
})
export class MonstersComponent implements OnInit {
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

        this.monsters = this.monsservice.getMonsters();
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

    public monsters;

    public counter: number;
    selectedItem: String;
    selID:String;

    constructor(private monsservice:MonsterService, private routerExtensions: RouterExtensions,private pageRoute: PageRoute) {
        this.monsters = [];
        this.counter = 0;
        
        
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }

    public onItemSelected(args: ListViewEventData) {
        var listview = args.object as RadListView;
        // var selectedItems = listview.getSelectedItems();
        // var selectedTitles = "Selected items: ";
        // for (var i = 0; i < selectedItems.length; i++) {
        //     selectedTitles += selectedItems[i].name;
        //     this.selID = selectedItems[i].id;
        //     if (i < selectedItems.length - 1) {
        //         selectedTitles += ", ";
                
        //     }
        // }
        this.selID = listview.getSelectedItems()[0].name;
        console.log(this.selID);
        // this.selectedItem = selectedTitles;
        // console.log("Item selected.");
        this.routerExtensions.navigate(['/monsters/monstersbytype',this.selID]);
    }

    public onItemDeselected(args: ListViewEventData) {
        var listview = args.object as RadListView;
        var selectedItems = listview.getSelectedItems();
        if (selectedItems.length > 0) {
            var selectedTitles = "Selected items: ";
            for (var i = 0; i < selectedItems.length; i++) {
                selectedTitles += selectedItems[i].name;

                if (i < selectedItems.length - 1) {
                    selectedTitles += ", ";
                }
            }

            this.selectedItem = selectedTitles;
        } else {
            this.selectedItem = "No Selected items.";
        }

        console.log("Item deselected.");
    }


    @ViewChild("myListView") myListViewComponent: RadListViewComponent;

    public toggleFilter() {
        this.monsters = this.monsservice.getMonstersByName("an");
    }

    public searchPhrase: string;

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        this.monsters = this.monsservice.getMonstersByName(searchBar.text);
        // alert("You are searching for " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        if(searchBar.text == ""){
            this.monsters = this.monsservice.getMonsterByName("");
        }else{

        
        this.monsters = this.monsservice.getMonstersByName(searchBar.text);
        }
        // console.log("SearchBar text changed! New value: " + searchBar.text);
        // this.monsters = this.monsservice.getMonstersByName(searchBar.text);
    }

}
