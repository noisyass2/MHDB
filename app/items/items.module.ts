import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { ItemsRoutingModule } from "./items-routing.module";
import { ItemsComponent } from "./items.component";
import { ItemComponent } from "./item/item.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ItemsRoutingModule,
        SharedModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ItemsComponent,
        ItemComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemsModule { 
    
}
