import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SharedModule } from '../shared/shared.module';
import { NativeScriptUIListViewModule } from 'nativescript-pro-ui/listview/angular';
import { WeaponsRoutingModule } from './weapons-routing.module';
import { WeaponsComponent } from './weapons.component';
import { WBTComponent } from './weaponsbytype/wbt.component';
import { WeaponComponent } from './weapon/weapon.component';
// import { WeaponsByTypeComponent } from './weaponsbytype/weaponsbytype.component';
//import { ItemComponent } from './item/item.component';
@NgModule({
    imports: [
        NativeScriptCommonModule,
        WeaponsRoutingModule,
        SharedModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        WeaponsComponent,
        WBTComponent,
        WeaponComponent
        // WeaponsByTypeComponent
        //ItemComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WeaponsModule { 
}