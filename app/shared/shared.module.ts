import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { MyDrawerItemComponent } from "./my-drawer-item/my-drawer-item.component";
import { MyDrawerComponent } from "./my-drawer/my-drawer.component";
import { RatingComponent } from "./starrating/rating.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        MyDrawerComponent,
        MyDrawerItemComponent,
        RatingComponent
    ],
    exports: [
        MyDrawerComponent,
        NativeScriptUISideDrawerModule,
        RatingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
