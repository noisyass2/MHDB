import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { PageRoute  , RouterExtensions} from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import {knownFolders} from "tns-core-modules/file-system";
// import { MonsterService } from "../../shared/monsters/monsters.service";

import { ListViewEventData, RadListView } from "nativescript-pro-ui/listview";

import { SearchBar } from "ui/search-bar";
import { ArmorsService } from "../shared/armors/armors.service";

@Component({
    selector: "Armors",
    moduleId: module.id,
    providers: [ArmorsService],
    styleUrls: ["./armors.component.css"],
    templateUrl: "./armors.component.html"
})
export class ArmorsComponent implements OnInit {

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
        // this.armors = this.armorservice.getArmors();
       
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

    constructor(private armorservice: ArmorsService, private routerExtensions: RouterExtensions) { 
        this.loarmors = this.armorservice.getArmorsByRank("Low");
        this.hiarmors = this.armorservice.getArmorsByRank("High");
    }

    public armors;
    public loarmors;
    public hiarmors;

    public searchPhrase: string;

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        // this.armors = this.armorservice.getArmorsByName(searchBar.text);
        this.loarmors = this.armorservice.getArmorsByRank("Low");
        this.hiarmors = this.armorservice.getArmorsByRank("High");
        // alert("You are searching for " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        if(searchBar.text == ""){
            console.log("searching " + searchBar.text);
            this.loarmors = this.armorservice.getArmorsByName("","Low");
            this.hiarmors = this.armorservice.getArmorsByName("","High");
        }else{

            console.log("searching " + searchBar.text);
            // this.armors = this.armorservice.getArmorsByName(searchBar.text);
            this.loarmors = this.armorservice.getArmorsByName(searchBar.text,"Low");
            this.hiarmors = this.armorservice.getArmorsByName(searchBar.text,"High");
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
        this.routerExtensions.navigate(['/armors/armor',this.selID]);
    }

    
}
