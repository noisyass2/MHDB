import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-pro-ui/sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-pro-ui/sidedrawer/angular';
import { WeaponsService } from '../../shared/weapons/weapons.service';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { RadListView } from 'nativescript-pro-ui/listview';
@Component({
    selector: 'WBT',
    moduleId: module.id,
    providers: [WeaponsService],
    templateUrl: './wbt.component.html'
})
export class WBTComponent implements OnInit {
    
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
    weapons;

    constructor(private service: WeaponsService,private pageRoute: PageRoute,private routerExtensions: RouterExtensions) { 
        this.pageRoute.activatedRoute
        .switchMap(activatedRoute => activatedRoute.params)
        .forEach((params) => { this.id = params["id"]; });

        this.weapons = this.service.getByType(this.id);
    }

    public onItemSelected(args)
    {
        var listview = args.object as RadListView;
        console.log(listview.getSelectedItems()[0].name);
        this.routerExtensions.navigate(['/weapons/weapon',listview.getSelectedItems()[0].name]);
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
    
}