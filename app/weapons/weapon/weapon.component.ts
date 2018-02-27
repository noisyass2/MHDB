import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-pro-ui/sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-pro-ui/sidedrawer/angular';
import { WeaponsService } from '../../shared/weapons/weapons.service';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { RadListView } from 'nativescript-pro-ui/listview';


import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";

@Component({
    selector: 'Weapon',
    moduleId: module.id,
    providers:[WeaponsService], 
    templateUrl: './weapon.component.html'
})
export class WeaponComponent implements OnInit {
    tabView: TabView;
    weapon: any;
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the 'onDrawerButtonTap' function below to manipulate the drawer.
    *************************************************************/
    @ViewChild('drawer') drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.tabView = this.tabViewRef.nativeElement;
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

    public id;
    public itemss;

    @ViewChild("tabview") tabViewRef: ElementRef;
    constructor(private service: WeaponsService,private pageRoute: PageRoute,private routerExtensions: RouterExtensions) { 
        this.pageRoute.activatedRoute
        .switchMap(activatedRoute => activatedRoute.params)
        .forEach((params) => { this.id = params['id']; });

        console.log(this.id);

        this.weapon = this.service.getWeaponByName(this.id);

        this.groupFunc = (item) => {
            return item.cat;
        };

        this.itemss = new ObservableArray(this.weapon.items);
        // let textField: TextField = this.urlFieldRef.nativeElement;
        
        
    }

    goBack(){
        this.routerExtensions.backToPreviousPage();
    }

    public _groupFunc;

    get groupFunc(): (item:any) => any {
        return this._groupFunc;
    }
    set groupFunc(value: (item:any) => any){
        this._groupFunc = value;
    }

    public onItemSelected(args)
    {
        var listview = args.object as RadListView;
        console.log(listview.getSelectedItems()[0].item);
        this.routerExtensions.navigate(['/items/item/',listview.getSelectedItems()[0].item]);
    }

    public onWeaponSelected(args)
    {
        var listview = args.object as RadListView;
        console.log(listview.getSelectedItems()[0].name);
        // this.routerExtensions.navigate(['/weapons/weapon/',listview.getSelectedItems()[0].name]);

        this.weapon = this.service.getWeaponByName(listview.getSelectedItems()[0].name);

        this.tabView.selectedIndex = 0;
    }

}